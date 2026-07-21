import { NextResponse } from "next/server";
import { getContentOverrides } from "@/lib/db";
import { mergeContent, SiteContent } from "@/lib/siteContent";

export const dynamic = "force-dynamic";

export async function GET() {
  const overrides = (await getContentOverrides()) as Partial<SiteContent>;
  return NextResponse.json(mergeContent(overrides));
}
