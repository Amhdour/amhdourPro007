"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { dictionaries } from "@/lib/dictionaries";

interface ThreatNode {
  id: string;
  label: string;
  description: string;
  riskLevel: string;
  mitigation: string;
  x: number;
  y: number;
}

export default function ThreatVisualizer({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const t = dictionaries[locale].threatModel;
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes: ThreatNode[] = t.nodes.map((n, i) => {
    const positions = [
      { x: 15, y: 25 },
      { x: 50, y: 10 },
      { x: 85, y: 25 },
      { x: 15, y: 70 },
      { x: 50, y: 85 },
      { x: 85, y: 70 },
    ];
    return { ...n, ...positions[i] };
  });

  const connections = [
    [0, 1], [1, 2], [0, 3], [2, 5], [3, 4], [4, 5],
    [1, 4], [0, 4], [1, 3], [1, 5], [2, 4],
  ];

  const active = nodes.find((n) => n.id === activeNode);

  return (
    <section className="w-full bg-site-section" id="threat-model">
      <main className="flex flex-col gap-8 py-32 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        <ScrollReveal animation="fade-up">
          <div>
            <h2 className="text-lg uppercase text-site-primary font-bold mx-auto pb-2 w-max">
              {t.sectionTitle}
            </h2>
            <h3 className="text-2xl font-bold mx-auto pb-2 text-center">
              {t.heading}
            </h3>
            <p className="text-site-muted text-center max-w-2xl mx-auto mt-2">{t.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-2/3 relative">
            <svg viewBox="0 0 100 100" className="w-full aspect-square max-h-[500px]" preserveAspectRatio="xMidYMid meet">
              {connections.map(([a, b], i) => (
                <line
                  key={i}
                  x1={nodes[a].x}
                  y1={nodes[a].y}
                  x2={nodes[b].x}
                  y2={nodes[b].y}
                  className="stroke-site-primary/20"
                  strokeWidth="0.3"
                />
              ))}
              {nodes.map((node) => (
                <g key={node.id} className="cursor-pointer" onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={activeNode === node.id ? 5 : 4}
                    className={`transition-all duration-300 ${
                      activeNode === node.id
                        ? "fill-site-primary stroke-site-primary"
                        : "fill-site-primary/30 stroke-site-primary/60 hover:fill-site-primary/60"
                    }`}
                    strokeWidth="0.5"
                  />
                  <text
                    x={node.x}
                    y={node.y + 8}
                    textAnchor="middle"
                    className="fill-site-text text-[2.8px] font-medium pointer-events-none"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
              <text x="50" y="50" textAnchor="middle" className="fill-site-primary/40 text-[3.5px] font-bold">
                RAG → Agent Pipeline
              </text>
            </svg>
          </div>

          <div className="w-full lg:w-1/3 min-h-[200px]">
            {active ? (
              <ScrollReveal animation="fade-up" key={active.id}>
                <div className="bg-site-block rounded-xl border border-site-primary/20 p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-site-primary animate-pulse" />
                    <h4 className="text-xl font-bold text-site-text">{active.label}</h4>
                  </div>
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                      active.riskLevel === "Critical" || active.riskLevel === "حرج" || active.riskLevel === "Critique" || active.riskLevel === "Kritisch"
                        ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    }`}>
                      {active.riskLevel}
                    </span>
                  </div>
                  <p className="text-site-muted mb-4 text-sm leading-relaxed">{active.description}</p>
                  <div className="pt-4 border-t border-site-primary/10">
                    <p className="text-xs uppercase tracking-wider text-site-primary font-bold mb-2">{t.mitigationLabel}</p>
                    <p className="text-sm text-site-text/80">{active.mitigation}</p>
                  </div>
                </div>
              </ScrollReveal>
            ) : (
              <div className="bg-site-block/50 rounded-xl border border-dashed border-site-muted/30 p-6 flex items-center justify-center min-h-[200px]">
                <p className="text-site-muted text-center text-sm">{t.clickPrompt}</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </section>
  );
}
