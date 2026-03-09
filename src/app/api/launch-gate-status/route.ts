import fs from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

type StatusResponse = {
  service: string;
  status: "READY" | "CONDITIONAL" | "BLOCKED";
  summary: string;
  evaluatedAt: string;
  blockerCount?: number;
  residualRiskCount?: number;
  source: "artifact";
  artifactPath?: string;
};

const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 60;
const bucket = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request) {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return "unknown";
}

function enforceRateLimit(ip: string) {
  const now = Date.now();
  const entry = bucket.get(ip);

  if (!entry || now > entry.resetAt) {
    bucket.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;
  entry.count += 1;
  return true;
}

export async function GET(request: Request) {
  const ip = getClientIp(request);
  if (!enforceRateLimit(ip)) {
    return NextResponse.json(
      { error: "Rate limit exceeded" },
      {
        status: 429,
        headers: {
          "Cache-Control": "no-store",
          "Retry-After": "60",
        },
      }
    );
  }

  try {
    const filePath = path.join(process.cwd(), "public", "data", "launch-gate-status.json");
    const file = await fs.readFile(filePath, "utf-8");
    const payload = JSON.parse(file) as StatusResponse;

    return NextResponse.json(payload, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch {
    return NextResponse.json(
      {
        service: "secure-support-agent-starter-kit",
        status: "CONDITIONAL",
        summary: "Launch-gate artifact is temporarily unavailable. Please review the Evidence Pack and rerun checks.",
        source: "artifact",
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }
}
