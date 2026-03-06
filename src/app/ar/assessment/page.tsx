import { dictionaries } from "@/lib/dictionaries";
import AssessmentQuiz from "@/components/AssessmentQuiz";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ArabicAssessmentPage() {
  return (
    <div className="text-site-text bg-site-bg">
      <Header locale="ar" />
      <main className="min-h-screen pt-[75px]">
        <div className="max-w-[900px] mx-auto px-4 py-16">
          <h1 className="text-4xl font-extrabold text-site-text mb-2">{dictionaries.ar.assessment.title}</h1>
          <p className="text-site-muted mb-10">{dictionaries.ar.assessment.subtitle}</p>
          <AssessmentQuiz texts={dictionaries.ar.assessment} />
        </div>
      </main>
      <Footer locale="ar" />
    </div>
  );
}
