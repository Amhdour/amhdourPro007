import ScrollReveal from "@/components/ScrollReveal";

type ControlCard = {
  title: string;
  inAction: string;
  securityOutcome: string;
};

const controls: readonly ControlCard[] = [
  {
    title: "Prompt injection defense",
    inAction:
      "Inputs are screened before model processing with rule checks and policy filters to block instruction override patterns.",
    securityOutcome:
      "Reduces the chance that hostile prompts can bypass system instructions.",
  },
  {
    title: "Retrieval validation",
    inAction:
      "Retrieved chunks are checked for source trust and policy fit before being merged into model context.",
    securityOutcome:
      "Limits context poisoning and low-integrity evidence entering generation.",
  },
  {
    title: "Tool authorization",
    inAction:
      "Tool calls are gated by explicit permission rules so only approved actions run in each workflow.",
    securityOutcome:
      "Constrains agent actions to defined scope and reduces unsafe tool misuse.",
  },
  {
    title: "Output validation",
    inAction:
      "Responses pass through format, policy, and safety checks before release to downstream users or systems.",
    securityOutcome:
      "Catches policy violations and malformed outputs before final delivery.",
  },
  {
    title: "Runtime logging",
    inAction:
      "Security events, decision points, and control outcomes are captured as structured logs during execution.",
    securityOutcome:
      "Supports traceability for debugging, incident review, and audit preparation.",
  },
  {
    title: "Launch gate evaluation",
    inAction:
      "Pre-release checkpoints review threat coverage, control evidence, and unresolved risks before go/no-go decisions.",
    securityOutcome:
      "Creates a repeatable release-readiness record for technical and compliance review.",
  },
];

export default function SecurityControlsInAction() {
  return (
    <section className="w-full bg-site-section" id="security-controls-in-action">
      <main className="flex flex-col gap-8 py-24 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        <ScrollReveal animation="fade-up">
          <div>
            <h2 className="text-lg uppercase text-site-primary font-bold mx-auto pb-2 w-max">
              Security Controls
            </h2>
            <h3 className="text-2xl font-bold mx-auto pb-2 text-center">
              Practical Controls in Action
            </h3>
            <p className="text-site-muted text-center max-w-3xl mx-auto">
              Concise view of how core controls operate inside a production-oriented AI security workflow.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {controls.map((control, index) => (
            <ScrollReveal key={control.title} animation="fade-up" delay={index * 80}>
              <article className="h-full rounded-lg border border-site-primary/20 bg-site-block p-5 flex flex-col gap-3">
                <h4 className="text-lg font-semibold text-site-text">{control.title}</h4>

                <div>
                  <p className="text-xs uppercase tracking-wide text-site-primary font-semibold">In practice</p>
                  <p className="text-site-muted mt-1 text-sm leading-relaxed">{control.inAction}</p>
                </div>

                <div className="mt-auto">
                  <p className="text-xs uppercase tracking-wide text-site-primary font-semibold">Security outcome</p>
                  <p className="text-site-muted mt-1 text-sm leading-relaxed">{control.securityOutcome}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </main>
    </section>
  );
}
