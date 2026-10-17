import { SITE } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Attractions from "@/components/Attractions";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: SITE.name,
  alternateName: SITE.associated,
  url: SITE.url,
  image: `${SITE.url}/images/hero/hero.jpg`,
  telephone: [SITE.tel1, SITE.tel2],
  address: { "@type": "PostalAddress", streetAddress: SITE.street, addressLocality: "Pithapuram", addressRegion: "Andhra Pradesh", postalCode: "533450", addressCountry: "IN" },
  sameAs: [SITE.mapsUrl],
  aggregateRating: { "@type": "AggregateRating", ratingValue: SITE.rating, reviewCount: SITE.reviewCount, bestRating: 5 },
  amenityFeature: ["Wi-Fi", "Drinking water", "Hot water", "Air-conditioned rooms available"].map((n) => ({ "@type": "LocationFeatureSpecification", name: n, value: true })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero /><TrustBar /><About /><Rooms /><Amenities /><Gallery /><Attractions /><Location /><Reviews /><FAQ /><ContactCTA />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
