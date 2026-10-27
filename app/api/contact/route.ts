import { NextResponse } from "next/server";
import { Resend } from "resend";
import { inquirySchema } from "@/lib/schema";
import { rateLimited } from "@/lib/rateLimit";
import { buildEmail, oneLine } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again in a few minutes." }, { status: 429 });
  }

  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  // Honeypot: bots fill the hidden field. Respond as if successful, send nothing.
  if (typeof body === "object" && body && (body as Record<string, unknown>).website) {
    return NextResponse.json({ ok: true });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again.", fields: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const { RESEND_API_KEY, CONTACT_EMAIL, FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_EMAIL || !FROM_EMAIL) {
    console.error("Email is not configured: set RESEND_API_KEY, CONTACT_EMAIL and FROM_EMAIL.");
    return NextResponse.json({ error: "We couldn't send your inquiry right now. Please email us directly." }, { status: 500 });
  }

  const d = parsed.data;
  const submittedAt = new Date().toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "full", timeStyle: "long" });
  const { html, text } = buildEmail(d, submittedAt);

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL, to: [CONTACT_EMAIL], replyTo: d.email,
      subject: `New Project Inquiry — ${oneLine(d.name)}`, html, text,
    });
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "We couldn't send your inquiry. Please try again or email us directly." }, { status: 502 });
    }
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json({ error: "We couldn't send your inquiry. Please try again or email us directly." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
