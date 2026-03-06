"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface Question {
  readonly question: string;
  readonly options: readonly { readonly label: string; readonly score: number }[];
}

interface AssessmentTexts {
  readonly title: string;
  readonly subtitle: string;
  readonly nextButton: string;
  readonly prevButton: string;
  readonly submitButton: string;
  readonly resultTitle: string;
  readonly scoreLabel: string;
  readonly lowLabel: string;
  readonly mediumLabel: string;
  readonly highLabel: string;
  readonly lowDescription: string;
  readonly mediumDescription: string;
  readonly highDescription: string;
  readonly emailPlaceholder: string;
  readonly emailCta: string;
  readonly restartButton: string;
  readonly questionOf: string;
  readonly questions: readonly Question[];
}

export default function AssessmentQuiz({ texts }: { texts: AssessmentTexts }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");

  const totalQuestions = texts.questions.length;
  const maxScore = totalQuestions * 3;

  function selectAnswer(score: number) {
    const newAnswers = [...answers];
    newAnswers[currentQ] = score;
    setAnswers(newAnswers);
  }

  function next() {
    if (currentQ < totalQuestions - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResults(true);
    }
  }

  function prev() {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  }

  function restart() {
    setCurrentQ(0);
    setAnswers([]);
    setShowResults(false);
    setEmail("");
  }

  const totalScore = answers.reduce((a, b) => a + (b || 0), 0);
  const percentage = Math.round((totalScore / maxScore) * 100);

  let level: "low" | "medium" | "high";
  if (percentage < 40) level = "low";
  else if (percentage < 70) level = "medium";
  else level = "high";

  const levelColors = {
    low: "text-red-500",
    medium: "text-yellow-500",
    high: "text-green-500",
  };

  const levelBg = {
    low: "bg-red-500",
    medium: "bg-yellow-500",
    high: "bg-green-500",
  };

  if (showResults) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="border-site-primary/20 bg-site-block">
          <CardContent className="flex flex-col items-center gap-6 pt-6">
            <h2 className="text-2xl font-bold text-site-text">{texts.resultTitle}</h2>
            <div className="relative w-40 h-40">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" className="stroke-site-muted/20" strokeWidth="8" />
                <circle
                  cx="50" cy="50" r="42" fill="none"
                  className={`${levelBg[level].replace("bg-", "stroke-")}`}
                  strokeWidth="8"
                  strokeDasharray={`${percentage * 2.64} 264`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-3xl font-bold ${levelColors[level]}`}>{percentage}%</span>
                <span className="text-xs text-site-muted">{texts.scoreLabel}</span>
              </div>
            </div>
            <div className="text-center">
              <p className={`text-xl font-bold ${levelColors[level]}`}>
                {level === "low" ? texts.lowLabel : level === "medium" ? texts.mediumLabel : texts.highLabel}
              </p>
              <p className="text-site-muted mt-2 max-w-md">
                {level === "low" ? texts.lowDescription : level === "medium" ? texts.mediumDescription : texts.highDescription}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-4">
              <Input
                type="email"
                placeholder={texts.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-site-block border-site-muted/30 flex-1"
              />
              <Button className="bg-site-primary hover:bg-site-primary-light text-white font-semibold px-6">
                {texts.emailCta}
              </Button>
            </div>
            <Button variant="outline" onClick={restart} className="border-site-primary text-site-primary hover:bg-site-primary hover:text-white">
              {texts.restartButton}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const q = texts.questions[currentQ];

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="border-site-primary/20 bg-site-block">
        <CardContent className="flex flex-col gap-6 pt-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-site-muted font-medium">
              {texts.questionOf.replace("{current}", String(currentQ + 1)).replace("{total}", String(totalQuestions))}
            </span>
            <div className="flex gap-1">
              {texts.questions.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentQ ? "bg-site-primary" : i < currentQ && answers[i] !== undefined ? "bg-site-primary/40" : "bg-site-muted/20"
                  }`}
                />
              ))}
            </div>
          </div>
          <h3 className="text-xl font-bold text-site-text">{q.question}</h3>
          <div className="flex flex-col gap-3">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => selectAnswer(opt.score)}
                className={`text-left p-4 rounded-lg border transition-all duration-200 ${
                  answers[currentQ] === opt.score
                    ? "border-site-primary bg-site-primary/10 text-site-text"
                    : "border-site-muted/30 hover:border-site-primary/50 text-site-text/80"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={prev}
              disabled={currentQ === 0}
              className="border-site-muted/30 text-site-muted"
            >
              {texts.prevButton}
            </Button>
            <Button
              onClick={next}
              disabled={answers[currentQ] === undefined}
              className="bg-site-primary hover:bg-site-primary-light text-white font-semibold px-8"
            >
              {currentQ === totalQuestions - 1 ? texts.submitButton : texts.nextButton}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
