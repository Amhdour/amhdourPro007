import { Card, CardContent } from "@/components/ui/card";
import { dictionaries } from "@/lib/dictionaries";

export default function Testimonials({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const t = dictionaries[locale].testimonials;

  return (
    <section className="w-full bg-site-section" id="testimonials">
      <main className="flex flex-col gap-8 py-32 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        <div>
          <h2 className="text-lg uppercase text-site-primary font-bold mx-auto pb-2 w-max">
            {t.sectionTitle}
          </h2>
          <h3 className="text-2xl font-bold mx-auto pb-2 text-center">
            {t.heading}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {t.items.map((item, i) => (
            <Card
              key={i}
              className="border border-site-primary/20 bg-site-block hover:border-site-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="flex flex-col gap-4 pt-2">
                <div className="text-site-primary text-5xl leading-none select-none font-serif">
                  &ldquo;
                </div>
                <p className="text-site-muted italic text-base leading-relaxed">
                  {item.quote}
                </p>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-site-primary/10">
                  <img
                    src={`https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(item.name)}&backgroundColor=1770b5&textColor=ffffff&fontSize=40`}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full shrink-0 ring-2 ring-site-primary/20"
                  />
                  <div>
                    <p className="font-semibold text-site-text">{item.name}</p>
                    <p className="text-sm text-site-muted">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </section>
  );
}
