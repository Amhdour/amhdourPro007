import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { dictionaries } from "@/lib/dictionaries";

const primaryServiceIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="inline-block align-middle" width="1em" height="1em" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>
);

export default function Services({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const t = dictionaries[locale].services;

  return (
    <section className="w-full" id="services">
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
        <div className="w-full max-w-[900px] mx-auto">
          {t.items.map((service, index) => (
            <ScrollReveal key={service.title} animation="fade-up" delay={index * 100}>
              <div className="card flex flex-col rounded-lg w-full group overflow-y-hidden overflow-auto shadow self-start p-6 gap-4 hover:bg-site-primary hover:text-white transition-all duration-500 cursor-pointer">
                <div className="text-5xl text-site-primary group-hover:text-white transition-colors duration-500">
                  {primaryServiceIcon}
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="leading-relaxed">{service.description}</p>
                <div>
                  <Link href="/secure-support-agent-starter-kit" className="text-site-primary group-hover:text-white hover:underline text-sm font-semibold">
                    Explore the flagship page →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </main>
    </section>
  );
}
