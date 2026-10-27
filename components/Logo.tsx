import Link from "next/link";
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="MIVRA LABS home">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-royal">
        <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden><path d="M7 23V9l9 9 9-9v14" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinejoin="round" strokeLinecap="round" /></svg>
      </span>
      <span className={`text-base font-bold tracking-tight ${light ? "text-white" : "text-navy"}`}>MIVRA <span className="font-medium text-royal">LABS</span></span>
    </Link>
  );
}
