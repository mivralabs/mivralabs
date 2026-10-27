"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { inquirySchema, projectTypes, budgets, timelines, type InquiryInput } from "@/lib/schema";

type Status = "idle" | "sending" | "success" | "error";

function Field({ label, error, required, children, id }: { label: string; error?: string; required?: boolean; children: React.ReactNode; id: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">{label}{required ? <span className="text-red-600"> *</span> : <span className="font-normal text-slate-500"> (optional)</span>}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default function ContactForm({ defaultType }: { defaultType?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { projectType: (projectTypes as readonly string[]).includes(defaultType ?? "") ? (defaultType as InquiryInput["projectType"]) : undefined, budget: "", timeline: "", company: "", details: "", website: "" },
  });

  async function onSubmit(values: InquiryInput) {
    if (status === "sending") return;
    setStatus("sending"); setServerError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { setServerError(data.error ?? "Something went wrong. Please try again."); setStatus("error"); return; }
      reset(); setStatus("success");
    } catch {
      setServerError("Network error. Check your connection and try again."); setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto text-green-600" size={40} />
        <h2 className="mt-4 text-xl font-semibold text-navy">Inquiry sent</h2>
        <p className="mt-2 text-sm text-slate-600">Thanks for sharing your project. We&apos;ll review it and reply to the email you provided.</p>
        <button onClick={() => setStatus("idle")} className="btn-secondary mt-6">Send another inquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" required error={errors.name?.message}>
          <input id="name" autoComplete="name" className="field" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} {...register("name")} />
        </Field>
        <Field id="email" label="Work email" required error={errors.email?.message}>
          <input id="email" type="email" autoComplete="email" className="field" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} {...register("email")} />
        </Field>
      </div>
      <Field id="company" label="Company or startup name" error={errors.company?.message}>
        <input id="company" autoComplete="organization" className="field" {...register("company")} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-3">
        <Field id="projectType" label="Project type" required error={errors.projectType?.message}>
          <select id="projectType" className="field" defaultValue={defaultType && (projectTypes as readonly string[]).includes(defaultType) ? defaultType : ""} {...register("projectType")}>
            <option value="" disabled>Select a type</option>
            {projectTypes.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field id="budget" label="Estimated budget">
          <select id="budget" className="field" {...register("budget")}><option value="">Select a range</option>{budgets.map((o) => <option key={o}>{o}</option>)}</select>
        </Field>
        <Field id="timeline" label="Desired timeline">
          <select id="timeline" className="field" {...register("timeline")}><option value="">Select a timeline</option>{timelines.map((o) => <option key={o}>{o}</option>)}</select>
        </Field>
      </div>
      <Field id="description" label="Project description" required error={errors.description?.message}>
        <textarea id="description" rows={5} className="field" placeholder="What are you building, and who is it for?" aria-invalid={!!errors.description} aria-describedby={errors.description ? "description-err" : undefined} {...register("description")} />
      </Field>
      <Field id="details" label="Additional project details" error={errors.details?.message}>
        <textarea id="details" rows={3} className="field" placeholder="Links, must-have features, integrations, references…" {...register("details")} />
      </Field>

      {/* Honeypot: hidden from people, visible to bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-slate-600">
          <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300 accent-royal" aria-invalid={!!errors.consent} {...register("consent")} />
          <span>I agree that MIVRA LABS may use these details to respond to my inquiry, as described in the <Link href="/privacy" className="font-medium text-royal underline">Privacy Policy</Link>. <span className="text-red-600">*</span></span>
        </label>
        {errors.consent && <p role="alert" className="mt-1.5 text-sm text-red-600">{errors.consent.message}</p>}
      </div>

      {status === "error" && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{serverError}</p>}

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
        {status === "sending" ? <><Loader2 size={16} className="animate-spin" /> Sending…</> : "Send project details"}
      </button>
    </form>
  );
}
