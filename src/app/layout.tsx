import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "Chef Quinstas — Aviation Chef in Abuja",
    template: "%s — Chef Quinstas",
  },
  description:
    "Nigerian aviation chef and food engineer in Abuja, specialising in recipe development, international cuisine and local dishes.",
  openGraph: {
    title: "Chef Quinstas — Aviation Chef",
    description:
      "Nigerian culinary heritage, global technique and aviation precision.",
    images: ["/assets/quinstas/portrait-editorial.jpg"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chef Quinstas",
    gender: "Female",
    nationality: "Nigerian",
    homeLocation: { "@type": "Place", name: "Abuja, Nigeria" },
    jobTitle: ["Aviation Chef", "Food Engineer"],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Red Dish Chronicles",
      address: "Abuja, Nigeria",
    },
    knowsAbout: [
      "Private aviation dining",
      "Recipe development",
      "International cuisine",
      "Nigerian cuisine",
      "Food engineering",
    ],
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  };
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
