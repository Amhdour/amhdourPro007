"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

type EvidenceType =
  | "Architecture Diagrams"
  | "Log Screenshots"
  | "Dashboard Screenshots"
  | "Test Output Screenshots"
  | "Launch Gate Reports"
  | "Threat Model Visuals";

type EvidenceItem = {
  title: string;
  type: EvidenceType;
  summary: string;
  href: string;
  hrefLabel: string;
  image?: string;
};

const items: readonly EvidenceItem[] = [
  {
    title: "RAG pipeline architecture map",
    type: "Architecture Diagrams",
    summary: "Trust boundaries and control points across ingestion, retrieval, generation, tool use, and audit logging.",
    href: "/evidence/rag-security-platform",
    hrefLabel: "Open evidence page",
    image: "/projectimages/screenshot_4.png",
  },
  {
    title: "Runtime policy decision logs",
    type: "Log Screenshots",
    summary: "Structured event examples showing blocked prompts, denied actions, and control decision traces.",
    href: "/resources/prompt-injection-defense-guide.pdf",
    hrefLabel: "Open logging guide",
  },
  {
    title: "Security monitoring dashboard",
    type: "Dashboard Screenshots",
    summary: "Dashboard-style visibility for guardrail events, anomaly flags, and response outcomes.",
    href: "https://github.com/Amhdour/myStarterKit-maindashb",
    hrefLabel: "Open dashboard repo",
    image: "/projectimages/screenshot_5.png",
  },
  {
    title: "Adversarial test run output",
    type: "Test Output Screenshots",
    summary: "Example pass/fail output for prompt-injection, retrieval-integrity, and tool-authorization checks.",
    href: "https://github.com/Amhdour/rag-security-platform",
    hrefLabel: "Open eval repo",
  },
  {
    title: "Launch Gate assessment artifact",
    type: "Launch Gate Reports",
    summary: "Go/no-go worksheet evidence for release-readiness criteria and unresolved-risk tracking.",
    href: "/resources/launch-gate-worksheet.pdf",
    hrefLabel: "Open report artifact",
  },
  {
    title: "Threat model visual reference",
    type: "Threat Model Visuals",
    summary: "Threat surface mapping for prompt injection, retrieval poisoning, tool misuse, and output risk.",
    href: "/evidence/rag-security-platform",
    hrefLabel: "Open threat model context",
    image: "/projectimages/screenshot_1.png",
  },
];

const filterOrder: readonly (EvidenceType | "All")[] = [
  "All",
  "Architecture Diagrams",
  "Log Screenshots",
  "Dashboard Screenshots",
  "Test Output Screenshots",
  "Launch Gate Reports",
  "Threat Model Visuals",
];

export default function EvidenceGallery() {
  const [activeFilter, setActiveFilter] = useState<EvidenceType | "All">("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  return (
    <section className="w-full bg-site-section" id="evidence-gallery">
      <main className="flex flex-col gap-8 py-24 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        <ScrollReveal animation="fade-up">
          <div>
            <h2 className="text-lg uppercase text-site-primary font-bold mx-auto pb-2 w-max">
              Evidence Gallery
            </h2>
            <h3 className="text-2xl font-bold mx-auto pb-2 text-center">
              Scan-Friendly Technical Artifacts
            </h3>
            <p className="text-site-muted text-center max-w-3xl mx-auto">
              Quick visual index of implementation evidence for architecture, logs, dashboards, tests, launch decisions, and threat modeling.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap gap-2 justify-center">
          {filterOrder.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeFilter === filter
                  ? "bg-site-primary text-white"
                  : "bg-site-block text-site-muted border border-site-muted/30 hover:text-site-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.title} animation="fade-up" delay={index * 70}>
              <article className="h-full rounded-lg border border-site-primary/20 bg-site-block p-4 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-base font-semibold text-site-text leading-snug">{item.title}</h4>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-site-primary/10 text-site-primary font-semibold whitespace-nowrap">
                    {item.type}
                  </span>
                </div>

                <div className="rounded-md border border-site-primary/15 overflow-hidden">
                  {item.image ? (
                    <div className="relative aspect-video">
                      <Image
                        src={item.image}
                        alt={`${item.title} preview`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-site-bg/60 flex items-center justify-center text-xs text-site-muted px-4 text-center">
                      Screenshot/report preview slot
                    </div>
                  )}
                </div>

                <p className="text-sm text-site-muted leading-relaxed">{item.summary}</p>

                <div className="mt-auto pt-1">
                  {item.href.startsWith("http") ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="text-site-primary hover:underline text-sm font-semibold">
                      {item.hrefLabel}
                    </a>
                  ) : (
                    <Link href={item.href} className="text-site-primary hover:underline text-sm font-semibold">
                      {item.hrefLabel}
                    </Link>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </main>
    </section>
  );
}
