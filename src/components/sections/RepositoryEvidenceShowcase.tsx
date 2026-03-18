import EvidenceScreenshotGallery from "@/components/evidence/EvidenceScreenshotGallery";

const repositoryEvidenceItems = [
  {
    id: "rag-arch-diagram",
    title: "RAG trust-boundary architecture",
    repository: "rag-security-platform",
    imageSrc: "/repo-evidence/rag-security-platform/01-trust-boundary-architecture.png",
    caption: "Architecture-oriented view for ingestion, retrieval, generation, tool use, and audit points.",
    tags: ["architecture", "trust-boundary", "evidence-pack"],
    evidenceHref: "/evidence/rag-security-platform",
    evidenceLabel: "Open evidence pack →",
  },
  {
    id: "rag-eval-output",
    title: "Adversarial evaluation output sample",
    repository: "rag-security-platform",
    imageSrc: "/repo-evidence/rag-security-platform/02-adversarial-eval-output.png",
    caption: "Test-output style screenshot slot for prompt, retrieval, and tool security checks.",
    tags: ["test-harness", "eval-output", "security-checks"],
    evidenceHref: "https://github.com/Amhdour/rag-security-platform",
    evidenceLabel: "Open repository →",
  },
  {
    id: "starterkit-control-flow",
    title: "Starter Kit control flow",
    repository: "myStarterKit",
    imageSrc: "/repo-evidence/myStarterKit/01-control-flow-guardrails.png",
    caption: "Control path snapshot for prompt handling, retrieval checks, and output validation boundaries.",
    tags: ["documented-controls", "starter-kit", "implementation"],
    evidenceHref: "https://github.com/Amhdour/myStarterKit",
    evidenceLabel: "Open repository →",
  },
  {
    id: "starterkit-launch-artifact",
    title: "Starter Kit launch artifact",
    repository: "myStarterKit",
    imageSrc: "/repo-evidence/myStarterKit/02-launch-gate-artifact.png",
    caption: "Launch-readiness artifact slot for checklist export and unresolved-risk notes.",
    tags: ["launch-gate", "report", "readiness"],
    evidenceHref: "/resources/launch-gate-worksheet.pdf",
    evidenceLabel: "Open launch worksheet →",
  },
  {
    id: "dashboard-overview",
    title: "Security observability dashboard overview",
    repository: "myStarterKit-maindashb",
    imageSrc: "/repo-evidence/myStarterKit-maindashb/01-dashboard-overview.png",
    caption: "Dashboard screenshot for policy denials, anomaly flags, and control outcomes.",
    tags: ["dashboard", "runtime-logging", "observability"],
    evidenceHref: "https://github.com/Amhdour/myStarterKit-maindashb",
    evidenceLabel: "Open repository →",
  },
  {
    id: "dashboard-log-panel",
    title: "Log and evidence panel",
    repository: "myStarterKit-maindashb",
    imageSrc: "/repo-evidence/myStarterKit-maindashb/02-log-evidence-panel.png",
    caption: "Log screenshot slot for trace IDs, policy reason codes, and event timeline review.",
    tags: ["log-screenshot", "traceability", "evidence"],
    evidenceHref: "https://github.com/Amhdour/myStarterKit-maindashb",
    evidenceLabel: "Open repository →",
  },
] as const;

export default function RepositoryEvidenceShowcase() {
  return (
    <EvidenceScreenshotGallery
      sectionTitle="Repository Evidence"
      heading="Screenshots & Evidence Images"
      subtitle="Consistent screenshot cards for your three repositories, with captions, evidence tags, and optional lightbox preview."
      items={repositoryEvidenceItems}
    />
  );
}
