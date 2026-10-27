import type { Metadata } from "next";
import { SITE } from "@/lib/site";
export const metadata: Metadata = { title: "Privacy Policy" };

const S = ({ t, children }: { t: string; children: React.ReactNode }) => (<><h2 className="mt-8 text-xl font-semibold text-navy">{t}</h2><div className="mt-2 space-y-3 leading-relaxed text-slate-600">{children}</div></>);

export default function Privacy() {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-x max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-navy">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: October 2026. This is a basic template; have it reviewed by a qualified professional before relying on it.</p>
        <S t="What we collect"><p>When you submit the project inquiry form, we collect the details you enter: your name, work email, company name (optional), project type, budget and timeline (optional), and your project descriptions.</p></S>
        <S t="How we use it"><p>We use this information only to review your inquiry and respond to you about your project. We do not sell your personal information.</p></S>
        <S t="How it is handled"><p>Inquiries are sent by email to our team through a transactional email provider (Resend). This website does not store inquiries in a database. Copies may remain in our email accounts and the provider&apos;s delivery logs for a limited time.</p></S>
        <S t="Retention"><p>We keep inquiry emails as long as needed to respond and manage a possible working relationship, then delete them when no longer needed.</p></S>
        <S t="Your choices"><p>You may ask us to access, correct, or delete the information you sent us by emailing <a className="font-medium text-royal" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p></S>
        <S t="Contact"><p>Questions about this policy can be sent to the email address above.</p></S>
      </div>
    </section>
  );
}
