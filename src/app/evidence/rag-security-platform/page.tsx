import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EvidenceLinkCard from "@/components/evidence/EvidenceLinkCard";
import PrintableEvidenceButton from "@/components/evidence/PrintableEvidenceButton";
import ControlsMatrix from "@/components/evidence/ControlsMatrix";
import HowItWorksArchitecture from "@/components/evidence/HowItWorksArchitecture";
import { ragSecurityEvidence } from "@/content/evidence/ragSecurityPlatform";

export const metadata: Metadata = {
  title: "RAG Security Evidence Pack | Ahmed Amhdour",
  description:
    "Evidence pack for rag-security-platform covering AI security controls, trust boundaries, guardrails, agent security considerations, and auditability-focused review artifacts.",
  keywords: [
    "AI security",
    "RAG security",
    "trust boundaries",
    "guardrails",
    "agent security",
    "auditability",
  ],
  alternates: {
    canonical: "/evidence/rag-security-platform",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "RAG Security Evidence Pack",
    description:
      "Review-ready RAG security evidence covering trust boundaries, controls, validation approach, and public artifacts.",
    type: "article",
    url: "/evidence/rag-security-platform",
    siteName: "Ahmed Amhdour Portfolio",
    locale: "en_US",
  },
};

function TextSection({ title, body, className = "" }: { title: string; body: string; className?: string }) {
  return (
    <section className={`print-section rounded-lg border border-site-primary/20 p-6 bg-site-block ${className}`.trim()}>
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <p className="text-site-muted">{body}</p>
    </section>
  );
}

function BulletSection({ title, items, className = "" }: { title: string; items: readonly string[]; className?: string }) {
  return (
    <section className={`print-section rounded-lg border border-site-primary/20 p-6 bg-site-block ${className}`.trim()}>
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <ul className="list-disc list-inside space-y-2 text-site-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function RagSecurityEvidencePage() {
  return (
    <div className="evidence-pack-page text-site-text bg-site-bg">
      <Header />
      <main className="pt-[75px]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-14 md:py-16 flex flex-col gap-8">
          <section className="print-section rounded-xl border border-site-primary/20 bg-site-block p-6 md:p-8">
            <p className="text-sm uppercase tracking-wide text-site-primary font-semibold">Evidence Page</p>
            <h1 className="text-3xl md:text-4xl font-extrabold mt-2">{ragSecurityEvidence.title}</h1>
            <p className="text-site-muted mt-3 max-w-3xl">{ragSecurityEvidence.summary}</p>
            <div className="print-hidden flex flex-wrap gap-3 mt-6">
              <Link href="/" className="px-4 py-2 rounded-md bg-site-primary text-white font-semibold hover:bg-site-primary-light transition-colors duration-300">
                Website homepage
              </Link>
              <PrintableEvidenceButton />
            </div>
          </section>

          <TextSection title="Executive Summary" body={ragSecurityEvidence.sections.executiveSummary} />
          <TextSection title="Problem Addressed" body={ragSecurityEvidence.sections.problemAddressed} />
          <BulletSection title="What the Project Contributes" items={ragSecurityEvidence.sections.whatProjectContributes} />
          <TextSection title="Threat Model" body={ragSecurityEvidence.sections.threatModel} />
          <BulletSection title="Security Gaps Identified" items={ragSecurityEvidence.sections.securityGapsIdentified} />
          <BulletSection title="Controls Introduced" items={ragSecurityEvidence.sections.controlsIntroduced} />
          <TextSection title="Validation Approach" body={ragSecurityEvidence.sections.validationApproach} />
          <TextSection title="Expected Risk Reduction" body={ragSecurityEvidence.sections.expectedRiskReduction} />
          <BulletSection title="Artifacts Produced" items={ragSecurityEvidence.sections.artifactsProduced} />
          <TextSection title="Public Evidence" body={ragSecurityEvidence.sections.publicEvidence} />

          <div className="print-break-before"><ControlsMatrix rows={ragSecurityEvidence.controlMatrix} /></div>
          <div className="print-break-before"><HowItWorksArchitecture steps={ragSecurityEvidence.architectureFlow} caption={ragSecurityEvidence.architectureCaption} /></div>

          <BulletSection title="Who should use this" items={ragSecurityEvidence.audiences} />
          <BulletSection title="Measured outputs" items={ragSecurityEvidence.measuredOutputs} />

          <section className="print-section print-break-before rounded-lg border border-site-primary/20 p-6 bg-site-block">
            <h2 className="text-2xl font-bold mb-4">Evidence link cards</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {ragSecurityEvidence.evidenceLinks.map((item) => (
                <EvidenceLinkCard key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section className="print-section rounded-xl border border-dashed border-site-primary/30 p-6 bg-site-block">
            <h2 className="text-2xl font-bold">Evidence Pack PDF CTA</h2>
            <p className="text-site-muted mt-2">{ragSecurityEvidence.pdfCta.label}</p>
            <p className="text-xs text-amber-600 mt-2">{ragSecurityEvidence.pdfCta.note}</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
