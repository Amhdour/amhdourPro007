"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { dictionaries } from "@/lib/dictionaries";

type Project = {
  name: string;
  image: string;
  description: string;
  tags: readonly string[];
  directLink?: string;
  directLinkLabel?: string;
};

const CASE_STUDY_SLUGS: Record<string, string> = {
  "Layer Retrofit": "layer-retrofit",
  "Secure Starter Kit": "secure-starter-kit",
  "Launch Gate": "launch-gate",
};

function ProjectCard({ project, caseStudyHref, caseStudyLabel }: { project: Project; caseStudyHref?: string; caseStudyLabel: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="portfolio-card flex flex-col rounded-lg w-full group overflow-hidden shadow self-start cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="relative">
        <Image
          src={project.image}
          alt={`${project.name} portfolio image`}
          width={1536}
          height={864}
          className="object-cover cursor-pointer relative brightness-50 group-hover:brightness-100 ease-in-out duration-500 aspect-video w-full"
        />
        <h3 className="text-3xl font-semibold absolute bottom-0 left-0 p-2 text-white group-hover:hidden">
          {project.name}
        </h3>
      </div>
      <div
        className={`collapsible-container flex flex-col gap-2 px-2 bg-site-block overflow-hidden transition-all duration-500 ${
          expanded ? "max-h-[500px] py-2" : "max-h-0"
        }`}
      >
        <h3 className="text-3xl font-semibold">{project.name}</h3>
        <div className="flex flex-wrap gap-1 mb-1">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-site-primary/10 text-site-primary font-medium">
              {tag}
            </span>
          ))}
        </div>
        <p>{project.description}</p>
        {project.directLink && (
          <Link
            href={project.directLink}
            onClick={(e) => e.stopPropagation()}
            className="text-site-primary hover:underline text-sm font-semibold mt-2 inline-block mr-4"
          >
            {project.directLinkLabel || caseStudyLabel}
          </Link>
        )}
        {caseStudyHref && (
          <Link
            href={caseStudyHref}
            onClick={(e) => e.stopPropagation()}
            className="text-site-primary hover:underline text-sm font-semibold mt-2 inline-block"
          >
            {caseStudyLabel}
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Portfolio({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const t = dictionaries[locale].portfolio;
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const evidenceCta =
    locale === "ar"
      ? "حزمة أدلة RAG →"
      : locale === "fr"
        ? "Dossier de preuves RAG →"
        : locale === "de"
          ? "RAG-Evidenzpaket →"
          : "RAG Evidence Pack →";

  const caseStudyBase = locale === "en" ? "/case-studies" : `/${locale}/case-studies`;

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    t.projects.forEach((p) => p.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, [t.projects]);

  const filtered = activeTag
    ? t.projects.filter((p) => (p.tags as readonly string[]).includes(activeTag))
    : t.projects;

  return (
    <section className="w-full bg-site-section" id="portfolio">
      <main className="flex flex-col gap-8 py-32 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        <ScrollReveal animation="fade-up">
          <div>
            <h2 className="text-lg uppercase text-site-primary font-bold mx-auto pb-2 w-max">
              {t.sectionTitle}
            </h2>
            <h3 className="text-2xl font-bold mx-auto pb-2 text-center">
              {t.heading}
            </h3>
            <Link
              href="/evidence/rag-security-platform"
              className="block w-max mx-auto mt-3 text-sm font-semibold text-site-primary hover:underline"
            >
              {evidenceCta}
            </Link>
          </div>
        </ScrollReveal>
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeTag === null
                ? "bg-site-primary text-white"
                : "bg-site-block text-site-muted hover:text-site-primary border border-site-muted/30"
            }`}
          >
            {t.filterAll}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeTag === tag
                  ? "bg-site-primary text-white"
                  : "bg-site-block text-site-muted hover:text-site-primary border border-site-muted/30"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="flex flex-row flex-wrap gap-8 justify-center">
          {filtered.map((project, index) => {
            const slug = CASE_STUDY_SLUGS[project.name];
            return (
              <ScrollReveal key={project.name} animation={index % 2 === 0 ? "fade-left" : "fade-right"} delay={index * 100} className="w-full md:w-[calc(50%-1rem)]">
                <ProjectCard
                  project={project}
                  caseStudyHref={slug ? `${caseStudyBase}/${slug}` : undefined}
                  caseStudyLabel={t.viewCaseStudy}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </main>
    </section>
  );
}
