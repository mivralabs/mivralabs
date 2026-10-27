import { Zap, MessageSquare, Target, Blocks, Compass } from "lucide-react";
const items = [
  [Zap, "Fast, focused development", "We keep scope tight so you reach a testable product sooner."],
  [MessageSquare, "Clear communication", "Plain-language updates, so you always know where the build stands."],
  [Target, "Tailored to your business", "Solutions shaped around your users and goals, not a fixed template."],
  [Blocks, "Practical, scalable architecture", "Sensible foundations that you can extend after launch."],
  [Compass, "A founder-first approach", "We think about validation, budget, and next steps, not only code."],
] as const;
export default function Why() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Why choose MIVRA LABS</h2>
          <p className="mt-3 text-slate-600">We are an AI development agency built for founders who want to move from idea to working product without a long, expensive build.</p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2">
          {items.map(([Icon, t, d]) => (
            <li key={t} className="flex gap-4 rounded-2xl border border-slate-200 p-5">
              <Icon className="mt-0.5 shrink-0 text-royal" size={22} />
              <div><h3 className="font-semibold text-navy">{t}</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">{d}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
