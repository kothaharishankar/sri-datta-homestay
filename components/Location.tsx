import { Phone, MessageCircle, Navigation } from "lucide-react";
import { SITE, directionsLink, mapsEmbed, waLink } from "@/lib/data";

export default function Location() {
  const btn = "inline-flex min-h-11 items-center justify-center gap-2 px-6 text-sm tracking-widest";
  return (
    <section id="location" className="bg-sand py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <h2 className="font-serif text-4xl leading-tight text-maroon md:text-5xl">Close to the Spiritual Heart of Pithapuram</h2>
          <address className="mt-6 border-l border-gold pl-5 not-italic leading-relaxed text-ink/85">
            {SITE.address.map((l) => <span key={l} className="block">{l}</span>)}
          </address>
          <p className="mt-3 text-sm text-earth">Plus Code: {SITE.plusCode}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <a href={directionsLink} target="_blank" rel="noopener noreferrer" className={`${btn} bg-maroon text-ivory hover:bg-maroon-deep`}><Navigation size={16} aria-hidden />GET DIRECTIONS</a>
            <a href={`tel:${SITE.tel1}`} className={`${btn} border border-maroon text-maroon hover:bg-maroon/5`}><Phone size={16} aria-hidden />CALL US</a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className={`${btn} border border-maroon text-maroon hover:bg-maroon/5`}><MessageCircle size={16} aria-hidden />WHATSAPP US</a>
          </div>
        </div>
        <div className="md:col-span-7">
          <iframe title="Map showing Sri Datta Avadhutha Home Stay in Pithapuram" src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full border-0 md:h-full md:min-h-[420px]" />
        </div>
      </div>
    </section>
  );
}
