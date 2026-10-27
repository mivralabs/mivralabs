import Link from "next/link";
import Logo from "./Logo";
import { SITE, services } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">MIVRA LABS is an AI development agency helping founders turn ideas into AI-powered products, web applications, and MVPs.</p>
          <a href={`mailto:${SITE.email}`} className="mt-4 inline-block text-sm font-medium text-white hover:underline">{SITE.email}</a>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[["Home", "/"], ["Services", "/#services"], ["Process", "/#process"], ["About", "/#about"], ["Contact", "/contact"]].map(([l, h]) => <li key={l}><Link href={h} className="hover:text-white">{l}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => <li key={s.slug}><Link href={`/contact?service=${s.slug}`} className="hover:text-white">{s.title}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col justify-between gap-2 py-5 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} MIVRA LABS. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
