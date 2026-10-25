
import {
  Wifi,
  Snowflake,
  Flame,
  Droplet,
  ShieldCheck,
  Car,
  Tv,
  Bath,
  MapPin,
  Store,
} from "lucide-react";
import Reveal from "./Reveal";
import { AMENITIES } from "@/lib/data";

const ICONS = {
  wifi: Wifi,
  snow: Snowflake,
  flame: Flame,
  droplet: Droplet,
  shield: ShieldCheck,
  car: Car,
  tv: Tv,
  bath: Bath,
  "car-front": Car,
  map: MapPin,
  store: Store,
} as const;

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"
    >
      <Reveal>
        <h2 className="font-serif text-4xl text-maroon md:text-5xl">
          Comforts for the Journey
        </h2>
        <p className="mt-4 max-w-xl text-ink/75">
          Enjoy comfortable rooms, useful facilities, and travel assistance
          during your visit to Pithapuram.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {AMENITIES.map((amenity) => {
          const Icon = ICONS[amenity.icon as keyof typeof ICONS];

          if (!Icon) return null;

          return (
            <li
              key={amenity.title}
              className="flex gap-4 border-b border-gold/30 pb-6"
            >
              <Icon
                size={24}
                strokeWidth={1.25}
                className="mt-1 shrink-0 text-gold"
                aria-hidden
              />
              <div>
                <h3 className="font-serif text-2xl text-maroon">
                  {amenity.title}
                </h3>
                <p className="mt-1 text-sm text-ink/70">
                  {amenity.note}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
