import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Portfolio from "@/components/sections/Portfolio";
import ThreatVisualizer from "@/components/sections/ThreatVisualizer";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Experiences from "@/components/sections/Experiences";
import Certifications from "@/components/sections/Certifications";
import Speaking from "@/components/sections/Speaking";
import OpenSource from "@/components/sections/OpenSource";
import MediaContent from "@/components/sections/MediaContent";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";
import Changelog from "@/components/sections/Changelog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amhdour.com";

export const metadata: Metadata = {
  title: "AI Trust & Security Readiness for Secure Support Agents",
  description:
    "Ahmed Amhdour helps teams ship secure support agents with the Secure Support Agent Starter Kit, combining policy-first orchestration, bounded retrieval/tool access, and evidence-based readiness.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Secure Support Agent Starter Kit | Ahmed Amhdour",
    description:
      "Flagship offering for secure support agents across RAG and autonomous agent systems, with policy-first controls and evidence-based launch readiness.",
    url: "/",
    images: [{ url: "/images/secure-support-agent-architecture.svg", width: 1400, height: 840, alt: "Secure Support Agent Starter Kit architecture flow" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Support Agent Starter Kit | Ahmed Amhdour",
    description:
      "Secure support agents for RAG and autonomous systems with policy-first orchestration and evidence-based readiness.",
    images: ["/images/secure-support-agent-architecture.svg"],
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Ahmed Amhdour",
        "url": siteUrl,
        "jobTitle": "AI Trust & Security Readiness Engineer",
        "knowsAbout": [
          "RAG Security",
          "Agent Security",
          "AI Security Evaluations",
          "Runtime Guardrails",
          "Tool Authorization",
          "Evidence-Based Readiness"
        ],
        "sameAs": ["https://github.com/Amhdour", "https://www.linkedin.com/in/amhdour"],
      },
      {
        "@type": "Service",
        "name": "Secure Support Agent Starter Kit",
        "provider": { "@type": "Person", "name": "Ahmed Amhdour" },
        "serviceType": "AI Trust & Security Readiness Service",
        "areaServed": "Worldwide",
        "description": "A pre-hardened foundation for secure support agents in RAG and autonomous systems with policy-first orchestration, bounded retrieval/tool access, auditable telemetry, and evidence-based launch readiness.",
        "url": `${siteUrl}/secure-support-agent-starter-kit`,
      },
    ],
  };

  return (
    <div className="text-site-text bg-site-bg">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <Stats />
      <Portfolio />
      <ThreatVisualizer />
      <Services />
      <Skills />
      <Experiences />
      <Certifications />
      <Speaking />
      <OpenSource />
      <MediaContent />
      <Testimonials />
      <Newsletter />
      <Changelog />
      <Contact />
      <Footer />
    </div>
  );
}
