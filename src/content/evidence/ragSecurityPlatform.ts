export const ragSecurityEvidence = {
  title: "RAG Security Evidence Pack",
  summary:
    "A scan-friendly evidence page for rag-security-platform focused on practical RAG security design: trust boundaries, retrieval validation, guardrails, tool authorization, runtime monitoring, and auditability.",
  sections: {
    executiveSummary:
      "rag-security-platform is presented as a practical security reference for Retrieval-Augmented Generation (RAG) systems. It focuses on design and review artifacts that help teams reason about risk before production release.",
    problemAddressed:
      "Many RAG implementations prioritize speed and feature delivery but leave security boundaries under-defined. That gap increases exposure to prompt injection, weak retrieval integrity, unsafe tool usage, and difficult post-incident analysis.",
    whatProjectContributes: [
      "A clear trust-boundary view across ingestion, retrieval, generation, and tool paths.",
      "A control model for retrieval checks, policy guardrails, and output validation.",
      "A reviewer-oriented evidence format linking controls to public artifacts.",
    ],
    threatModel:
      "The threat model centers on realistic attack paths in RAG workflows: hostile instructions in prompts/documents, retrieval poisoning, unauthorized tool actions, sensitive output leakage, and weak logging for investigations.",
    securityGapsIdentified: [
      "Unclear boundaries between untrusted input and privileged actions.",
      "Insufficient validation of retrieved context prior to model generation.",
      "Inconsistent policy enforcement before tool execution.",
      "Limited structured logging for traceability and audit review.",
    ],
    controlsIntroduced: [
      "Trust-boundary mapping at each pipeline stage.",
      "Retrieval validation and context screening controls.",
      "Policy guardrails for prompt handling, model output, and tool authorization.",
      "Runtime monitoring and audit-focused event logging.",
    ],
    validationApproach:
      "Validation is framed as repeatable checks against documented threats and controls, with emphasis on traceable artifacts and conservative claims rather than performance marketing.",
    expectedRiskReduction:
      "Expected risk reduction is directional: fewer unsafe context transitions, tighter control of tool actions, and stronger audit readiness. No adoption, customer, or impact metrics are asserted on this page.",
    artifactsProduced: [
      "RAG threat model",
      "Security architecture pattern",
      "Control matrix",
      "Validation checklist",
      "Launch-readiness evidence template",
      "Observability/dashboard concept",
      "Implementation starter references",
    ],
    publicEvidence:
      "Public evidence is provided through repositories and website materials that describe the security model, controls, and readiness framing.",
  },
  controlMatrix: [
    {
      riskArea: "Prompt Injection",
      exampleThreat: "Malicious instructions in prompts or retrieved documents attempt to override intended behavior.",
      control: "Input/context guardrails and policy checks before generation and before tool actions.",
      evidence: "Public project and site materials emphasizing guardrails and secure RAG patterns.",
    },
    {
      riskArea: "Retrieval Poisoning",
      exampleThreat: "Low-integrity or compromised sources contaminate retrieved context.",
      control: "Retrieval validation and context-screening controls before assembly.",
      evidence: "Published focus on retrieval security and trust-boundary design.",
    },
    {
      riskArea: "Unsafe Tool Use",
      exampleThreat: "Model-triggered tool/API calls execute without sufficient authorization checks.",
      control: "Explicit policy guardrails and authorization gates for tool execution.",
      evidence: "Public positioning around tool authorization and agent safety.",
    },
    {
      riskArea: "Data Leakage",
      exampleThreat: "Sensitive content is exposed in model responses or tool output chains.",
      control: "Output validation and policy filters before response release.",
      evidence: "Security-readiness resources that cover validation and output safeguards.",
    },
    {
      riskArea: "Weak Auditability",
      exampleThreat: "Events cannot be reconstructed reliably due to missing or inconsistent traces.",
      control: "Structured runtime monitoring and audit-oriented logging points.",
      evidence: "Public content emphasizing runtime monitoring and auditability.",
    },
  ],
  architectureCaption:
    "This architecture map shows where trust boundaries are crossed, where controls and validation are applied, and where audit evidence is captured across the RAG pipeline.",
  architectureFlow: [
    { name: "Document Ingestion", annotation: "Trust boundary", detail: "Untrusted files/content enter the pipeline and require source and integrity checks." },
    { name: "Retrieval Layer", annotation: "Control point", detail: "Retrieved candidates are filtered by trust, policy, and relevance constraints." },
    { name: "Context Assembly", annotation: "Validation point", detail: "Context is checked before prompt construction to reduce malicious carry-through." },
    { name: "Model Generation", annotation: "Control point", detail: "Prompt and response policies constrain unsafe or non-compliant behavior." },
    { name: "Tool Use", annotation: "Trust boundary", detail: "External tools/APIs are isolated by authorization scope and execution policy." },
    { name: "Output Validation", annotation: "Validation point", detail: "Responses are screened for policy, leakage, and structural validity before release." },
    { name: "Logging / Audit", annotation: "Evidence point", detail: "Events and decisions are logged to support review, triage, and audit trails." },
  ],
  measuredOutputs: [
    "Three public GitHub repositories are linked in this evidence pack: rag-security-platform, myStarterKit, and myStarterKit-maindashb.",
    "The controls matrix on this page documents five risk areas for reviewer inspection.",
    "The architecture section documents seven stages from Document Ingestion through Logging / Audit.",
    "Public framework and observability references are provided as implementation guidance, not adoption claims.",
  ],
  audiences: [
    "AI security practitioners",
    "Cybersecurity professionals",
    "AI platform engineers",
    "Teams deploying RAG systems",
    "Organizations evaluating trustworthy AI architectures",
  ],
  evidenceLinks: [
    {
      title: "rag-security-platform repository",
      description: "Primary repository for the project evidence context.",
      href: "https://github.com/Amhdour/rag-security-platform",
      type: "repository",
    },
    {
      title: "Ahmed Amhdour website",
      description: "Main site context for AI Trust & Security positioning.",
      href: "https://amhdour.com",
      type: "website",
    },
    {
      title: "myStarterKit repository",
      description: "Starter implementation reference.",
      href: "https://github.com/Amhdour/myStarterKit",
      type: "framework",
    },
    {
      title: "myStarterKit-maindashb repository",
      description: "Dashboard/observability concept reference.",
      href: "https://github.com/Amhdour/myStarterKit-maindashb",
      type: "dashboard concept",
    },
  ],
  pdfCta: {
    label: "Evidence Pack PDF coming soon",
    note: "Placeholder: replace with a public PDF URL when available.",
  },
} as const;
