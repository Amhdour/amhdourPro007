import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { dictionaries } from "@/lib/dictionaries";

export default function About({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const t = dictionaries[locale as keyof typeof dictionaries].about;

  return (
    <section className="w-full bg-site-section" id="about">
      <main className="flex flex-col md:flex-row gap-8 py-32 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        <ScrollReveal animation="fade-left" className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[400px] aspect-[3/4]">
            <Image
              src="/projectimages/aboutf5fb.jpg"
              alt="Ahmed Amhdour about image"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal animation="fade-right" className="md:w-1/2 flex flex-col gap-4">
          <h2 className="text-lg uppercase text-site-primary font-bold">{t.sectionTitle}</h2>
          <h3 className="text-2xl font-bold">
            {t.heading}
          </h3>
          <div className="flex flex-col gap-4 text-site-text leading-relaxed">
            {t.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>
      </main>
    </section>
  );
}
