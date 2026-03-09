import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  allowedDevOrigins: ["*"],
  async redirects() {
    return [
      { source: "/case-studies/layer-retrofit", destination: "/secure-support-agent-starter-kit", permanent: true },
      { source: "/case-studies/launch-gate", destination: "/secure-support-agent-starter-kit", permanent: true },
      { source: "/ar/case-studies/layer-retrofit", destination: "/secure-support-agent-starter-kit", permanent: true },
      { source: "/ar/case-studies/launch-gate", destination: "/secure-support-agent-starter-kit", permanent: true },
      { source: "/fr/case-studies/layer-retrofit", destination: "/secure-support-agent-starter-kit", permanent: true },
      { source: "/fr/case-studies/launch-gate", destination: "/secure-support-agent-starter-kit", permanent: true },
      { source: "/de/case-studies/layer-retrofit", destination: "/secure-support-agent-starter-kit", permanent: true },
      { source: "/de/case-studies/launch-gate", destination: "/secure-support-agent-starter-kit", permanent: true },
      { source: "/case-studies/rag-trust-analyzer", destination: "/secure-support-agent-starter-kit", permanent: true },
      { source: "/case-studies/agent-threat-mapper", destination: "/secure-support-agent-starter-kit", permanent: true },
      { source: "/ar/case-studies/rag-trust-analyzer", destination: "/secure-support-agent-starter-kit", permanent: true },
      { source: "/ar/case-studies/agent-threat-mapper", destination: "/secure-support-agent-starter-kit", permanent: true },
      { source: "/fr/case-studies/rag-trust-analyzer", destination: "/secure-support-agent-starter-kit", permanent: true },
      { source: "/fr/case-studies/agent-threat-mapper", destination: "/secure-support-agent-starter-kit", permanent: true },
      { source: "/de/case-studies/rag-trust-analyzer", destination: "/secure-support-agent-starter-kit", permanent: true },
      { source: "/de/case-studies/agent-threat-mapper", destination: "/secure-support-agent-starter-kit", permanent: true },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
