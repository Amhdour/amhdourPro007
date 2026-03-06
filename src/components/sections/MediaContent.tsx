"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { dictionaries } from "@/lib/dictionaries";

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function VideoModal({ embedUrl, onClose }: { embedUrl: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[900px] aspect-video rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-site-primary transition-colors text-sm font-medium flex items-center gap-1 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          Close
        </button>
        <iframe
          src={embedUrl}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video player"
        />
      </div>
    </div>
  );
}

type MediaItem = {
  readonly title: string;
  readonly description: string;
  readonly type: string;
  readonly duration: string;
  readonly date: string;
  readonly thumbnail: string;
  readonly embedUrl: string;
  readonly tags: readonly string[];
};

function MediaCard({ item, watchLabel }: { item: MediaItem; watchLabel: string }) {
  const [showModal, setShowModal] = useState(false);

  const typeColors: Record<string, string> = {
    talk: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    webinar: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    tutorial: "bg-green-500/10 text-green-600 dark:text-green-400",
    podcast: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  };

  return (
    <>
      <div className="group rounded-xl overflow-hidden bg-site-block shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-site-primary/20">
        <div
          className="relative aspect-video cursor-pointer overflow-hidden"
          onClick={() => setShowModal(true)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-site-primary/20 via-site-primary/10 to-transparent flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-site-primary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                <line x1="7" y1="2" x2="7" y2="22" />
                <line x1="17" y1="2" x2="17" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="2" y1="7" x2="7" y2="7" />
                <line x1="2" y1="17" x2="7" y2="17" />
                <line x1="17" y1="7" x2="22" y2="7" />
                <line x1="17" y1="17" x2="22" y2="17" />
              </svg>
              <span className="text-xs text-site-primary/60 font-medium">{item.title}</span>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
            <div className="w-14 h-14 rounded-full bg-site-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <PlayIcon className="w-7 h-7 text-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
            {item.duration}
          </div>
        </div>

        <div className="p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${typeColors[item.type] || "bg-gray-500/10 text-gray-600"}`}>
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </span>
            <span className="text-xs text-site-muted">{item.date}</span>
          </div>
          <h4 className="font-semibold text-site-text leading-snug">{item.title}</h4>
          <p className="text-sm text-site-muted leading-relaxed line-clamp-2">{item.description}</p>
          <div className="flex flex-wrap gap-1 mt-1">
            {item.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-site-primary/10 text-site-primary font-medium">
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="text-site-primary hover:underline text-sm font-semibold mt-1 self-start flex items-center gap-1"
          >
            <PlayIcon className="w-4 h-4" />
            {watchLabel}
          </button>
        </div>
      </div>

      {showModal && (
        <VideoModal embedUrl={item.embedUrl} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default function MediaContent({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const t = dictionaries[locale].media;

  return (
    <section className="w-full bg-site-section" id="media">
      <main className="flex flex-col gap-8 py-32 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="text-center">
            <h2 className="text-lg uppercase text-site-primary font-bold mx-auto pb-2 w-max">
              {t.sectionTitle}
            </h2>
            <h3 className="text-2xl font-bold mx-auto pb-2">
              {t.heading}
            </h3>
            <p className="text-site-muted max-w-[600px] mx-auto">
              {t.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, index) => (
            <ScrollReveal key={item.title} animation="fade-up" delay={index * 100}>
              <MediaCard item={item} watchLabel={t.watchLabel} />
            </ScrollReveal>
          ))}
        </div>
      </main>
    </section>
  );
}
