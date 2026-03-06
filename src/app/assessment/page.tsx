import { dictionaries } from "@/lib/dictionaries";
import AssessmentQuiz from "@/components/AssessmentQuiz";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Security Readiness Assessment | Ahmed Amhdour",
  description: "Evaluate your team's AI security posture with this quick readiness assessment.",
};

export default function AssessmentPage() {
  return (
    <div className="text-site-text bg-site-bg">
      <Header locale="en" />
      <main className="min-h-screen pt-[75px]">
        <div className="max-w-[900px] mx-auto px-4 py-16">
          <h1 className="text-4xl font-extrabold text-site-text mb-2">{dictionaries.en.assessment.title}</h1>
          <p className="text-site-muted mb-10">{dictionaries.en.assessment.subtitle}</p>
          <AssessmentQuiz texts={dictionaries.en.assessment} />
        </div>
      </main>
      <Footer locale="en" />
    </div>
  );
}
