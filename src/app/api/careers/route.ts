import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { Attachment } from "nodemailer/lib/mailer";
import { escapeHtml, safeUrl } from "@/lib/escapeHtml";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const MAX_CV_BYTES = 10 * 1024 * 1024; // 10 MB

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Honeypot: real users never fill this hidden field.
    if (formData.get("website")) {
      return NextResponse.json({ success: true });
    }

    const field = (name: string) => escapeHtml(formData.get(name) as string | null);

    const position         = field("position");
    const fullName         = field("fullName");
    const phone            = field("phone");
    const email            = (formData.get("email") as string) || "";
    const city             = field("city");
    const experience       = field("experience");
    const currentCompany   = field("currentCompany");
    const currentPosition  = field("currentPosition");
    const expectedSalary   = field("expectedSalary");
    const availableFrom    = field("availableFrom");
    const keySkills        = field("keySkills");
    const softwareTools    = field("softwareTools");
    const portfolioLink    = safeUrl(formData.get("portfolioLink"));
    const linkedIn         = safeUrl(formData.get("linkedIn"));
    const whyJoin          = field("whyJoin");
    const internationalClients = formData.get("internationalClients") as string;
    const cvFile           = formData.get("cv") as File | null;

    if (!position || !fullName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (cvFile && cvFile.size > MAX_CV_BYTES) {
      return NextResponse.json({ error: "CV file too large (max 10 MB)" }, { status: 400 });
    }

    const safeEmail = escapeHtml(email);
    const safeCvName = cvFile ? escapeHtml(cvFile.name) : "";

    const attachments: Attachment[] = [];
    if (cvFile && cvFile.size > 0) {
      const buffer = Buffer.from(await cvFile.arrayBuffer());
      attachments.push({
        filename: cvFile.name,
        content: buffer,
        contentType: cvFile.type || "application/octet-stream",
      });
    }

    await transporter.sendMail({
      from: `"NorthDigital Careers" <${process.env.GMAIL_USER}>`,
      to: "northdigitaltech@gmail.com",
      replyTo: email,
      subject: `New Application: ${String(formData.get("position") || "")} — ${String(formData.get("fullName") || "")}`,
      attachments,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;background:#f4f7fb;padding:32px;border-radius:12px;">
          <div style="background:#0a1628;padding:24px 32px;border-radius:10px 10px 0 0;text-align:center;">
            <h1 style="color:#22d3ee;margin:0;font-size:22px;">New Job Application</h1>
            <p style="color:#94a3b8;margin:6px 0 0;">North Digital Tech — Careers</p>
          </div>
          <div style="background:#ffffff;padding:32px;border-radius:0 0 10px 10px;">

            <h2 style="color:#0a1628;font-size:18px;border-bottom:2px solid #22d3ee;padding-bottom:8px;">
              Position Applied: <span style="color:#0891b2;">${position}</span>
            </h2>

            <h3 style="color:#0a1628;margin-top:24px;">👤 Personal Information</h3>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:6px 0;color:#64748b;width:40%;">Full Name</td><td style="padding:6px 0;color:#0a1628;font-weight:600;">${fullName}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Phone</td><td style="padding:6px 0;color:#0a1628;">${phone}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Email</td><td style="padding:6px 0;color:#0891b2;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">City</td><td style="padding:6px 0;color:#0a1628;">${city}</td></tr>
            </table>

            <h3 style="color:#0a1628;margin-top:24px;">💼 Professional Background</h3>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:6px 0;color:#64748b;width:40%;">Years of Experience</td><td style="padding:6px 0;color:#0a1628;">${experience}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Current Company</td><td style="padding:6px 0;color:#0a1628;">${currentCompany || "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Current Position</td><td style="padding:6px 0;color:#0a1628;">${currentPosition || "—"}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Expected Salary</td><td style="padding:6px 0;color:#0a1628;">${expectedSalary}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">Available From</td><td style="padding:6px 0;color:#0a1628;">${availableFrom}</td></tr>
            </table>

            <h3 style="color:#0a1628;margin-top:24px;">🛠️ Skills & Tools</h3>
            <p style="color:#64748b;margin:4px 0 2px;">Key Skills:</p>
            <p style="color:#0a1628;background:#f1f5f9;padding:10px;border-radius:6px;">${keySkills}</p>
            <p style="color:#64748b;margin:12px 0 2px;">Software & Tools:</p>
            <p style="color:#0a1628;background:#f1f5f9;padding:10px;border-radius:6px;">${softwareTools}</p>

            <h3 style="color:#0a1628;margin-top:24px;">🔗 Links</h3>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:6px 0;color:#64748b;width:40%;">Portfolio</td><td style="padding:6px 0;color:#0891b2;">${portfolioLink ? `<a href="${portfolioLink}">${portfolioLink}</a>` : "Not provided"}</td></tr>
              <tr><td style="padding:6px 0;color:#64748b;">LinkedIn</td><td style="padding:6px 0;color:#0891b2;">${linkedIn ? `<a href="${linkedIn}">${linkedIn}</a>` : "Not provided"}</td></tr>
            </table>

            <h3 style="color:#0a1628;margin-top:24px;">📋 Additional Information</h3>
            <p style="color:#64748b;margin:4px 0 2px;">Why join North Digital?</p>
            <p style="color:#0a1628;background:#f1f5f9;padding:10px;border-radius:6px;white-space:pre-wrap;">${whyJoin}</p>
            <p style="color:#64748b;margin:12px 0 4px;">Worked with international clients: <strong style="color:#0a1628;">${internationalClients === "yes" ? "✅ Yes" : "❌ No"}</strong></p>
            <p style="color:#64748b;margin:4px 0;">CV Attached: <strong style="color:#0a1628;">${cvFile && cvFile.size > 0 ? `✅ ${safeCvName}` : "❌ No CV uploaded"}</strong></p>

          </div>
          <p style="text-align:center;font-size:12px;color:#94a3b8;margin-top:16px;">
            Sent via NorthDigital Tech Careers Form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Careers API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
