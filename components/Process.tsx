const steps = [
  ["Discovery", "We learn about your idea, your users, and your goals."],
  ["Planning", "We define features, set priorities, and agree on a development roadmap."],
  ["Build", "We develop and test the MVP, sharing progress along the way."],
  ["Launch", "We prepare the product for launch and hand it over to you."],
];
export default function Process() {
  return (
    <section id="process" className="section bg-mist">
      <div className="container-x">
        <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">How it works</h2>
        <p className="mt-3 max-w-2xl text-slate-600">Four steps from first conversation to a product you can show people. The 14-day target depends on project scope and requirements, and we confirm a realistic timeline during discovery.</p>
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="rounded-2xl bg-white p-6 shadow-card">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-royal text-sm font-bold text-white">{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-navy">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
