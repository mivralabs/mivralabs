import Link from "next/link";
import { Rocket, Bot, LayoutDashboard, Layers, Workflow, Plug, ArrowRight } from "lucide-react";
import { services } from "@/lib/site";

const icons = { Rocket, Bot, LayoutDashboard, Layers, Workflow, Plug };

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-x">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-navy sm:text-4xl">What we build</h2>
        <p className="mt-3 max-w-2xl text-slate-600">Six focused services for founders and teams who want to ship AI-powered products quickly.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.icon];
            return (
              <article key={s.slug} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-royal-soft text-royal"><Icon size={22} /></span>
                <h3 className="mt-5 text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.text}</p>
                <Link href={`/contact?service=${s.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-royal-dark">Discuss this service <ArrowRight size={15} /></Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
