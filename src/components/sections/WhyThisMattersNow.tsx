import Link from "next/link";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

export default function WhyThisMattersNow() {
  return (
    <section className="w-full bg-site-section" id="why-this-matters">
      <main className="flex flex-col gap-6 py-24 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl">
            <h2 className="text-lg uppercase text-site-primary font-bold pb-2">Why this matters now</h2>
            <h3 className="text-2xl font-bold pb-3">RAG systems are scaling faster than their security foundations.</h3>
            <p className="text-site-muted leading-relaxed">
              The <strong>rag-security-platform</strong> initiative addresses practical security gaps in modern RAG systems: trust boundaries, retrieval validation, policy guardrails, tool authorization, runtime monitoring, and auditability.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={100}>
          <article className="rounded-lg border border-site-primary/20 bg-site-block p-6 max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-site-primary font-semibold mb-2">Evidence spotlight</p>
            <h4 className="text-xl font-bold mb-2">rag-security-platform</h4>
            <p className="text-site-muted mb-5">
              A security-focused RAG reference with clear control points and evidence packaging for technical reviewers and decision-makers.
            </p>
            <Link href="/evidence/rag-security-platform" aria-label="Open the RAG Security Evidence Pack">
              <Button className="bg-site-primary text-white hover:bg-site-primary/90 font-semibold">
                Open the RAG Security Evidence Pack
              </Button>
            </Link>
          </article>
        </ScrollReveal>
      </main>
    </section>
  );
}
