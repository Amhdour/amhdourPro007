import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { dictionaries } from "@/lib/dictionaries";

export default function OpenSource({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const t = dictionaries[locale].openSource;

  return (
    <section className="w-full bg-site-section" id="open-source">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.map((project, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
              <a href={project.url} target="_blank" rel="noreferrer" className="block h-full">
                <Card className="border border-site-primary/20 bg-site-block hover:border-site-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardContent className="flex flex-col gap-3 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-site-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <h4 className="font-bold text-site-text">{project.name}</h4>
                      </div>
                      <div className="flex items-center gap-1 text-site-muted text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {project.stars}
                      </div>
                    </div>
                    <p className="text-site-muted text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-0.5 rounded-full bg-site-primary/10 text-site-primary font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </main>
    </section>
  );
}
