import Image from "next/image";
import Reveal from "./Reveal";
import { IMG } from "@/lib/data";
import { MapPin, Heart, BedDouble, Users } from "lucide-react";

const WHY = [
  { icon: MapPin, t: "Temple-area location", d: "Stay close to Pithapuram's spiritual landmarks." },
  { icon: Heart, t: "Homely hospitality", d: "A personal, welcoming atmosphere rather than an impersonal hotel." },
  { icon: BedDouble, t: "Comfortable rooms", d: "Practical rooms designed for a peaceful rest." },
  { icon: Users, t: "Family friendly", d: "Suitable for families, devotees and small groups." },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
      <div className="grid items-center gap-14 md:grid-cols-12">
        <Reveal className="relative md:col-span-6">
          <div className="relative aspect-[4/5] w-[82%] overflow-hidden">
            <Image src={IMG.carved.src} alt={IMG.carved.alt} fill sizes="(min-width:768px) 40vw, 80vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-8 right-0 aspect-square w-[45%] overflow-hidden border-4 border-ivory">
            <Image src={IMG.peacock.src} alt={IMG.peacock.alt} fill sizes="(min-width:768px) 22vw, 40vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-6 md:pl-10">
          <div className="flex gap-6">
            <div className="w-px shrink-0 bg-gold" aria-hidden />
            <div>
              <h2 className="font-serif text-4xl leading-tight text-maroon md:text-5xl">A Stay That Feels Like Home</h2>
              <p className="mt-6 max-w-prose font-serif text-xl leading-relaxed text-earth">Some journeys are not only about reaching a place. They are about finding somewhere quiet to pause, pray and feel at home.</p>
              <p className="mt-4 max-w-prose leading-relaxed text-ink/80">Sri Datta Avadhutha Home Stay is a simple, welcoming base for your Pithapuram visit, in the China Bazar area and close to the town&apos;s temples. It is run with the comforts that matter after a long day of travel and darshan in mind.</p>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="mt-28 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {WHY.map((w, i) => (
          <Reveal key={w.t} delay={i * 0.08}>
            <div className="border-t border-gold pt-5">
              <w.icon size={26} strokeWidth={1.2} className="text-maroon" aria-hidden />
              <h3 className="mt-4 font-serif text-2xl text-maroon">{w.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{w.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
