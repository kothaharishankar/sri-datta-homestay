"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "@/lib/data";

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const touch = useRef<number | null>(null);
  const n = GALLERY.length;
  const go = useCallback((d: number) => setIdx((i) => (i === null ? i : (i + d + n) % n)), [n]);
  useEffect(() => {
    if (idx === null) return;
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") setIdx(null); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("keydown", key); document.body.style.overflow = ""; };
  }, [idx, go]);
  const cur = idx === null ? null : GALLERY[idx];
  return (
    <section id="gallery" className="bg-maroon-deep py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="font-serif text-4xl text-ivory md:text-5xl">A Look Inside</h2>
        <p className="mt-3 text-ivory/70">Photographs of the home stay.</p>
        <div className="mt-12 columns-2 gap-3 md:columns-3 md:gap-5">
          {GALLERY.map((g, i) => (
            <button key={g.src} onClick={() => setIdx(i)} aria-label={`Open photo: ${g.caption}`} className="group relative mb-3 block w-full overflow-hidden md:mb-5">
              <Image src={g.src} alt={g.alt} width={g.w} height={g.h} sizes="(min-width:768px) 33vw, 50vw" className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.04]" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-xs text-ivory md:text-sm">{g.caption}</span>
            </button>
          ))}
        </div>
      </div>
      {cur && (
        <div role="dialog" aria-modal="true" aria-label={cur.caption} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIdx(null)} onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
          onTouchEnd={(e) => { if (touch.current === null) return; const d = e.changedTouches[0].clientX - touch.current; if (Math.abs(d) > 50) go(d < 0 ? 1 : -1); touch.current = null; }}>
          <button onClick={() => setIdx(null)} aria-label="Close" className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center text-ivory"><X /></button>
          <button onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Previous photo" className="absolute left-2 flex h-11 w-11 items-center justify-center text-ivory"><ChevronLeft size={30} /></button>
          <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
            <Image src={cur.src} alt={cur.alt} width={cur.w} height={cur.h} sizes="90vw" className="mx-auto max-h-[80svh] w-auto object-contain" />
            <figcaption className="mt-3 text-center text-sm text-ivory/80">{cur.caption}</figcaption>
          </figure>
          <button onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Next photo" className="absolute right-2 flex h-11 w-11 items-center justify-center text-ivory"><ChevronRight size={30} /></button>
        </div>
      )}
    </section>
  );
}
