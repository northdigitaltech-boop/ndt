import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { escapeHtml } from "@/lib/escapeHtml";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message, website } = await req.json();

    // Honeypot: real users never fill this hidden field.
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    await transporter.sendMail({
      from: `"NorthDigital Contact Form" <${process.env.GMAIL_USER}>`,
      to: "northdigitaltech@gmail.com",
      replyTo: String(email),
      subject: subject
        ? `[Contact] ${String(subject)} — from ${String(name)}`
        : `[Contact] New message from ${String(name)}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:32px;border-radius:12px;">
          <h2 style="color:#0891b2;margin-bottom:8px;">New Contact Form Submission</h2>
          <hr style="border:none;border-top:1px solid #e0e0e0;margin-bottom:24px;" />
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Subject:</strong> ${safeSubject || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <div style="background:#fff;border-left:4px solid #0891b2;padding:16px;border-radius:6px;margin-top:8px;white-space:pre-wrap;">${safeMessage}</div>
          <hr style="border:none;border-top:1px solid #e0e0e0;margin-top:32px;" />
          <p style="font-size:12px;color:#888;">Sent via NorthDigital Tech contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
