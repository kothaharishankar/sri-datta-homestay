"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMG, directionsLink, waLink } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[88svh] items-end overflow-hidden bg-maroon-deep">
      <Image src={IMG.hero.src} alt={IMG.hero.alt} fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1d0508]/90 via-[#1d0508]/45 to-[#1d0508]/60" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 md:px-8 md:pb-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="max-w-3xl">
          <div className="gold-rule mb-6 w-24" aria-hidden />
          <h1 className="font-serif text-5xl leading-[1.05] text-ivory md:text-7xl">A Peaceful Stay<br />in Sacred Pithapuram</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/85 md:text-lg">
            Experience the warmth of a homestay in the heart of Pithapuram&apos;s temple town, thoughtfully suited for pilgrims, families and travelers seeking a comfortable place to rest.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="bg-gold px-8 py-4 text-center text-sm tracking-widest text-ink transition-colors hover:bg-gold-soft">CHECK AVAILABILITY</a>
            <a href={directionsLink} target="_blank" rel="noopener noreferrer" className="border border-ivory/70 px-8 py-4 text-center text-sm tracking-widest text-ivory transition-colors hover:bg-ivory/10">GET DIRECTIONS</a>
          </div>
          <p className="mt-8 text-sm text-gold-soft">Near Sri Pada Vallabha Temple Area, Pithapuram, Andhra Pradesh</p>
        </motion.div>
      </div>
    </section>
  );
}
