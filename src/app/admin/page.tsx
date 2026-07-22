"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { SiteContent } from "@/lib/siteContent";

// ─── Section metadata ────────────────────────────────────────────────────────
const SECTION_LABELS: Record<string, string> = {
  translations: "Site Text (EN / MS)",
  brand: "Logo & Branding",
  contact: "Contact Info",
  heroStats: "Hero Stats",
  servicesHome: "Services (Home)",
  servicesPage: "Services (Full Page)",
  servicesHighlights: "Service Highlights",
  packages: "Packages / Pricing",
  comparison: "Package Comparison Table",
  team: "Team Members",
  values: "Company Values",
  clients: "Clients / Logos",
  projects: "Portfolio Projects",
  workStats: "Work Page Stats",
  jobs: "Job Openings",
};

const SECTION_ORDER = Object.keys(SECTION_LABELS) as (keyof SiteContent)[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyObj = Record<string, any>;

// ─── Image field (upload + preview + library) ────────────────────────────────
function ImageField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [library, setLibrary] = useState<{ name: string; url: string }[] | null>(null);

  const upload = async (file: File) => {
    setUploading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/media", { method: "POST", body: fd });
      const data = await res.json();
      if (res.ok) onChange(data.url);
      else setError(data.error || "Upload failed");
    } catch {
      setError("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const openLibrary = async () => {
    if (library) return setLibrary(null);
    const res = await fetch("/api/admin/media");
    const data = await res.json();
    setLibrary(data.files || []);
  };

  return (
    <div className="py-2">
      <div className="text-xs text-gray-500 font-semibold mb-1">{label}</div>
      <div className="flex items-start gap-3">
        {value && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={value}
            alt=""
            className="w-16 h-16 rounded-lg object-cover border border-white/15 bg-white/5 shrink-0"
          />
        )}
        <div className="flex-1">
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="/image.png or https://..."
            className="w-full bg-[#0a1628] border border-white/10 focus:border-cyan-500 rounded-lg px-3 py-2 text-sm text-white outline-none"
          />
          <div className="flex gap-2 mt-2">
            <label className="px-3 py-1.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 rounded-lg text-cyan-400 text-xs font-semibold cursor-pointer">
              {uploading ? "Uploading..." : "Upload Image"}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                disabled={uploading}
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) upload(f);
                  e.target.value = "";
                }}
              />
            </label>
            <button
              type="button"
              onClick={openLibrary}
              className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg text-gray-300 text-xs font-semibold"
            >
              {library ? "Close Library" : "Choose Existing"}
            </button>
          </div>
          {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
          {library && (
            <div className="grid grid-cols-6 gap-2 mt-3 p-2 bg-[#0a1628] border border-white/10 rounded-lg max-h-48 overflow-y-auto">
              {library.length === 0 && (
                <p className="col-span-6 text-gray-500 text-xs p-2">
                  No uploads yet. Use “Upload Image” above.
                </p>
              )}
              {library.map((f) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={f.url}
                  src={f.url}
                  alt={f.name}
                  title={f.name}
                  onClick={() => {
                    onChange(f.url);
                    setLibrary(null);
                  }}
                  className="w-full aspect-square object-cover rounded border border-white/10 hover:border-cyan-500 cursor-pointer"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Generic field editor ────────────────────────────────────────────────────
function FieldEditor({
  label,
  value,
  onChange,
}: {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (v: any) => void;
}) {
  if (label === "image" || label === "logo" || label === "photo") {
    return <ImageField label={label} value={String(value ?? "")} onChange={onChange} />;
  }
  if (typeof value === "boolean") {
    return (
      <label className="flex items-center gap-2 text-sm text-gray-300 py-1">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="accent-cyan-500 w-4 h-4"
        />
        {label}
      </label>
    );
  }
  if (Array.isArray(value)) {
    // array of strings → one per line
    return (
      <div className="py-1">
        <div className="text-xs text-gray-500 font-semibold mb-1">{label} (one per line)</div>
        <textarea
          value={value.join("\n")}
          onChange={(e) => onChange(e.target.value.split("\n"))}
          rows={Math.min(Math.max(value.length + 1, 2), 12)}
          className="w-full bg-[#0a1628] border border-white/10 focus:border-cyan-500 rounded-lg px-3 py-2 text-sm text-white outline-none"
        />
      </div>
    );
  }
  const str = String(value ?? "");
  const long = str.length > 70 || str.includes("\n");
  return (
    <div className="py-1">
      <div className="text-xs text-gray-500 font-semibold mb-1">{label}</div>
      {long ? (
        <textarea
          value={str}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full bg-[#0a1628] border border-white/10 focus:border-cyan-500 rounded-lg px-3 py-2 text-sm text-white outline-none"
        />
      ) : (
        <input
          value={str}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-[#0a1628] border border-white/10 focus:border-cyan-500 rounded-lg px-3 py-2 text-sm text-white outline-none"
        />
      )}
    </div>
  );
}

// ─── Array-of-objects editor ─────────────────────────────────────────────────
function ArrayEditor({
  items,
  onChange,
}: {
  items: AnyObj[];
  onChange: (items: AnyObj[]) => void;
}) {
  const blank = (): AnyObj => {
    const template = items[0] || {};
    const empty: AnyObj = {};
    for (const [k, v] of Object.entries(template)) {
      empty[k] = typeof v === "boolean" ? false : Array.isArray(v) ? [] : "";
    }
    return empty;
  };

  const update = (i: number, key: string, v: unknown) => {
    const next = items.map((item, idx) => (idx === i ? { ...item, [key]: v } : item));
    onChange(next);
  };
  const remove = (i: number) => onChange(items.filter((_, idx) => idx !== i));
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <div key={i} className="bg-[#0d1f35] border border-white/10 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-cyan-400 text-sm font-bold">
              #{i + 1} {String(item.title || item.name || item.feature || "")}
            </span>
            <div className="flex gap-2 text-xs">
              <button onClick={() => move(i, -1)} className="px-2 py-1 bg-white/5 hover:bg-white/15 rounded text-gray-300">↑</button>
              <button onClick={() => move(i, 1)} className="px-2 py-1 bg-white/5 hover:bg-white/15 rounded text-gray-300">↓</button>
              <button onClick={() => remove(i)} className="px-2 py-1 bg-red-500/15 hover:bg-red-500/30 border border-red-500/30 rounded text-red-400">Delete</button>
            </div>
          </div>
          {Object.entries(item).map(([key, v]) => (
            <FieldEditor key={key} label={key} value={v} onChange={(nv) => update(i, key, nv)} />
          ))}
        </div>
      ))}
      <button
        onClick={() => onChange([...items, blank()])}
        className="self-start px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 rounded-lg text-cyan-400 text-sm font-semibold"
      >
        + Add Item
      </button>
    </div>
  );
}

// ─── Translations editor ─────────────────────────────────────────────────────
function TranslationsEditor({
  value,
  onChange,
}: {
  value: { en: Record<string, string>; ms: Record<string, string> };
  onChange: (v: { en: Record<string, string>; ms: Record<string, string> }) => void;
}) {
  const [lang, setLang] = useState<"en" | "ms">("en");
  const dict = value[lang] || {};
  return (
    <div>
      <div className="flex gap-2 mb-4">
        {(["en", "ms"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-1.5 rounded-full text-sm font-bold ${
              lang === l ? "bg-cyan-500 text-white" : "bg-white/5 text-gray-400 hover:text-white"
            }`}
          >
            {l === "en" ? "English" : "Malay"}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        {Object.entries(dict).map(([key, text]) => (
          <FieldEditor
            key={`${lang}-${key}`}
            label={key}
            value={text}
            onChange={(nv) => onChange({ ...value, [lang]: { ...dict, [key]: nv } })}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Main admin page ─────────────────────────────────────────────────────────
export default function AdminPage() {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent | null>(null);
  const [active, setActive] = useState<keyof SiteContent>("translations");
  const [dirty, setDirty] = useState<Set<string>>(new Set());
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [dbConfigured, setDbConfigured] = useState(true);
  const [overridden, setOverridden] = useState<string[]>([]);

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/content");
    if (res.status === 401) {
      router.push("/admin/login");
      return;
    }
    const data = await res.json();
    setContent(data.content);
    setDbConfigured(data.dbConfigured);
    setOverridden(data.overriddenSections || []);
  }, [router]);

  useEffect(() => {
    load();
  }, [load]);

  const updateSection = (section: keyof SiteContent, data: unknown) => {
    setContent((c) => (c ? ({ ...c, [section]: data } as SiteContent) : c));
    setDirty((d) => new Set(d).add(section));
  };

  const save = async (section: keyof SiteContent) => {
    if (!content) return;
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section, data: content[section] }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setMessage(`Saved "${SECTION_LABELS[section]}" ✔`);
        setDirty((d) => {
          const next = new Set(d);
          next.delete(section);
          return next;
        });
        if (!overridden.includes(section)) setOverridden([...overridden, section]);
      } else {
        setMessage(data.error || "Save failed");
      }
    } catch {
      setMessage("Network error while saving");
    } finally {
      setSaving(false);
    }
  };

  const resetSection = async (section: keyof SiteContent) => {
    if (!confirm(`Reset "${SECTION_LABELS[section]}" back to the original built-in content?`)) return;
    setSaving(true);
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ section, reset: true }),
      });
      if (res.ok) {
        setMessage(`"${SECTION_LABELS[section]}" reset to default`);
        setOverridden(overridden.filter((s) => s !== section));
        await load();
      }
    } finally {
      setSaving(false);
    }
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  if (!content) {
    return (
      <main className="min-h-screen bg-[#0a1628] flex items-center justify-center text-gray-400">
        Loading admin...
      </main>
    );
  }

  const activeValue = content[active];

  return (
    <main className="min-h-screen bg-[#0a1628] text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-20 bg-[#07111f]/95 backdrop-blur border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-extrabold text-lg">
            <span className="text-cyan-400">NDT</span> Content Manager
          </h1>
          {!dbConfigured && (
            <p className="text-amber-400 text-xs mt-0.5">
              ⚠ Supabase not configured — edits cannot be saved yet
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          {message && <span className="text-sm text-cyan-400">{message}</span>}
          <a href="/" target="_blank" className="text-sm text-gray-400 hover:text-white px-3 py-1.5 bg-white/5 rounded-lg">
            View Site ↗
          </a>
          <button onClick={logout} className="text-sm text-gray-400 hover:text-red-400 px-3 py-1.5 bg-white/5 rounded-lg">
            Logout
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 shrink-0 border-r border-white/10 min-h-screen p-4 hidden md:block">
          {SECTION_ORDER.map((section) => (
            <button
              key={section}
              onClick={() => setActive(section)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm mb-1 transition-colors ${
                active === section
                  ? "bg-cyan-500/15 text-cyan-400 font-bold border border-cyan-500/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {SECTION_LABELS[section]}
              {dirty.has(section) && <span className="text-amber-400 ml-1">●</span>}
              {overridden.includes(section) && !dirty.has(section) && (
                <span className="text-green-500 ml-1 text-xs">✔</span>
              )}
            </button>
          ))}
        </nav>

        {/* Mobile section picker */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#07111f] border-t border-white/10 p-3 z-20">
          <select
            value={active}
            onChange={(e) => setActive(e.target.value as keyof SiteContent)}
            className="w-full bg-[#0a1628] border border-white/15 rounded-lg px-3 py-2 text-sm"
          >
            {SECTION_ORDER.map((s) => (
              <option key={s} value={s}>{SECTION_LABELS[s]}</option>
            ))}
          </select>
        </div>

        {/* Editor */}
        <section className="flex-1 p-6 pb-28 md:pb-6 max-w-4xl">
          <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
            <h2 className="text-2xl font-extrabold">{SECTION_LABELS[active]}</h2>
            <div className="flex gap-2">
              {overridden.includes(active) && (
                <button
                  onClick={() => resetSection(active)}
                  disabled={saving}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg text-gray-300 text-sm font-semibold"
                >
                  Reset to Default
                </button>
              )}
              <button
                onClick={() => save(active)}
                disabled={saving || !dbConfigured}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 rounded-lg font-bold text-sm"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>

          {active === "translations" ? (
            <TranslationsEditor
              value={content.translations}
              onChange={(v) => updateSection("translations", v)}
            />
          ) : Array.isArray(activeValue) && typeof activeValue[0] === "string" ? (
            <FieldEditor
              label="Items"
              value={activeValue}
              onChange={(v) => updateSection(active, v)}
            />
          ) : Array.isArray(activeValue) ? (
            <ArrayEditor
              items={activeValue as AnyObj[]}
              onChange={(v) => updateSection(active, v)}
            />
          ) : (
            <div className="bg-[#0d1f35] border border-white/10 rounded-xl p-4">
              {Object.entries(activeValue as AnyObj).map(([key, v]) => (
                <FieldEditor
                  key={key}
                  label={key}
                  value={v}
                  onChange={(nv) => updateSection(active, { ...(activeValue as AnyObj), [key]: nv })}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
