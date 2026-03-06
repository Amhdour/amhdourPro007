"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { dictionaries } from "@/lib/dictionaries";

async function submitNewsletter(email: string) {
  const res = await fetch("/api/newsletter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return res.ok;
}

export default function Newsletter({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const t = dictionaries[locale].newsletter;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    const ok = await submitNewsletter(email);
    if (ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="w-full" id="newsletter">
      <main className="py-20 px-4 md:px-8 md:max-w-[700px] md:mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-site-text mb-2">{t.heading}</h2>
            <p className="text-site-muted">{t.subtitle}</p>
          </div>
          {status === "success" ? (
            <p className="text-center text-green-600 font-medium">{t.successMessage}</p>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-site-block border-site-muted/30 flex-1"
                />
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-site-primary hover:bg-site-primary-light text-white font-semibold px-6"
                >
                  {status === "submitting" ? t.subscribingButton : t.subscribeButton}
                </Button>
              </form>
              {status === "error" && (
                <p className="text-center text-red-600 font-medium mt-3">Something went wrong. Please try again.</p>
              )}
            </>
          )}
        </ScrollReveal>
      </main>
    </section>
  );
}
