type FlowStep = {
  name: string;
  annotation: string;
  detail: string;
};

type HowItWorksArchitectureProps = {
  steps: readonly FlowStep[];
  caption: string;
};

const annotationClass: Record<string, string> = {
  "Trust boundary": "text-amber-700 bg-amber-50 border-amber-200",
  "Control point": "text-blue-700 bg-blue-50 border-blue-200",
  "Validation point": "text-emerald-700 bg-emerald-50 border-emerald-200",
  "Evidence point": "text-violet-700 bg-violet-50 border-violet-200",
};

const legendOrder = ["Trust boundary", "Control point", "Validation point", "Evidence point"] as const;

export default function HowItWorksArchitecture({ steps, caption }: HowItWorksArchitectureProps) {
  return (
    <section className="print-section rounded-lg border border-site-primary/20 p-6 bg-site-block" aria-labelledby="how-it-works-title">
      <h2 id="how-it-works-title" className="text-2xl font-bold mb-5">
        How it works
      </h2>

      <div className="mb-5 flex flex-wrap gap-2" aria-label="Architecture legend">
        {legendOrder.map((label) => (
          <span
            key={label}
            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${annotationClass[label]}`}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-site-primary/20 md:hidden" aria-hidden="true" />

        <div className="architecture-grid grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, idx) => {
            const stepNumber = idx + 1;
            const isLast = idx === steps.length - 1;
            return (
              <article
                key={step.name}
                className="architecture-step relative rounded-md border border-site-primary/25 p-4 bg-site-bg md:min-h-[220px]"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-site-primary text-white text-xs font-bold">
                    {stepNumber}
                  </span>
                  <h3 className="font-bold text-base leading-tight">{step.name}</h3>
                </div>

                <p className={`inline-block text-xs px-2 py-1 rounded border font-semibold ${annotationClass[step.annotation] ?? "text-site-muted border-site-muted/20"}`}>
                  {step.annotation}
                </p>

                <p className="text-sm text-site-muted mt-3">{step.detail}</p>

                {!isLast && (
                  <span className="absolute -bottom-3 left-4 text-site-primary md:hidden" aria-hidden="true">
                    ↓
                  </span>
                )}

                {!isLast && (
                  <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-site-primary xl:inline" aria-hidden="true">
                    →
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <p className="mt-5 text-sm text-site-muted">{caption}</p>
    </section>
  );
}
