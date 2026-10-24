import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/data";
import Providers from "@/components/Providers";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-serif", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const title = "Sri Datta Avadhutha Home Stay | Homestay in Pithapuram, Andhra Pradesh";
const description = "Stay at Sri Datta Avadhutha Home Stay in Pithapuram, Andhra Pradesh. Comfortable homestay accommodation near the town's important temples, suitable for pilgrims, families and travelers.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title, description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: "/", siteName: SITE.name, locale: "en_IN", type: "website", images: [{ url: "/images/hero/hero.jpg", width: 1046, height: 605, alt: SITE.name }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/hero/hero.jpg"] },
};
export const viewport: Viewport = { themeColor: "#6B1423", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased"><Providers>{children}</Providers></body>
    </html>
  );
}
