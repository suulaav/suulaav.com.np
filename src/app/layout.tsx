import type { Metadata } from "next";
import { VT323, Courier_Prime } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import CropMarks from "@/components/CropMarks";

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-courier",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suulaav.com.np"),
  title: "Sulav Poudel — Sr. Backend Engineer",
  description:
    "Sr. Backend Engineer based in Kathmandu, Nepal. 7+ years building scalable SaaS systems, RESTful APIs, and production-grade backend infrastructure with Java & Spring Boot.",
  keywords: [
    "Sulav Poudel",
    "backend engineer",
    "java developer",
    "spring boot",
    "kathmandu",
    "nepal",
    "saas",
    "rest api",
    "microservices",
    "postgresql",
    "elasticsearch",
    "software engineer nepal",
    "java spring boot developer",
    "backend developer nepal",
    "senior software engineer",
  ],
  authors: [{ name: "Sulav Poudel", url: "https://suulaav.com.np" }],
  alternates: {
    canonical: "https://suulaav.com.np",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Sulav Poudel — Sr. Backend Engineer",
    description:
      "7+ years building scalable SaaS systems from the ground up. Java · Spring Boot · PostgreSQL. Based in Kathmandu, Nepal.",
    url: "https://suulaav.com.np",
    siteName: "Sulav Poudel",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Sulav Poudel — Sr. Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sulav Poudel — Sr. Backend Engineer",
    description:
      "7+ years building scalable SaaS systems. Java · Spring Boot · PostgreSQL. Kathmandu, Nepal.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${vt323.variable} ${courierPrime.variable} scroll-smooth`}
    >
      <body className="bg-cream text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sulav Poudel",
              url: "https://suulaav.com.np",
              image: "https://suulaav.com.np/profile.jpg",
              jobTitle: "Sr. Backend Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Aricalot Technology",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kathmandu",
                addressCountry: "NP",
              },
              email: "contact@suulaav.com.np",
              sameAs: [
                "https://github.com/suulaav",
                "https://www.linkedin.com/in/suulaav/",
              ],
              knowsAbout: [
                "Java",
                "Spring Boot",
                "RESTful APIs",
                "Microservices",
                "PostgreSQL",
                "Elasticsearch",
                "Docker",
                "SaaS",
              ],
            }),
          }}
        />
        <CropMarks />
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
