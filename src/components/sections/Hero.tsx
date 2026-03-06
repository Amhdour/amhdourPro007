"use client";

import { useState, useEffect, useRef } from "react";
import LinkedInIcon from "@/components/icons/LinkedIn";
import GitHubIcon from "@/components/icons/GitHub";
import MailIcon from "@/components/icons/Mail";
import { Button } from "@/components/ui/button";
import { dictionaries } from "@/lib/dictionaries";
import ParticleBackground from "@/components/ParticleBackground";
import BookingModal from "@/components/BookingModal";

const SCRIBBLE_TIME_MS = 500;

function useScribbleText(text: string, intervalMs: number) {
  const [display, setDisplay] = useState(text);
  const valueRef = useRef(text);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const scribble = () => {
      if (valueRef.current !== text) {
        valueRef.current = text;
        setDisplay(text);
        timeoutRef.current = setTimeout(scribble, intervalMs);
        return;
      }
      const chars = [...text];
      const idx = Math.floor(Math.random() * chars.length);
      if (chars[idx] === " ") {
        scribble();
        return;
      }
      chars[idx] = String(Math.random() < 0.5 ? 0 : 1);
      valueRef.current = chars.join("");
      setDisplay(valueRef.current);
      timeoutRef.current = setTimeout(scribble, intervalMs);
    };

    if (intervalMs) {
      timeoutRef.current = setTimeout(scribble, intervalMs);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, intervalMs]);

  return display;
}

const CAL_URL = "https://cal.com/ahmed-amhdour-lvmydm";

export default function Hero({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const t = dictionaries[locale as keyof typeof dictionaries].hero;
  const bookingT = dictionaries[locale as keyof typeof dictionaries].booking;
  const displayHeading = useScribbleText(t.heading, SCRIBBLE_TIME_MS);
  const [showBooking, setShowBooking] = useState(false);

  return (
    <section className="w-full relative" id="home">
      <ParticleBackground />
      <div className="h-[75px]" />
      <main className="flex flex-col-reverse md:flex-row gap-8 pt-8 pb-16 px-4 md:px-8 md:max-w-[1200px] md:mx-auto items-center min-h-screen relative z-[1]">
        <div className="flex flex-col gap-4 text-center md:text-left md:self-center md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold hero-animate hero-delay-1">
            {displayHeading}
          </h1>
          <p className="text-lg md:text-xl hero-animate hero-delay-2">
            {t.bio}
          </p>
          <div className="flex flex-row gap-3 justify-center md:justify-start hero-animate hero-delay-3">
            <a
              href="https://www.linkedin.com/in/amhdour"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-site-primary transition-colors duration-300"
            >
              <LinkedInIcon className="w-9 h-9" />
            </a>
            <a
              href="https://github.com/Amhdour"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-site-primary transition-colors duration-300"
            >
              <GitHubIcon className="w-9 h-9" />
            </a>
            <a
              href="mailto:ahmedamhdour@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Mail"
              className="hover:text-site-primary transition-colors duration-300"
            >
              <MailIcon className="w-9 h-9" />
            </a>
          </div>
          <div className="flex flex-row gap-3 justify-center md:justify-start hero-animate hero-delay-3">
            <Button asChild className="bg-site-primary hover:bg-site-primary-light text-white font-semibold px-6 py-3">
              <a href="/Ahmed_Amhdour_CV.pdf" download>
                {t.downloadCv}
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-site-primary text-site-primary hover:bg-site-primary hover:text-white font-semibold px-6 py-3"
              onClick={() => setShowBooking(true)}
            >
              {t.bookConsultation}
            </Button>
          </div>
          <BookingModal
            isOpen={showBooking}
            onClose={() => setShowBooking(false)}
            calUrl={CAL_URL}
            title={bookingT.modalTitle}
            subtitle={bookingT.modalSubtitle}
          />
        </div>
        <div className="md:w-1/2 flex justify-center hero-animate-fade hero-delay-4">
          <div
            id="selfie"
            className="morph-image"
          />
        </div>
      </main>
    </section>
  );
}
