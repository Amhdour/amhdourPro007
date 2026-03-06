"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { dictionaries } from "@/lib/dictionaries";

export default function Skills({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const t = dictionaries[locale].skills;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-site-section" id="skills" ref={sectionRef}>
      <main className="flex flex-col gap-8 py-32 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        <ScrollReveal animation="fade-up">
          <div>
            <h2 className="text-lg uppercase text-site-primary font-bold mx-auto pb-2 w-max">
              {t.sectionTitle}
            </h2>
            <h3 className="text-2xl font-bold mx-auto pb-2 text-center">
              {t.heading}
            </h3>
          </div>
        </ScrollReveal>
        <div className="flex flex-col gap-6">
          {t.items.map((skill, index) => (
            <ScrollReveal key={skill.name} animation="fade-up" delay={index * 80}>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between items-center">
                <h4 className="font-semibold text-lg">{skill.name}</h4>
                <span className="text-site-primary font-bold">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-site-muted/30 rounded-full h-3">
                <div
                  className="bg-site-primary h-3 rounded-full skill-bar"
                  style={{ width: visible ? `${skill.percentage}%` : "0%" }}
                />
              </div>
              <div className="flex flex-row justify-between text-sm text-site-muted">
                <span>{skill.level}</span>
                <span>{skill.years}</span>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </main>
    </section>
  );
}
