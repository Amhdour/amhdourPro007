import { dictionaries } from "@/lib/dictionaries";
import AssessmentQuiz from "@/components/AssessmentQuiz";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FrenchAssessmentPage() {
  return (
    <div className="text-site-text bg-site-bg">
      <Header locale="fr" />
      <main className="min-h-screen pt-[75px]">
        <div className="max-w-[900px] mx-auto px-4 py-16">
          <h1 className="text-4xl font-extrabold text-site-text mb-2">{dictionaries.fr.assessment.title}</h1>
          <p className="text-site-muted mb-10">{dictionaries.fr.assessment.subtitle}</p>
          <AssessmentQuiz texts={dictionaries.fr.assessment} />
        </div>
      </main>
      <Footer locale="fr" />
    </div>
  );
}
