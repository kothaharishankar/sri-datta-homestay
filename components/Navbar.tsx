"use client";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE, waLink } from "@/lib/data";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const dark = solid || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${dark ? "bg-ivory/95 backdrop-blur border-b border-gold/30" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#home" className={`leading-none ${dark ? "text-maroon" : "text-ivory"}`} aria-label="Sri Datta Avadhutha Home Stay, home">
          <span className="block font-serif text-xl tracking-[0.12em] md:text-2xl">SRI DATTA AVADHUTHA</span>
          <span className={`mt-1 block text-[10px] tracking-[0.5em] ${dark ? "text-gold" : "text-gold-soft"}`}>HOME STAY</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className={`text-sm transition-colors hover:text-gold ${dark ? "text-ink" : "text-ivory"}`}>{n.label}</a>
          ))}
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="bg-maroon px-5 py-2.5 text-sm text-ivory transition-colors hover:bg-maroon-deep">Check Availability</a>
        </nav>
        <div className="flex items-center gap-1 lg:hidden">
          <a href={`tel:${SITE.tel1}`} aria-label="Call us" className={`flex h-11 w-11 items-center justify-center ${dark ? "text-maroon" : "text-ivory"}`}><Phone size={20} /></a>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} className={`flex h-11 w-11 items-center justify-center ${dark ? "text-maroon" : "text-ivory"}`}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-gold/30 bg-ivory px-5 pb-6 pt-2 lg:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-sand py-3.5 font-serif text-xl text-maroon">{n.label}</a>
          ))}
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-5 block bg-maroon py-3.5 text-center text-ivory">Check Availability on WhatsApp</a>
        </nav>
      )}
    </header>
  );
}
