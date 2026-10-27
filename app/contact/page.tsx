import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { services } from "@/lib/site";

export const metadata: Metadata = { title: "Start Your Project", description: "Share a few details about your idea and the MIVRA LABS team will review your requirements." };

export default function ContactPage({ searchParams }: { searchParams: { service?: string } }) {
  const type = services.find((s) => s.slug === searchParams.service)?.type;
  return (
    <section className="bg-mist py-14 sm:py-20">
      <div className="container-x max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-navy sm:text-5xl">Let&apos;s Build Something Great.</h1>
        <p className="mt-4 text-lg text-slate-600">Share a few details about your idea, and our team will review your requirements.</p>
        <div className="mt-10"><ContactForm defaultType={type} /></div>
      </div>
    </section>
  );
}
