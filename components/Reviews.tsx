import { Star } from "lucide-react";
import { SITE } from "@/lib/data";

const THEMES = ["Clean and comfortable rooms", "Helpful and welcoming hosts", "Convenient temple-area location", "Home-like atmosphere", "Wi-Fi availability", "Suitable for family and group stays"];

export default function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="font-serif text-4xl text-maroon md:text-5xl">What Guests Say</h2>
          <p className="mt-8 font-serif text-7xl leading-none text-maroon">{SITE.rating}<span className="text-3xl text-earth"> / 5</span></p>
          <div className="mt-3 flex gap-1 text-gold" aria-hidden>{[0,1,2,3,4].map((i) => <Star key={i} size={18} fill="currentColor" />)}</div>
          <p className="mt-3 text-sm text-earth">Google Maps · {SITE.reviewCount} reviews</p>
        </div>
        <div className="md:col-span-8">
          <p className="text-ink/75">Themes from guest feedback on Google Maps:</p>
          <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
            {THEMES.map((t) => <li key={t} className="border-b border-gold/30 py-4 font-serif text-xl text-maroon">{t}</li>)}
          </ul>
          <p className="mt-6 text-sm text-earth">A related listing, {SITE.related.name}, shows {SITE.related.rating} / 5 from {SITE.related.reviewCount} reviews. We show the two separately.</p>
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center text-maroon underline underline-offset-4">Read all reviews on Google Maps</a>
        </div>
      </div>
    </section>
  );
}
