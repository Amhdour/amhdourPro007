"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dictionaries } from "@/lib/dictionaries";

export default function Certifications({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const t = dictionaries[locale].certifications;

  return (
    <section className="w-full bg-site-section" id="certifications">
      <main className="flex flex-col gap-8 py-24 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
              <Card className="border-site-primary/20 hover:border-site-primary transition-colors duration-300 h-full bg-site-block">
                <CardHeader className="pb-2">
                  <Badge className="w-fit mb-2 bg-site-primary/10 text-site-primary hover:bg-site-primary/20 border-site-primary/30">
                    {item.name}
                  </Badge>
                  <CardTitle className="text-base font-semibold text-site-text">
                    {item.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-site-muted">{item.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </main>
    </section>
  );
}
