import Image from "next/image";
import Reveal from "./Reveal";
import { IMG, waLink } from "@/lib/data";

const ROOMS = [
  { img: IMG.acMain, title: "Comfortable AC Rooms", text: "Simple, comfortable rooms suited to pilgrims and families.", pos: "object-center", msg: "Hello, I would like to check AC room availability at Sri Datta Avadhutha Home Stay in Pithapuram." },
  { img: IMG.nonAc, title: "Non-AC Rooms", text: "A practical option for guests seeking straightforward accommodation.", pos: "object-center", msg: "Hello, I would like to check Non-AC room availability at Sri Datta Avadhutha Home Stay in Pithapuram." },
];

export default function Rooms() {
  return (
    <section id="rooms" className="bg-sand py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal><h2 className="max-w-xl font-serif text-4xl text-maroon md:text-5xl">Rooms for Rest &amp; Renewal</h2>
          <p className="mt-4 max-w-lg text-ink/75">Rooms take up to 4 guests. Please contact us for current room availability.</p></Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-8">
          {ROOMS.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1} className={i === 1 ? "md:mt-20" : ""}>
              <article>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={r.img.src} alt={r.img.alt} fill sizes="(min-width:768px) 45vw, 100vw" className={`object-cover ${r.pos}`} />
                </div>
                <div className="border-b border-gold/40 py-6">
                  <h3 className="font-serif text-3xl text-maroon">{r.title}</h3>
                  <p className="mt-2 max-w-md text-ink/75">{r.text}</p>
                  <a href={waLink(r.msg)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center bg-maroon px-7 text-sm tracking-widest text-ivory transition-colors hover:bg-maroon-deep">CHECK AVAILABILITY</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
