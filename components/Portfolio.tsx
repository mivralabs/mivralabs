// Replace the demo entries with real projects when available. Set `demo: false` once a project is real and approved for display.
type Project = { title: string; summary: string; tags: string[]; demo: boolean; href?: string };
const projects: Project[] = [
  { title: "Support chatbot concept", summary: "A demo of a chatbot that answers product questions from a knowledge base.", tags: ["AI Chatbot", "Demo"], demo: true },
  { title: "Invoice intake automation concept", summary: "A demo workflow that reads incoming invoices and routes them for approval.", tags: ["AI Automation", "Demo"], demo: true },
  { title: "Founder dashboard concept", summary: "A demo SaaS dashboard layout for tracking early product metrics.", tags: ["SaaS", "Demo"], demo: true },
];
export default function Portfolio() {
  return (
    <section className="section bg-mist">
      <div className="container-x">
        <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Projects</h2>
        <p className="mt-3 max-w-2xl text-slate-600">Real case studies will appear here. The examples below are illustrative demos, not completed client work.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-2xl bg-white shadow-card">
              <div className="grid h-40 place-items-center bg-gradient-to-br from-royal-soft to-white text-sm font-semibold text-royal">{p.demo ? "Demo concept" : "Case study"}</div>
              <div className="p-6">
                <h3 className="font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-slate-600">{t}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
