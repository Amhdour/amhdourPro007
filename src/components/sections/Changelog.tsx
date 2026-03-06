import ScrollReveal from "@/components/ScrollReveal";
import { dictionaries } from "@/lib/dictionaries";

export default function Changelog({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const t = dictionaries[locale].changelog;

  return (
    <section className="w-full" id="changelog">
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
        <div className="max-w-2xl mx-auto w-full relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-site-primary/20" />
          <div className="flex flex-col gap-8">
            {t.entries.map((entry, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                <div className="flex gap-6 relative pl-10">
                  <div className="absolute left-4 w-3 h-3 bg-site-primary rounded-full border-2 border-site-bg -translate-x-1/2 top-1.5 z-[1]" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-site-primary">{entry.date}</span>
                    <h4 className="text-base font-bold text-site-text mt-1">{entry.title}</h4>
                    <p className="text-site-muted text-sm mt-1">{entry.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
