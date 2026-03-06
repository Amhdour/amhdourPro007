import Link from "next/link";
import { dictionaries } from "@/lib/dictionaries";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return dictionaries.fr.caseStudies.studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = dictionaries.fr.caseStudies.studies.find((s) => s.slug === slug);
  if (!study) return { title: "Non trouvé" };
  return { title: `${study.title} | Ahmed Amhdour`, description: study.overview };
}

export default async function FrenchCaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const t = dictionaries.fr.caseStudies;
  const study = t.studies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <div className="text-site-text bg-site-bg">
      <Header locale="fr" />
      <main className="min-h-screen pt-[75px]">
        <article className="max-w-[800px] mx-auto px-4 py-16">
          <Link href="/fr#portfolio" className="text-site-primary hover:underline text-sm mb-8 inline-block">{t.backLink}</Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-site-text mb-6">{study.title}</h1>
          <section className="mb-10">
            <h2 className="text-xl font-bold text-site-primary mb-3">{t.overviewTitle}</h2>
            <p className="text-site-text/80 leading-relaxed">{study.overview}</p>
          </section>
          <section className="mb-10">
            <h2 className="text-xl font-bold text-site-primary mb-3">{t.approachTitle}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {study.approach.map((step, i) => (<li key={i} className="text-site-text/80">{step}</li>))}
            </ul>
          </section>
          <section className="mb-10">
            <h2 className="text-xl font-bold text-site-primary mb-3">{t.toolsTitle}</h2>
            <div className="flex flex-wrap gap-2">
              {study.tools.map((tool) => (<span key={tool} className="px-3 py-1 rounded-full text-sm bg-site-primary/10 text-site-primary font-medium">{tool}</span>))}
            </div>
          </section>
          <section className="mb-10">
            <h2 className="text-xl font-bold text-site-primary mb-3">{t.outcomeTitle}</h2>
            <ul className="space-y-3">
              {study.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  <span className="text-site-text/80">{outcome}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <Footer locale="fr" />
    </div>
  );
}
