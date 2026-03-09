"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { dictionaries } from "@/lib/dictionaries";

type Project = {
  name: string;
  image: string;
  description: string;
  tags: readonly string[];
};

const FEATURE_HREFS: Record<string, string> = {
  "Secure Support Agent Starter Kit": "/secure-support-agent-starter-kit",
};

const FLAGSHIP_ALT_TEXT = "Dark architecture flow diagram for Secure Support Agent Starter Kit: Agent Request, Policy Engine, Retrieval, Model, Tool Router, Response, and Telemetry/Evidence layer.";

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
          alt={project.name === "Secure Support Agent Starter Kit" ? FLAGSHIP_ALT_TEXT : `${project.name} portfolio image`}
          width={1536}
          height={864}
          className="object-cover cursor-pointer relative brightness-50 group-hover:brightness-100 ease-in-out duration-500 aspect-video w-full"
        />
        <h3 className="text-3xl font-semibold absolute bottom-0 left-0 p-2 text-white group-hover:hidden">
          {project.name}
        </h3>
      </div>
      <div
        className={`collapsible-container flex flex-col gap-2 px-4 bg-site-block overflow-hidden transition-all duration-500 ${
          expanded ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <h3 className="text-3xl font-semibold">{project.name}</h3>
        <p>{project.description}</p>
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
          </div>
        </ScrollReveal>
        <div className="w-full max-w-[900px] mx-auto">
          {t.projects.map((project, index) => {
            const href = FEATURE_HREFS[project.name];
            return (
              <ScrollReveal key={project.name} animation="fade-up" delay={index * 100}>
                <ProjectCard
                  project={project}
                  caseStudyHref={href}
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
