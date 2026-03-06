"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { dictionaries } from "@/lib/dictionaries";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-site-primary">
      {count}{suffix}
    </div>
  );
}

export default function Stats({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const t = dictionaries[locale].stats;

  return (
    <section className="w-full" id="stats">
      <main className="flex flex-col gap-8 py-20 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="text-center">
            <h2 className="text-lg uppercase text-site-primary font-bold mx-auto pb-2 w-max">
              {t.sectionTitle}
            </h2>
            <h3 className="text-2xl font-bold mx-auto pb-2">
              {t.heading}
            </h3>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.items.map((item, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
              <div className="flex flex-col items-center gap-2 text-center">
                <CountUp target={item.value} suffix={item.suffix} />
                <p className="text-sm md:text-base font-medium text-site-muted">{item.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </main>
    </section>
  );
}
