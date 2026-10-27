import Link from "next/link";
const faqs = [
  ["What is an AI MVP?", "An AI MVP (minimum viable product) is the smallest working version of an AI-powered product that lets you test your idea with real users before investing in a full build."],
  ["Can you build an AI-powered SaaS product?", "Yes. We build SaaS products with AI features, including user accounts, dashboards, and integrations with AI models."],
  ["How long does development take?", "Our goal is an MVP in 14 days. The actual timeline depends on project scope and requirements, and we confirm it with you during discovery and planning."],
  ["What information should I provide before starting?", "A short description of your idea, who it is for, the main features you need, any examples you like, your timeline, and a rough budget range if you have one."],
  ["How do you estimate project costs?", "Cost depends on scope, complexity, and integrations. After reviewing your requirements, we provide an estimate before any work begins."],
  ["Can you integrate third-party AI APIs?", "Yes. We can integrate AI model providers and other third-party services that fit your product and budget."],
  ["How can I get started?", "Send us your project details through the contact form. We will review them and follow up by email."],
];
export default function Faq() {
  return (
    <section className="section bg-white">
      <div className="container-x max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Frequently asked questions</h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {faqs.map(([q, a]) => (
            <details key={q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
                {q}<span className="text-royal transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{a}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-600">Still have questions? <Link href="/contact" className="font-semibold text-royal">Contact us</Link>.</p>
      </div>
    </section>
  );
}
