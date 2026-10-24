import { Star, MapPin, Wifi, Car } from "lucide-react";
import { SITE } from "@/lib/data";

export default function TrustBar() {
  const items = [
    { icon: Star, big: String(SITE.rating), small: "Google rating" },
    { icon: Star, big: `${SITE.reviewCount}`, small: "Google Maps reviews" },
    { icon: MapPin, big: "Temple Area", small: "Pithapuram" },
    { icon: Wifi, big: "Wi-Fi", small: "Listed on signboard" },
    { icon: Car, big: "Parking", small: "Confirm when booking" },
  ];
  return (
    <section aria-label="Quick facts" className="border-b border-gold/30 bg-sand">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-5 py-7 md:grid-cols-5 md:px-8">
        {items.map((i) => (
          <li key={i.small} className="flex items-center gap-3">
            <i.icon size={22} strokeWidth={1.25} className="shrink-0 text-gold" aria-hidden />
            <div><p className="font-serif text-2xl leading-none text-maroon">{i.big}</p><p className="mt-1 text-xs text-earth">{i.small}</p></div>
          </li>
        ))}
      </ul>
    </section>
  );
}
