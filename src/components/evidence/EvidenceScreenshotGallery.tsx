"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import EvidenceScreenshotCard, { type EvidenceScreenshotItem } from "@/components/evidence/EvidenceScreenshotCard";

export default function EvidenceScreenshotGallery({
  sectionTitle,
  heading,
  subtitle,
  items,
}: {
  sectionTitle: string;
  heading: string;
  subtitle: string;
  items: readonly EvidenceScreenshotItem[];
}) {
  const [active, setActive] = useState<EvidenceScreenshotItem | null>(null);

  return (
    <section className="w-full bg-site-section" id="repository-evidence-gallery">
      <main className="flex flex-col gap-8 py-24 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        <ScrollReveal animation="fade-up">
          <div>
            <h2 className="text-lg uppercase text-site-primary font-bold mx-auto pb-2 w-max">{sectionTitle}</h2>
            <h3 className="text-2xl font-bold mx-auto pb-2 text-center">{heading}</h3>
            <p className="text-site-muted text-center max-w-3xl mx-auto">{subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <ScrollReveal key={item.id} animation="fade-up" delay={index * 80}>
              <EvidenceScreenshotCard item={item} onOpen={setActive} />
            </ScrollReveal>
          ))}
        </div>
      </main>

      {active && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={`${active.title} screenshot preview`}>
          <div className="w-full max-w-5xl bg-site-block rounded-lg border border-site-primary/20 overflow-hidden">
            <div className="flex items-center justify-between p-3 border-b border-site-primary/10">
              <div>
                <p className="font-semibold text-site-text">{active.title}</p>
                <p className="text-xs text-site-muted">{active.repository}</p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="text-site-primary hover:text-site-primary-light font-semibold"
              >
                Close
              </button>
            </div>
            <div className="bg-site-bg/70">
              {active.imageSrc && (
                <div className="relative w-full aspect-video">
                  <Image
                    src={active.imageSrc}
                    alt={`${active.title} expanded screenshot`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              )}
            </div>
            <div className="p-4">
              <p className="text-sm text-site-muted">{active.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
