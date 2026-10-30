import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { Analytics } from "@vercel/analytics/react";
import "@/index.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shivasubrahmanyakc.vercel.app"),
  title: "Shivasubrahmanya K C | AI/ML Engineer | Portfolio",
  description:
    "Official portfolio of Shivasubrahmanya K C — AI/ML Engineer specialising in Data Science, Machine Learning, Deep Learning, Computer Vision, and Full-Stack development. Explore research, projects, and certifications.",
  keywords: [
    "Shivasubrahmanya K C",
    "AI ML Engineer",
    "Data Science",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Full Stack Developer",
    "Portfolio",
    "AIML",
    "Python",
    "PyTorch",
    "TensorFlow",
    "React",
    "IEEE",
    "Sahyadri College",
  ],
  authors: [{ name: "Shivasubrahmanya K C" }],
  creator: "Shivasubrahmanya K C",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "dfbd9141c6affa8a",
  },
  alternates: {
    canonical: "https://shivasubrahmanyakc.vercel.app/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://shivasubrahmanyakc.vercel.app/",
    title: "Shivasubrahmanya K C | AI/ML Engineer | Portfolio",
    description:
      "Official portfolio of Shivasubrahmanya K C — AI/ML Engineer specialising in Data Science, Machine Learning, Deep Learning, Computer Vision, and Full-Stack development.",
    siteName: "Shivasubrahmanya K C",
    locale: "en_IN",
    images: [
      {
        url: "https://shivasubrahmanyakc.vercel.app/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Shivasubrahmanya K C — AI/ML Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shivasubrahmanyakc",
    creator: "@shivasubrahmanyakc",
    title: "Shivasubrahmanya K C | AI/ML Engineer | Portfolio",
    description:
      "Official portfolio of Shivasubrahmanya K C — AI/ML Engineer specialising in Data Science, Machine Learning, and Full-Stack development.",
    images: ["https://shivasubrahmanyakc.vercel.app/web-app-manifest-512x512.png"],
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Shivasubrahmanya K C",
  alternateName: "Shivasubrahmanya K C Portfolio",
  url: "https://shivasubrahmanyakc.vercel.app/",
  description:
    "Official portfolio of Shivasubrahmanya K C — AI/ML Engineer specialising in Data Science, Machine Learning, Deep Learning, Computer Vision, and Full-Stack development.",
  inLanguage: "en-IN",
  author: {
    "@type": "Person",
    name: "Shivasubrahmanya K C",
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shivasubrahmanya K C",
  url: "https://shivasubrahmanyakc.vercel.app/",
  image: "https://shivasubrahmanyakc.vercel.app/web-app-manifest-512x512.png",
  jobTitle: "AI/ML Engineer",
  description:
    "AI/ML Engineer specialising in Data Science, Machine Learning, Deep Learning, Computer Vision, and Full-Stack development.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sahyadri College of Engineering and Management",
  },
  knowsAbout: [
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Computer Vision",
    "Python",
    "PyTorch",
    "TensorFlow",
    "React",
    "Full-Stack Development",
  ],
  sameAs: [
    "https://www.linkedin.com/in/shivasubrahmanyakc",
    "https://github.com/shivasubrahmanyakc",
    "https://leetcode.com/u/shivasubrahmanya/",
  ],
};

const jsonLdProfilePage = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Shivasubrahmanya K C — AI/ML Engineer Portfolio",
  url: "https://shivasubrahmanyakc.vercel.app/",
  mainEntity: {
    "@type": "Person",
    name: "Shivasubrahmanya K C",
    jobTitle: "AI/ML Engineer",
    url: "https://shivasubrahmanyakc.vercel.app/",
    sameAs: [
      "https://www.linkedin.com/in/shivasubrahmanyakc",
      "https://github.com/shivasubrahmanyakc",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfilePage) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
