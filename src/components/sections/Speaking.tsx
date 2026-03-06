import ScrollReveal from "@/components/ScrollReveal";
import { dictionaries } from "@/lib/dictionaries";

export default function Speaking({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const t = dictionaries[locale].speaking;

  return (
    <section className="w-full" id="speaking">
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
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-site-primary/20 -translate-x-1/2" />
          <div className="flex flex-col gap-12">
            {t.events.map((event, i) => (
              <ScrollReveal key={i} animation={i % 2 === 0 ? "fade-left" : "fade-right"} delay={i * 100}>
                <div className={`flex flex-col md:flex-row items-start gap-4 relative ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-10 md:pl-0`}>
                    <span className="text-xs font-bold uppercase tracking-wider text-site-primary">{event.date}</span>
                    <h4 className="text-lg font-bold text-site-text mt-1">{event.title}</h4>
                    <p className="text-site-muted text-sm mt-1">{event.venue}</p>
                    <p className="text-site-text/80 text-sm mt-2">{event.topic}</p>
                    {event.link && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-site-primary text-sm hover:underline mt-2 inline-block"
                      >
                        {t.viewMore} →
                      </a>
                    )}
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-site-primary rounded-full border-4 border-site-bg -translate-x-1/2 top-1 z-[1]" />
                  <div className="md:w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
