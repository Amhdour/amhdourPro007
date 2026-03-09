import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LaunchGateStatusWidget from "@/components/LaunchGateStatusWidget";

export const metadata: Metadata = {
  title: "Secure Support Agent Starter Kit | www.amhdour.cv",
  description:
    "Production-oriented starter kit for secure support agents across RAG and autonomous agent systems, with policy-first orchestration, bounded retrieval/tool access, auditable telemetry, and evidence-based readiness.",
  alternates: {
    canonical: "/secure-support-agent-starter-kit",
  },
  openGraph: {
    type: "article",
    title: "Secure Support Agent Starter Kit | www.amhdour.cv",
    description:
      "Policy-first secure support-agent starter kit with scenario-driven security evaluations and evidence-based launch-gate readiness.",
    url: "/secure-support-agent-starter-kit",
    images: [
      {
        url: "/images/secure-support-agent-architecture.svg",
        width: 1400,
        height: 840,
        alt: "Secure Support Agent Starter Kit architecture flow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Support Agent Starter Kit | www.amhdour.cv",
    description:
      "Secure support-agent architecture for RAG and autonomous agents with policy-first controls and evidence-based readiness.",
    images: ["/images/secure-support-agent-architecture.svg"],
  },
};

const quickStart = `python -m venv .venv
source .venv/bin/activate
pip install -r requirements-dev.txt
cp config/settings.example.toml config/settings.toml
cp config/logging.example.yaml config/logging.yaml
mkdir -p artifacts/logs/evals artifacts/logs/launch_gate artifacts/replay
pytest
python -m evals.runner
python -m launch_gate.engine`;

const demonstrableOutputs = `pytest
python -m evals.runner
python -m launch_gate.engine`;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.amhdour.cv";


export default function SecureSupportAgentStarterKitPage() {
  return (
    <div className="text-site-text bg-site-bg min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Secure Support Agent Starter Kit",
            "provider": { "@type": "Person", "name": "Ahmed Amhdour", "url": siteUrl },
            "url": `${siteUrl}/secure-support-agent-starter-kit`,
            "description": "A production-oriented starter kit for secure support agents with policy-first orchestration, bounded retrieval/tool access, auditable telemetry, and evidence-based readiness.",
            "serviceType": "AI Trust & Security Readiness Service",
          }),
        }}
      />
      <Header />
      <main className="pt-[75px]">
        <section className="px-4 md:px-8 py-16 md:py-24 border-b border-site-primary/20 bg-site-section">
          <div className="max-w-[1100px] mx-auto flex flex-col gap-6">
            <p className="text-site-primary uppercase tracking-wide font-bold text-sm">Flagship Current Offering</p>
            <h1 className="text-4xl md:text-5xl font-extrabold">Secure Support Agent Starter Kit</h1>
            <p className="text-lg text-site-muted max-w-[900px]">
              A production-oriented, security-first starter architecture for support-focused RAG and autonomous agent systems. This is my
              only current productized offering and the central delivery vehicle for my AI Trust &amp; Security Readiness work.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-site-primary hover:bg-site-primary-light text-white">
                <a href="https://github.com/Amhdour" target="_blank" rel="noreferrer">View on GitHub</a>
              </Button>
              <Button asChild variant="outline" className="border-site-primary text-site-primary hover:bg-site-primary hover:text-white">
                <Link href="/#contact">Contact</Link>
              </Button>
              <Button asChild variant="outline" className="border-site-primary text-site-primary hover:bg-site-primary hover:text-white">
                <Link href="/resources">View Evidence Pack</Link>
              </Button>
              <Button asChild variant="outline" className="border-site-primary text-site-primary hover:bg-site-primary hover:text-white">
                <a href="https://github.com/Amhdour" target="_blank" rel="noreferrer">Read Docs</a>
              </Button>
            </div>
            <figure className="mt-2 rounded-xl overflow-hidden border border-site-primary/20 bg-site-block">
              <Image
                src="/images/secure-support-agent-architecture.svg"
                alt="Dark architecture flow diagram for the Secure Support Agent Starter Kit showing Agent Request, Policy Engine, Retrieval, Model, Tool Router, Response, and a Telemetry & Evidence layer."
                width={1400}
                height={840}
                className="w-full h-auto"
                priority
              />
            </figure>
          </div>
        </section>

        <section className="px-4 md:px-8 py-14">
          <div className="max-w-[1100px] mx-auto grid gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Elevator pitch</h2>
              <p className="text-site-muted leading-relaxed">
                The Secure Support Agent Starter Kit gives teams a secure-by-default path to ship support agents with production discipline:
                policy-first orchestration, bounded retrieval/tool access, auditable telemetry, scenario-driven security evaluations, and a
                launch-gate readiness mechanism tied to evidence.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">What makes it strong</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Security-by-architecture module boundaries",
                  "Deny-by-default controls at retrieval/tool/policy boundaries",
                  "Replay-friendly telemetry artifacts for review and incident analysis",
                  "Scenario-driven security eval harness with regression outputs",
                  "Launch gate tied to evidence, not assertions",
                ].map((item) => (
                  <article key={item} className="card rounded-lg p-5 border border-site-primary/20 bg-site-block">
                    <p className="font-medium">{item}</p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Demonstrable outputs</h2>
              <p className="text-site-muted mb-4">
                Reviewers can run tests, evaluations, and launch-gate checks directly to generate evidence artifacts and inspect readiness
                outcomes.
              </p>
              <pre className="rounded-lg p-4 bg-site-block border border-site-primary/20 overflow-x-auto text-sm"><code>{demonstrableOutputs}</code></pre>
              <p className="text-site-muted mt-4">
                Expected outputs include artifacts under <code>artifacts/logs/evals/</code>, launch-gate output from the engine run, and
                replay/audit artifacts where applicable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Who it is for</h2>
              <ul className="list-disc pl-6 space-y-2 text-site-muted">
                <li>Security reviewers assessing implementation quality and evidence trails.</li>
                <li>Technical clients evaluating AI safety posture before go-live decisions.</li>
                <li>Engineering teams needing secure-by-default RAG/agent starter architecture.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Quick start</h2>
              <pre className="rounded-lg p-4 bg-site-block border border-site-primary/20 overflow-x-auto text-sm"><code>{quickStart}</code></pre>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Evidence pack and security guarantees</h2>
              <p className="text-site-muted leading-relaxed mb-4">
                The supporting documentation should clearly cover security guarantees, trust boundaries, threat model assumptions, and the
                evidence pack produced by tests/evals/launch-gate runs. These artifacts are intended to support technical review, audit
                readiness, and decision-making transparency.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" className="border-site-primary text-site-primary hover:bg-site-primary hover:text-white">
                  <Link href="/resources">Open Evidence Resources</Link>
                </Button>
                <Button asChild variant="outline" className="border-site-primary text-site-primary hover:bg-site-primary hover:text-white">
                  <a href="https://github.com/Amhdour" target="_blank" rel="noreferrer">Repository &amp; Docs</a>
                </Button>
              </div>
            </div>

            <LaunchGateStatusWidget />

            <div className="rounded-lg border border-site-primary/30 bg-site-block p-5">
              <h2 className="text-2xl font-bold mb-2">Scope clarity / honest limits</h2>
              <p className="text-site-muted leading-relaxed">
                Live integrations with specific LLM providers, vector stores, ticketing systems, and business/domain-specific logic are not
                included by default in this starter kit. Those are integration tracks for future implementation work based on each team’s
                production context and risk requirements.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
