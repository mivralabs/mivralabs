import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const phases = [
  { name: "Discovery", days: "Days 1–2", left: 0, w: 14 },
  { name: "Planning", days: "Days 2–4", left: 14, w: 16 },
  { name: "Build and test", days: "Days 4–12", left: 30, w: 56 },
  { name: "Launch and handover", days: "Days 12–14", left: 86, w: 14 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_0%,rgba(36,87,245,.45),transparent)]" aria-hidden />
      <div className="container-x relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="text-sm font-semibold text-blue-200">IDEA → AI MVP IN 14 DAYS</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">From Idea to AI MVP in Just 14 Days.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">We help ambitious founders turn their ideas into powerful AI-powered products, web applications, and MVPs — built for speed, usability, and growth.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">Start Your Project <ArrowRight size={16} /></Link>
            <Link href="#services" className="btn border border-white/25 text-white hover:bg-white/10">Explore Our Services</Link>
          </div>
          <ul className="mt-10 space-y-2.5 text-sm text-slate-200">
            {["AI-powered product development", "Rapid MVP development", "Founder-focused solutions"].map((t) => (
              <li key={t} className="flex items-center gap-2.5"><CheckCircle2 size={18} className="text-blue-300" />{t}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white p-5 text-ink shadow-2xl sm:p-6" role="img" aria-label="Example 14-day build timeline from discovery to launch">
          <div className="flex items-center justify-between">
            <div><p className="text-sm font-semibold text-navy">Example MVP build plan</p><p className="text-xs text-slate-500">Timeline varies with scope</p></div>
            <span className="rounded-full bg-royal-soft px-3 py-1 text-xs font-semibold text-royal">14 days</span>
          </div>
          <div className="mt-6 space-y-4">
            {phases.map((p, i) => (
              <div key={p.name}>
                <div className="mb-1.5 flex justify-between text-xs"><span className="font-medium text-navy">{p.name}</span><span className="text-slate-500">{p.days}</span></div>
                <div className="h-2.5 rounded-full bg-mist">
                  <div className="bar h-2.5 rounded-full bg-royal" style={{ marginLeft: `${p.left}%`, width: `${p.w}%`, animationDelay: `${i * 0.15}s` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-mist p-4 text-xs text-slate-600">Illustrative graphic. Actual schedules are agreed with you after a discovery conversation.</div>
        </div>
      </div>
    </section>
  );
}
