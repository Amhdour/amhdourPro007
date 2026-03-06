import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Amhdour - AI Security Engineer | Portfolio",
  description:
    "Ahmed Amhdour is an AI Security Engineer specializing in AI Trust & Security Readiness for RAG to Autonomous Agents. Offering practical guardrails, penetration testing, and production readiness for secure AI solutions.",
  keywords: [
    "AI Security Engineer",
    "Cyber Security",
    "Penetration Testing",
    "AI Trust",
    "Security Readiness",
    "RAG Security",
    "Ahmed Amhdour",
  ],
  authors: [{ name: "Ahmed Amhdour" }],
  openGraph: {
    type: "website",
    title: "Ahmed Amhdour - AI Security Engineer",
    description:
      "AI Security Engineer specializing in AI Trust & Security Readiness. Helping teams ship secure, resilient AI solutions with strong guardrails and production readiness.",
    siteName: "Ahmed Amhdour Portfolio",
    locale: "en_US",
    images: [{ url: "/images/selfie.jpg", width: 300, height: 400, alt: "Ahmed Amhdour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Amhdour - AI Security Engineer",
    description:
      "AI Security Engineer specializing in AI Trust & Security Readiness for RAG to Autonomous Agents.",
    images: ["/images/selfie.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
