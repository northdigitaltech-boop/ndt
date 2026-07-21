import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";
import { getContentOverrides, saveContentSection, resetContentSection, isDbConfigured } from "@/lib/db";
import { contentSections, mergeContent, SiteContent } from "@/lib/siteContent";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const overrides = (await getContentOverrides()) as Partial<SiteContent>;
  return NextResponse.json({
    content: mergeContent(overrides),
    dbConfigured: isDbConfigured(),
    overriddenSections: Object.keys(overrides),
  });
}

export async function PUT(req: NextRequest) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!isDbConfigured()) {
    return NextResponse.json(
      { error: "Supabase is not configured — set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY." },
      { status: 500 }
    );
  }
  try {
    const { section, data, reset } = await req.json();
    if (!contentSections.includes(section)) {
      return NextResponse.json({ error: `Unknown section: ${section}` }, { status: 400 });
    }
    if (reset) {
      await resetContentSection(section);
    } else {
      await saveContentSection(section, data);
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Admin content save error:", err);
    return NextResponse.json({ error: "Save failed" }, { status: 500 });
  }
}
