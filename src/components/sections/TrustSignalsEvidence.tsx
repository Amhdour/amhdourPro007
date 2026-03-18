import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

type SignalType =
  | "Working demos"
  | "Diagrams"
  | "Test harnesses"
  | "Evidence packs"
  | "Launch gate reports"
  | "Threat models"
  | "Open-source repos"
  | "Documented controls"
  | "Certification / Study";

type TrustSignal = {
  label: string;
  type: SignalType;
  inspectable: string;
  href: string;
};

const trustSignals: readonly TrustSignal[] = [
  {
    label: "RAG Security Evidence Pack",
    type: "Evidence packs",
    inspectable: "Control matrix, architecture flow, and reviewer-facing evidence links.",
    href: "/evidence/rag-security-platform",
  },
  {
    label: "RAG architecture + threat map",
    type: "Diagrams",
    inspectable: "Trust boundaries and threat-surface mapping across the RAG-to-agent pipeline.",
    href: "/evidence/rag-security-platform",
  },
  {
    label: "Launch Gate worksheet artifact",
    type: "Launch gate reports",
    inspectable: "Go/no-go checklist structure and release-readiness evidence fields.",
    href: "/resources/launch-gate-worksheet.pdf",
  },
  {
    label: "Prompt injection defense guide",
    type: "Documented controls",
    inspectable: "Prompt-handling control patterns and security-check references.",
    href: "/resources/prompt-injection-defense-guide.pdf",
  },
  {
    label: "rag-security-platform repository",
    type: "Open-source repos",
    inspectable: "Implementation code paths, project structure, and supporting materials.",
    href: "https://github.com/Amhdour/rag-security-platform",
  },
  {
    label: "myStarterKit repository",
    type: "Working demos",
    inspectable: "Starter implementation baseline for secure RAG/agent development patterns.",
    href: "https://github.com/Amhdour/myStarterKit",
  },
  {
    label: "myStarterKit-maindashb repository",
    type: "Open-source repos",
    inspectable: "Dashboard-oriented observability implementation references.",
    href: "https://github.com/Amhdour/myStarterKit-maindashb",
  },
  {
    label: "RAG security evaluation case study",
    type: "Test harnesses",
    inspectable: "Evaluation controls, test/evidence artifacts, and limitations in one study page.",
    href: "/case-studies/rag-security-evaluation-pack",
  },
  {
    label: "AI security study/cert references",
    type: "Certification / Study",
    inspectable: "Self-directed study and listed certification topics already present in site content.",
    href: "/#experiences",
  },
  {
    label: "Interactive pipeline threat visual",
    type: "Threat models",
    inspectable: "Threat nodes and mitigations for prompt, retrieval, tool, and output risks.",
    href: "/#threat-model",
  },
];

export default function TrustSignalsEvidence() {
  return (
    <section className="w-full" id="trust-signals">
      <main className="flex flex-col gap-8 py-20 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        <ScrollReveal animation="fade-up">
          <div>
            <h2 className="text-lg uppercase text-site-primary font-bold mx-auto pb-2 w-max">
              Trust Signals
            </h2>
            <h3 className="text-2xl font-bold mx-auto pb-2 text-center">
              Verifiable Technical Evidence
            </h3>
            <p className="text-site-muted text-center max-w-3xl mx-auto">
              Links below point to inspectable technical artifacts only. No customer, adoption, or impact metrics are used in this section.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trustSignals.map((signal, index) => (
            <ScrollReveal key={signal.label} animation="fade-up" delay={index * 60}>
              <article className="h-full rounded-lg border border-site-primary/20 bg-site-block p-4 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-base font-semibold text-site-text leading-snug">{signal.label}</h4>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-site-primary/10 text-site-primary font-semibold whitespace-nowrap">
                    {signal.type}
                  </span>
                </div>
                <p className="text-sm text-site-muted">{signal.inspectable}</p>
                <div className="mt-auto">
                  {signal.href.startsWith("http") ? (
                    <a href={signal.href} target="_blank" rel="noreferrer" className="text-site-primary hover:underline text-sm font-semibold">
                      Inspect artifact →
                    </a>
                  ) : (
                    <Link href={signal.href} className="text-site-primary hover:underline text-sm font-semibold">
                      Inspect artifact →
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
