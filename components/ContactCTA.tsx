import { SITE, directionsLink, waLink } from "@/lib/data";

export default function ContactCTA() {
  const b = "inline-flex min-h-12 items-center justify-center px-8 text-sm tracking-widest";
  return (
    <section id="contact" className="bg-maroon-deep py-24 text-center md:py-32">
      <div className="mx-auto max-w-2xl px-5">
        <div className="gold-rule mx-auto mb-8 w-24" aria-hidden />
        <h2 className="font-serif text-4xl text-ivory md:text-6xl">Your Pithapuram Journey Starts Here</h2>
        <p className="mt-6 text-ivory/80">Planning a visit to the sacred town of Pithapuram? Speak with us directly to check room availability and plan your stay.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={`tel:${SITE.tel1}`} className={`${b} bg-gold text-ink hover:bg-gold-soft`}>CALL NOW</a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className={`${b} border border-ivory/70 text-ivory hover:bg-ivory/10`}>WHATSAPP</a>
          <a href={directionsLink} target="_blank" rel="noopener noreferrer" className={`${b} border border-ivory/70 text-ivory hover:bg-ivory/10`}>GET DIRECTIONS</a>
        </div>
        <p className="mt-8 text-ivory/80"><a href={`tel:${SITE.tel1}`} className="underline-offset-4 hover:underline">{SITE.phone1}</a> &nbsp;|&nbsp; <a href={`tel:${SITE.tel2}`} className="underline-offset-4 hover:underline">{SITE.phone2}</a></p>
      </div>
    </section>
  );
}
