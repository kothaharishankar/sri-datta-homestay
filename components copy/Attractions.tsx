import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { IMG, PLACES, mapSearch } from "@/lib/data";

export default function Attractions() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32"
    >
      <div className="grid items-end gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <h2 className="font-serif text-4xl leading-tight text-maroon md:text-5xl">
            Stay in the Sacred Heart of Pithapuram
          </h2>

          <p className="mt-5 max-w-prose leading-relaxed text-ink/80">
            Pithapuram is a well-known pilgrimage town in East Godavari region,
            visited for its temples and for Sri Pada Vallabha Mahasamsthanam.
            Staying in the town lets you begin and end the day in an unhurried
            way.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-5">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={IMG.hero.src}
              alt={IMG.hero.alt}
              fill
              sizes="(min-width:768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <h3 className="mt-20 font-serif text-3xl text-maroon">
        Explore Pithapuram
      </h3>

      <ul className="mt-8 grid gap-x-10 gap-y-2 md:grid-cols-2">
        {PLACES.map((p) => (
          <li key={p.name} className="border-t border-gold/40 py-6">
            <h4 className="font-serif text-2xl text-maroon">{p.name}</h4>

            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/75">
              {p.text}
            </p>

            <div className="mt-4 flex flex-wrap gap-5 text-sm">
              <a
                href={mapSearch(p.q)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-maroon underline-offset-4 hover:underline"
              >
                View on Maps
                <ArrowUpRight size={15} aria-hidden />
              </a>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1 text-earth underline-offset-4 hover:underline"
                >
                  Official website
                  <ArrowUpRight size={15} aria-hidden />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}