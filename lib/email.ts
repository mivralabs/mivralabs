import type { InquiryInput } from "./schema";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
export const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export function buildEmail(d: InquiryInput, submittedAt: string) {
  const rows: [string, string][] = [
    ["Full name", d.name], ["Work email", d.email], ["Company", d.company || "Not provided"],
    ["Project type", d.projectType], ["Estimated budget", d.budget || "Not provided"],
    ["Desired timeline", d.timeline || "Not provided"], ["Submitted", submittedAt],
  ];
  const text = [
    `New project inquiry from ${d.name}`, "", ...rows.map(([k, v]) => `${k}: ${v}`), "",
    "Project description:", d.description, "", "Additional details:", d.details || "None",
  ].join("\n");
  const html = `<!doctype html><html><body style="margin:0;background:#F5F7FA;font-family:Arial,Helvetica,sans-serif;color:#1F2937">
<div style="max-width:620px;margin:0 auto;padding:24px">
<div style="background:#0B1B3A;color:#fff;padding:20px 24px;border-radius:12px 12px 0 0"><div style="font-size:12px;letter-spacing:1px;opacity:.7">MIVRA LABS</div><div style="font-size:20px;font-weight:700;margin-top:4px">New project inquiry</div></div>
<div style="background:#fff;padding:24px;border-radius:0 0 12px 12px;border:1px solid #E5E7EB;border-top:0">
<table style="width:100%;border-collapse:collapse;font-size:14px">
${rows.map(([k, v]) => `<tr><td style="padding:8px 0;color:#6B7280;width:150px;vertical-align:top">${esc(k)}</td><td style="padding:8px 0;font-weight:600">${k === "Work email" ? `<a href="mailto:${esc(v)}" style="color:#2457F5">${esc(v)}</a>` : esc(v)}</td></tr>`).join("")}
</table>
<h3 style="margin:24px 0 6px;font-size:14px">Project description</h3>
<p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(d.description)}</p>
<h3 style="margin:20px 0 6px;font-size:14px">Additional details</h3>
<p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(d.details || "None")}</p>
<p style="margin:24px 0 0;font-size:12px;color:#6B7280">Reply to this email to respond directly to ${esc(d.name)}.</p>
</div></div></body></html>`;
  return { html, text };
}
