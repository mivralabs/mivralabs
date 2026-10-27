"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [["Home", "/"], ["Services", "/#services"], ["Process", "/#process"], ["About", "/#about"], ["Contact", "/contact"]] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map(([l, h]) => <Link key={l} href={h} className="text-sm font-medium text-slate-600 hover:text-navy">{l}</Link>)}
          <Link href="/contact" className="btn-primary !py-2.5">Book a Discovery Call</Link>
        </nav>
        <button className="rounded-lg p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-200 bg-white md:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col gap-1 py-3">
            {links.map(([l, h]) => <Link key={l} href={h} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 text-sm font-medium text-slate-700 hover:bg-mist">{l}</Link>)}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">Book a Discovery Call</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
