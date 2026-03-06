"use client";

import { useState, useEffect } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  calUrl: string;
  title: string;
  subtitle: string;
}

export default function BookingModal({ isOpen, onClose, calUrl, title, subtitle }: BookingModalProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setLoaded(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[700px] bg-site-bg rounded-2xl shadow-2xl overflow-hidden border border-site-muted/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-site-muted/20">
          <div>
            <h3 className="text-lg font-bold text-site-text">{title}</h3>
            <p className="text-sm text-site-muted">{subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-site-muted hover:text-site-text transition-colors p-1"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="relative" style={{ height: "540px" }}>
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-site-bg">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-site-primary border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-site-muted">Loading calendar...</p>
              </div>
            </div>
          )}
          <iframe
            src={calUrl}
            className="w-full h-full border-0"
            onLoad={() => setLoaded(true)}
            title="Book a consultation"
          />
        </div>
      </div>
    </div>
  );
}
