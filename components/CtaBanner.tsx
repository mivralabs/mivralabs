import Link from "next/link";
export default function CtaBanner() {
  return (
    <section className="section bg-white pt-0">
      <div className="container-x">
        <div className="rounded-3xl bg-navy px-6 py-14 text-center text-white sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Have an Idea Worth Building?</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">Tell us what you&apos;re working on. Let&apos;s explore how we can turn your idea into a working product.</p>
          <Link href="/contact" className="btn-primary mt-8">Tell Us About Your Project</Link>
        </div>
      </div>
    </section>
  );
}
