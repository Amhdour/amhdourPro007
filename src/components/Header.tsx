"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Logo from "./Logo";
import { dictionaries } from "@/lib/dictionaries";

const localeLabels: Record<string, string> = {
  en: "EN",
  ar: "ع",
  fr: "FR",
  de: "DE",
};

export default function Header({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const dict = dictionaries[locale].header;
  const navLinks = dict.nav;

  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.filter((l) => l.href.includes("#")).map((l) => l.href.replace(/.*#/, ""));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const homeHref = locale === "ar" ? "/ar" : locale === "fr" ? "/fr" : locale === "de" ? "/de" : "/";

  const langDropdown = (
    <div ref={langRef} className="relative">
      <button
        onClick={() => setLangOpen(!langOpen)}
        className="px-2 py-1 rounded-md border border-site-primary text-site-primary hover:bg-site-primary hover:text-white transition-colors duration-300 text-sm font-bold flex items-center gap-1"
        aria-label="Switch language"
      >
        {localeLabels[locale]}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      {langOpen && (
        <div className="absolute top-full right-0 mt-1 bg-site-bg border border-site-primary/30 rounded-md shadow-lg overflow-hidden z-50 min-w-[80px]">
          {dict.langSwitches.map((ls: { href: string; label: string }) => (
            <a
              key={ls.href}
              href={ls.href}
              className="block px-4 py-2 text-sm font-bold text-site-text hover:bg-site-primary hover:text-white transition-colors duration-200 text-center"
            >
              {ls.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="flex flex-row gap-2 md:gap-4 bg-site-bg border-b border-site-primary p-4 justify-between fixed w-full h-[75px] z-10">
      <a href={homeHref} className="text-4xl font-extrabold cursor-pointer flex items-center">
        <Logo />
        <span className="text-xl md:text-4xl whitespace-nowrap font-extrabold">{dict.name}</span>
      </a>

      <nav className="hidden lg:flex flex-row items-center gap-4 text-sm font-medium">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`hover:text-site-primary transition-colors duration-300 whitespace-nowrap ${
              activeSection === link.href.replace(/.*#/, "")
                ? "text-site-primary border-b-[3px] border-site-primary"
                : ""
            }`}
          >
            {link.label}
          </a>
        ))}
        {langDropdown}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md hover:bg-site-section transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        )}
      </nav>

      <div className="lg:hidden flex items-center gap-2">
        {langDropdown}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md hover:bg-site-section transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        )}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-site-text focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          id="menu"
          className="active absolute top-[75px] right-0 bg-site-bg shadow-lg lg:hidden"
        >
          <ul className="flex flex-col border-b-[3px] border-site-primary px-4 w-full min-[480px]:border-l-[3px] min-[480px]:w-[200px]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 hover:text-site-primary transition-colors duration-300 ${
                    activeSection === link.href.replace(/.*#/, "")
                      ? "text-site-primary border-b-[3px] border-site-primary"
                      : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
