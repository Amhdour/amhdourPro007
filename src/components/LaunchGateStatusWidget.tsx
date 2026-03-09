"use client";

import { useEffect, useMemo, useState } from "react";

type GateStatus = "READY" | "CONDITIONAL" | "BLOCKED";

type GatePayload = {
  service: string;
  status: GateStatus;
  summary: string;
  evaluatedAt?: string;
  blockerCount?: number;
  residualRiskCount?: number;
  source: "artifact";
};

const badgeClass: Record<GateStatus, string> = {
  READY: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
  CONDITIONAL: "bg-amber-500/20 text-amber-300 border-amber-400/40",
  BLOCKED: "bg-red-500/20 text-red-300 border-red-400/40",
};

export default function LaunchGateStatusWidget() {
  const [data, setData] = useState<GatePayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    async function load() {
      try {
        const res = await fetch("/api/launch-gate-status", { signal: controller.signal, cache: "no-store" });
        if (!res.ok) throw new Error("Request failed");
        const json = (await res.json()) as GatePayload;
        setData(json);
      } catch {
        setError("Status feed unavailable.");
      } finally {
        setLoading(false);
      }
    }

    load();

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  const evaluatedLabel = useMemo(() => {
    if (!data?.evaluatedAt) return "Not provided";
    const d = new Date(data.evaluatedAt);
    if (Number.isNaN(d.getTime())) return data.evaluatedAt;
    return d.toLocaleString();
  }, [data]);

  return (
    <section className="rounded-xl border border-site-primary/30 bg-site-block p-5" aria-live="polite">
      <h2 className="text-2xl font-bold mb-3">Launch-Gate Status</h2>

      {loading && <p className="text-site-muted">Loading latest launch-gate summary…</p>}

      {!loading && error && (
        <p className="text-site-muted">
          {error} Showing fallback guidance: review the Evidence Pack and run local checks (`python -m launch_gate.engine`).
        </p>
      )}

      {!loading && data && (
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`px-3 py-1 rounded-full border text-sm font-bold ${badgeClass[data.status]}`}>{data.status}</span>
            <span className="text-sm text-site-muted">Source: artifact-backed status feed</span>
          </div>
          <p className="text-site-text/90">{data.summary}</p>
          <div className="grid sm:grid-cols-3 gap-3 text-sm">
            <div className="rounded-md bg-site-bg/60 border border-site-primary/20 px-3 py-2">
              <p className="text-site-muted">Evaluated at</p>
              <p className="font-semibold">{evaluatedLabel}</p>
            </div>
            <div className="rounded-md bg-site-bg/60 border border-site-primary/20 px-3 py-2">
              <p className="text-site-muted">Blockers</p>
              <p className="font-semibold">{data.blockerCount ?? "n/a"}</p>
            </div>
            <div className="rounded-md bg-site-bg/60 border border-site-primary/20 px-3 py-2">
              <p className="text-site-muted">Residual risks</p>
              <p className="font-semibold">{data.residualRiskCount ?? "n/a"}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
