import { dictionaries } from "@/lib/dictionaries";
import AssessmentQuiz from "@/components/AssessmentQuiz";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GermanAssessmentPage() {
  return (
    <div className="text-site-text bg-site-bg">
      <Header locale="de" />
      <main className="min-h-screen pt-[75px]">
        <div className="max-w-[900px] mx-auto px-4 py-16">
          <h1 className="text-4xl font-extrabold text-site-text mb-2">{dictionaries.de.assessment.title}</h1>
          <p className="text-site-muted mb-10">{dictionaries.de.assessment.subtitle}</p>
          <AssessmentQuiz texts={dictionaries.de.assessment} />
        </div>
      </main>
      <Footer locale="de" />
    </div>
  );
}
