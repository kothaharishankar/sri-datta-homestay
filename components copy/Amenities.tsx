import { Wifi, Snowflake, Flame, Droplet, ShieldCheck, Car, Clock, Tv, Store, Bus, Users, Bath } from "lucide-react";
import Reveal from "../components/Reveal";
import { AMENITIES } from "@/lib/data";

const ICONS = { wifi: Wifi, snow: Snowflake, flame: Flame, droplet: Droplet, shield: ShieldCheck, car: Car, clock: Clock, tv: Tv, store: Store, bus: Bus, users: Users, bath: Bath } as const;

export default function Amenities() {
  return (
    <section id="amenities" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <Reveal><h2 className="font-serif text-4xl text-maroon md:text-5xl">Comforts for the Journey</h2>
        <p className="mt-4 max-w-xl text-ink/75">What we offer at the property. Please confirm room-specific details when booking.</p></Reveal>
      <ul className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {AMENITIES.map((a) => {
          const Icon = ICONS[a.icon as keyof typeof ICONS];
          return (
            <li key={a.title} className="flex gap-4 border-b border-gold/30 pb-6">
              <Icon size={24} strokeWidth={1.25} className="mt-1 shrink-0 text-gold" aria-hidden />
              <div><h3 className="font-serif text-2xl text-maroon">{a.title}</h3><p className="mt-1 text-sm text-ink/70">{a.note}</p></div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
