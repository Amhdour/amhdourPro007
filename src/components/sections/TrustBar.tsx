"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { dictionaries } from "@/lib/dictionaries";

function CompanyLogo({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default group">
      <div className="w-10 h-10 rounded-lg bg-site-primary/10 group-hover:bg-site-primary/20 flex items-center justify-center border border-site-primary/20 transition-colors duration-500">
        <span className="text-site-primary font-bold text-sm">{initials}</span>
      </div>
      <span className="text-site-muted/70 font-semibold text-base md:text-lg group-hover:text-site-primary transition-colors duration-500">
        {name}
      </span>
    </div>
  );
}

export default function TrustBar({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const t = dictionaries[locale].trustBar;

  return (
    <section className="w-full bg-site-section" id="trust">
      <main className="py-12 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        <ScrollReveal animation="fade-up">
          <p className="text-center text-sm uppercase tracking-widest text-site-muted font-semibold mb-6">
            {t.heading}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {t.companies.map((company) => (
              <CompanyLogo key={company} name={company} />
            ))}
          </div>
        </ScrollReveal>
      </main>
    </section>
  );
}
