import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { ParticleBackground } from "@/components/ParticleBackground";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abishek-portfolio.dev"),
  title: {
    default: "Abishek D | Web Developer Portfolio",
    template: "%s | Abishek D",
  },
  description:
    "Web developer portfolio showcasing frontend development, projects, certifications, web technologies, and professional experience by Abishek D.",
  keywords: [
    "Abishek D",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "UI/UX Design",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Salem Web Developer",
    "Data Analytics Enthusiast",
    "AI Tools",
  ],
  authors: [{ name: "Abishek D", url: SITE_CONFIG.contact.github }],
  creator: "Abishek D",
  publisher: "Abishek D",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abishek-portfolio.dev",
    title: "Abishek D | Web Developer Portfolio",
    description:
      "Web developer portfolio showcasing frontend development, projects, certifications, web technologies, and professional experience by Abishek D.",
    siteName: "Abishek D Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abishek D | Web Developer Portfolio",
    description:
      "Web developer portfolio showcasing frontend development, projects, certifications, web technologies, and professional experience by Abishek D.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: "Web Developer",
    description: SITE_CONFIG.bio,
    url: "https://abishek-portfolio.dev",
    sameAs: [
      SITE_CONFIG.contact.linkedin,
      SITE_CONFIG.contact.github,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salem",
      addressCountry: "India",
    },
    knowsAbout: [
      "Web Development",
      "Frontend Development",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Python",
      "SQL",
      "Data Analytics",
      "Artificial Intelligence",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable} scroll-smooth dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-white selection:bg-primary/30 selection:text-white font-sans antialiased min-h-screen relative">
        <CustomCursor />
        <ParticleBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
