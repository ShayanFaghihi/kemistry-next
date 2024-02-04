import { SpeedInsights } from "@vercel/speed-insights/next";
import { Rajdhani } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Home - Kemistry Nightclub",
  description:
    "Kemistry a new music venue in downtown Fort Lauderdale providing elevated experiences with best production, world class hospitality, and great sense of community",
  metadataBase: new URL("https://kemistrynightclub.com/"),
  alternates: {
    canonical: "/",
  },
};

const rajdhani = Rajdhani({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rajdhani.className}>
      <body>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
