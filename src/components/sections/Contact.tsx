"use client";

import { useState } from "react";
import LinkedInIcon from "@/components/icons/LinkedIn";
import GitHubIcon from "@/components/icons/GitHub";
import MailIcon from "@/components/icons/Mail";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { submitContactForm } from "@/app/actions/contact";
import ScrollReveal from "@/components/ScrollReveal";
import BookingModal from "@/components/BookingModal";
import { dictionaries } from "@/lib/dictionaries";

const CAL_URL = "https://cal.com/ahmed-amhdour-lvmydm";

export default function Contact({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const t = dictionaries[locale].contact;
  const bookingT = dictionaries[locale].booking;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showBooking, setShowBooking] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMessage(result.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <section className="w-full bg-site-section" id="contact">
      <main className="flex flex-col gap-8 py-32 px-4 md:px-8 md:max-w-[1200px] md:mx-auto items-center">
        <ScrollReveal animation="fade-up">
          <div className="text-center">
            <h2 className="text-lg uppercase text-site-primary font-bold mx-auto pb-2 w-max">
              {t.sectionTitle}
            </h2>
            <h3 className="text-2xl font-bold mx-auto pb-2">
              {t.heading}
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
        <div className="flex flex-col md:flex-row gap-12 w-full max-w-[900px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 flex-1"
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">{t.nameLabel}</Label>
              <Input
                id="name"
                name="name"
                placeholder={t.namePlaceholder}
                required
                className="bg-site-block border-site-muted/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">{t.phoneLabel}</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder={t.phonePlaceholder}
                className="bg-site-block border-site-muted/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">{t.emailLabel}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t.emailPlaceholder}
                required
                className="bg-site-block border-site-muted/30"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">{t.messageLabel}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t.messagePlaceholder}
                required
                rows={5}
                className="bg-site-block border-site-muted/30"
              />
            </div>
            <Button
              type="submit"
              disabled={status === "submitting"}
              className="bg-site-primary hover:bg-site-primary/90 text-white w-full md:w-auto md:self-start"
            >
              {status === "submitting" ? t.sendingButton : t.sendButton}
            </Button>

            {status === "success" && (
              <p className="text-green-600 font-medium text-sm">
                {t.successMessage}
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 font-medium text-sm">
                {errorMessage}
              </p>
            )}
          </form>

          <div className="flex flex-col gap-6 justify-center items-center md:items-start">
            <p className="text-sm text-muted-foreground">{t.orReachOut}</p>
            <a
              href="https://linkedin.com/in/amhdour"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center gap-3 text-site-text hover:text-site-primary transition-colors duration-300"
            >
              <span className="text-4xl text-site-primary">
                <LinkedInIcon className="w-10 h-10" />
              </span>
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Amhdour"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center gap-3 text-site-text hover:text-site-primary transition-colors duration-300"
            >
              <span className="text-4xl text-site-primary">
                <GitHubIcon className="w-10 h-10" />
              </span>
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="mailto:ahmedamhdour@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center gap-3 text-site-text hover:text-site-primary transition-colors duration-300"
            >
              <span className="text-4xl text-site-primary">
                <MailIcon className="w-10 h-10" />
              </span>
              <span className="font-medium">Mail</span>
            </a>

            <button
              onClick={() => setShowBooking(true)}
              className="block mt-4 p-4 rounded-lg bg-site-primary/5 border border-site-primary/20 hover:bg-site-primary/10 transition-colors duration-300 text-left w-full"
            >
              <p className="font-semibold text-site-primary mb-1">{t.bookConsultation}</p>
              <p className="text-sm text-site-muted">{t.bookDescription}</p>
            </button>
            <BookingModal
              isOpen={showBooking}
              onClose={() => setShowBooking(false)}
              calUrl={CAL_URL}
              title={bookingT.modalTitle}
              subtitle={bookingT.modalSubtitle}
            />
          </div>
        </div>
        </ScrollReveal>
      </main>
    </section>
  );
}
