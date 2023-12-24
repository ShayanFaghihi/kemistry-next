import "./globals.css";

export const metadata = {
  title: "Home | Kemistry Night Club",
  description:
    "Kemistry a new music venue in downtown Fort Lauderdale providing elevated experiences with best production, world class hospitality, and great sense of community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
