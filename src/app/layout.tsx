import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://amhdour.com"),
  title: "Ahmed Amhdour - AI Security Readiness Engineer | Portfolio",
  description:
    "Ahmed Amhdour is an AI Trust & Security Readiness Engineer for RAG and Autonomous Agents, specializing in Layer Retrofit, Secure Starter Kits, and Launch Gates.",
  keywords: [
    "AI Security Readiness Engineer",
    "AI Trust",
    "Security Readiness",
    "RAG Security",
    "Autonomous Agents",
    "Layer Retrofit",
    "Secure Starter Kit",
    "Launch Gate",
    "AI Security Evals",
    "Runtime Guardrails",
    "LLM Security",
    "OWASP LLM Top 10",
    "Ahmed Amhdour",
  ],
  authors: [{ name: "Ahmed Amhdour" }],
  openGraph: {
    type: "website",
    title: "Ahmed Amhdour - AI Security Readiness Engineer",
    description:
      "AI Trust & Security Readiness Engineer for RAG and Autonomous Agents, specializing in Layer Retrofit, Secure Starter Kits, and Launch Gates.",
    siteName: "Ahmed Amhdour Portfolio",
    locale: "en_US",
    images: [{ url: "/images/selfie.jpg", width: 300, height: 400, alt: "Ahmed Amhdour" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Amhdour - AI Security Readiness Engineer",
    description:
      "AI Trust & Security Readiness Engineer for RAG and Autonomous Agents, specializing in Layer Retrofit, Secure Starter Kits, and Launch Gates.",
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
