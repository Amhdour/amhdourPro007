import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

type ImplementationItem = {
  title: string;
  demonstrates: string;
  whyItMatters: string;
  evidenceLink: string;
  evidenceLabel: string;
  repoLink: string;
  repoLabel: string;
  screenshot?: string;
};

const implementationItems: readonly ImplementationItem[] = [
  {
    title: "myStarterKit practical controls",
    demonstrates:
      "Secure-by-default starter architecture with prompt injection defenses, retrieval boundary controls, tool authorization patterns, and structured logging foundations.",
    whyItMatters:
      "Shows security controls are implemented as reusable engineering defaults instead of post-launch policy documents.",
    evidenceLink: "/resources/prompt-injection-defense-guide.pdf",
    evidenceLabel: "Evidence: Prompt Injection Defense Guide",
    repoLink: "https://github.com/Amhdour/myStarterKit",
    repoLabel: "Repository: myStarterKit",
  },
  {
    title: "rag-security-platform adversarial evals",
    demonstrates:
      "Threat-model-first RAG security workflow with adversarial check coverage across prompt injection, retrieval poisoning, unsafe tool use, leakage, and auditability.",
    whyItMatters:
      "Provides reviewer-facing proof that controls are tested against realistic attack paths before production decisions.",
    evidenceLink: "/evidence/rag-security-platform",
    evidenceLabel: "Evidence: RAG Security Evidence Pack",
    repoLink: "https://github.com/Amhdour/rag-security-platform",
    repoLabel: "Repository: rag-security-platform",
  },
  {
    title: "myStarterKit-maindashb screenshots",
    demonstrates:
      "Operational dashboard concepts for monitoring guardrail events, policy outcomes, and runtime security telemetry in one place.",
    whyItMatters:
      "Converts architecture claims into an operator view that hiring managers and clients can quickly assess.",
    evidenceLink: "/projectimages/screenshot_5.png",
    evidenceLabel: "Evidence: Dashboard screenshot",
    repoLink: "https://github.com/Amhdour/myStarterKit-maindashb",
    repoLabel: "Repository: myStarterKit-maindashb",
    screenshot: "/projectimages/screenshot_5.png",
  },
  {
    title: "Launch Gate evidence artifacts",
    demonstrates:
      "Go/no-go readiness artifacts including checkpoint criteria, traceable assessment worksheets, and evidence-oriented launch decisions.",
    whyItMatters:
      "Makes launch security auditable and repeatable for awards reviewers, compliance stakeholders, and client teams.",
    evidenceLink: "/resources/launch-gate-worksheet.pdf",
    evidenceLabel: "Evidence: Launch Gate Assessment Worksheet",
    repoLink: "https://github.com/Amhdour/launch-gate-cli",
    repoLabel: "Repository: launch-gate-cli",
  },
];

export default function WorkingImplementations() {
  return (
    <section className="w-full" id="working-implementations">
      <main className="flex flex-col gap-8 py-24 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        <ScrollReveal animation="fade-up">
          <div>
            <h2 className="text-lg uppercase text-site-primary font-bold mx-auto pb-2 w-max">
              Technical Proof
            </h2>
            <h3 className="text-2xl font-bold mx-auto pb-2 text-center">
              Working Implementations
            </h3>
            <p className="text-site-muted text-center max-w-3xl mx-auto">
              Practical implementation evidence mapped to your flagship AI security positioning.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {implementationItems.map((item, index) => (
            <ScrollReveal key={item.title} animation="fade-up" delay={index * 100}>
              <article className="rounded-lg border border-site-primary/20 bg-site-block p-6 h-full flex flex-col gap-4">
                <h4 className="text-xl font-bold text-site-text">{item.title}</h4>

                <div>
                  <p className="text-sm uppercase tracking-wide text-site-primary font-semibold">What it demonstrates</p>
                  <p className="text-site-muted mt-1">{item.demonstrates}</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wide text-site-primary font-semibold">Why it matters</p>
                  <p className="text-site-muted mt-1">{item.whyItMatters}</p>
                </div>

                <div className="mt-auto flex flex-col gap-2 pt-2">
                  <Link href={item.evidenceLink} className="text-site-primary hover:underline font-semibold text-sm w-max">
                    {item.evidenceLabel}
                  </Link>
                  <a href={item.repoLink} target="_blank" rel="noreferrer" className="text-site-primary hover:underline font-semibold text-sm w-max">
                    {item.repoLabel}
                  </a>
                </div>

                <div className="pt-2">
                  {item.screenshot ? (
                    <div className="relative w-full aspect-video rounded-md overflow-hidden border border-site-primary/20">
                      <Image
                        src={item.screenshot}
                        alt={`${item.title} screenshot`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-video rounded-md border border-dashed border-site-muted/40 bg-site-bg/60 flex items-center justify-center text-sm text-site-muted">
                      Optional screenshot slot
                    </div>
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
