import { Plus } from "lucide-react";
import { FAQ as ITEMS } from "@/lib/data";

export default function FAQ() {
  return (
    <section id="faq" className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h2 className="font-serif text-4xl text-maroon md:text-5xl">Questions, Answered</h2>
        <div className="mt-10">
          {ITEMS.map((f) => (
            <details key={f.q} className="group border-b border-gold/40">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-serif text-xl text-maroon [&::-webkit-details-marker]:hidden">
                {f.q}<Plus size={20} className="shrink-0 text-gold transition-transform group-open:rotate-45" aria-hidden />
              </summary>
              <p className="pb-5 leading-relaxed text-ink/80">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
