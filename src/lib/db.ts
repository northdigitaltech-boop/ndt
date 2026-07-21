import { createClient, SupabaseClient } from "@supabase/supabase-js";

const CONTENT_TABLE = "site_content";
export const MEDIA_BUCKET = "media";

// Cached client across hot reloads / serverless invocations.
const globalForSupabase = globalThis as unknown as { _supabase?: SupabaseClient };

export function isDbConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

/** Server-side client using the service role key (bypasses RLS). Never expose to the browser. */
export function getSupabase(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not set");
  }
  if (!globalForSupabase._supabase) {
    globalForSupabase._supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return globalForSupabase._supabase;
}

/** Returns all stored content overrides as { section: data }, or {} if not configured. */
export async function getContentOverrides(): Promise<Record<string, unknown>> {
  if (!isDbConfigured()) return {};
  try {
    const { data, error } = await getSupabase().from(CONTENT_TABLE).select("section, data");
    if (error) throw error;
    const out: Record<string, unknown> = {};
    for (const row of data ?? []) {
      out[row.section as string] = row.data;
    }
    return out;
  } catch (err) {
    console.error("getContentOverrides error:", err);
    return {};
  }
}

export async function saveContentSection(section: string, data: unknown): Promise<void> {
  const { error } = await getSupabase()
    .from(CONTENT_TABLE)
    .upsert({ section, data, updated_at: new Date().toISOString() }, { onConflict: "section" });
  if (error) throw error;
}

export async function resetContentSection(section: string): Promise<void> {
  const { error } = await getSupabase().from(CONTENT_TABLE).delete().eq("section", section);
  if (error) throw error;
}

/** Uploads a file to Supabase Storage and returns its public URL. */
export async function uploadMedia(
  fileName: string,
  body: ArrayBuffer | Buffer,
  contentType: string
): Promise<string> {
  const supabase = getSupabase();
  const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, "-").toLowerCase();
  const path = `${Date.now()}-${safeName}`;

  const { error } = await supabase.storage
    .from(MEDIA_BUCKET)
    .upload(path, body, { contentType, upsert: false });
  if (error) throw error;

  const { data } = supabase.storage.from(MEDIA_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

export async function listMedia(): Promise<{ name: string; url: string }[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase.storage
    .from(MEDIA_BUCKET)
    .list("", { limit: 200, sortBy: { column: "created_at", order: "desc" } });
  if (error) throw error;
  return (data ?? [])
    .filter((f) => f.name !== ".emptyFolderPlaceholder")
    .map((f) => ({
      name: f.name,
      url: supabase.storage.from(MEDIA_BUCKET).getPublicUrl(f.name).data.publicUrl,
    }));
}
