import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  const formspreeId = process.env.FORMSPREE_FORM_ID;
  if (!formspreeId) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, _subject: "Newsletter Subscription" }),
  });

  if (res.ok) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Submission failed" }, { status: 500 });
}
