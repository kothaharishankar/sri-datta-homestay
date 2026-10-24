import { NAV, SITE, waLink } from "@/lib/data";

export default function Footer() {
  const links = NAV.filter((n) => n.label !== "Experience");
  return (
    <footer className="bg-ink pb-28 pt-14 text-ivory/75 md:pb-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-serif text-xl tracking-widest text-ivory">SRI DATTA AVADHUTHA HOME STAY</p>
          <address className="mt-4 text-sm not-italic leading-relaxed">Sri Gurudatta Nilayam<br />Door No. 10-1-14<br />Sri Pada Srivallabha, beside 4th building<br />Venugopala Swami Temple<br />China Bazar Area, Pithapuram<br />Andhra Pradesh 533450</address>
        </div>
        <div className="text-sm leading-8">
          <a href={`tel:${SITE.tel1}`} className="block hover:text-gold-soft">{SITE.phone1}</a>
          <a href={`tel:${SITE.tel2}`} className="block hover:text-gold-soft">{SITE.phone2}</a>
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-gold-soft">Google Maps</a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="block hover:text-gold-soft">WhatsApp</a>
        </div>
        <nav aria-label="Footer" className="text-sm leading-8">{links.map((l) => <a key={l.href} href={l.href} className="block hover:text-gold-soft">{l.label}</a>)}</nav>
      </div>
      <p className="mx-auto mt-12 max-w-7xl px-5 text-xs text-ivory/50 md:px-8">© 2026 Sri Datta Avadhutha Home Stay. All rights reserved.</p>
    </footer>
  );
}
