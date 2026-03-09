import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amhdour.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ahmed Amhdour | AI Trust & Security Readiness Engineer",
    template: "%s | Ahmed Amhdour",
  },
  description:
    "AI Trust & Security Readiness Engineer for RAG and autonomous agents. Current flagship offering: Secure Support Agent Starter Kit with policy-first orchestration and evidence-based readiness.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "AI Trust & Security Readiness Engineer",
    "Secure Support Agent Starter Kit",
    "Secure support agents",
    "RAG security",
    "Agent security",
    "Policy-first orchestration",
    "Evidence-based readiness",
    "AI Security Evals",
    "Runtime Guardrails",
    "Retrieval Security",
    "Tool Authorization",
    "Auditability",
    "Incident Readiness",
    "Ahmed Amhdour",
  ],
  authors: [{ name: "Ahmed Amhdour" }],
  openGraph: {
    type: "website",
    url: "/",
    title: "Ahmed Amhdour | AI Trust & Security Readiness Engineer",
    description:
      "Secure Support Agent Starter Kit: a production-oriented foundation for secure support agents with policy-first controls and evidence-based launch readiness.",
    siteName: "Ahmed Amhdour",
    locale: "en_US",
    images: [{ url: "/images/secure-support-agent-architecture.svg", width: 1400, height: 840, alt: "Secure Support Agent Starter Kit architecture flow" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Amhdour | AI Trust & Security Readiness Engineer",
    description:
      "Secure Support Agent Starter Kit: policy-first orchestration, bounded retrieval/tool access, and evidence-based readiness for support agents.",
    images: ["/images/secure-support-agent-architecture.svg"],
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
