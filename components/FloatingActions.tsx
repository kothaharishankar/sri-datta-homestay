import { Phone, MessageCircle, Navigation } from "lucide-react";
import { SITE, directionsLink, waLink } from "@/lib/data";

export default function FloatingActions() {
  const c = "flex min-h-12 flex-1 flex-col items-center justify-center gap-0.5 text-xs text-ivory";
  return (
    <nav aria-label="Quick contact" className="pb-safe fixed inset-x-0 bottom-0 z-40 flex border-t border-gold/40 bg-maroon-deep md:hidden">
      <a href={`tel:${SITE.tel1}`} className={c}><Phone size={18} aria-hidden />Call</a>
      <a href={waLink()} target="_blank" rel="noopener noreferrer" className={`${c} border-x border-ivory/15`}><MessageCircle size={18} aria-hidden />WhatsApp</a>
      <a href={directionsLink} target="_blank" rel="noopener noreferrer" className={c}><Navigation size={18} aria-hidden />Directions</a>
    </nav>
  );
}
