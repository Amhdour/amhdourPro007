import Logo from "./Logo";
import LinkedInIcon from "@/components/icons/LinkedIn";
import GitHubIcon from "@/components/icons/GitHub";
import MailIcon from "@/components/icons/Mail";
import { dictionaries } from "@/lib/dictionaries";

export default function Footer({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const dict = dictionaries[locale].footer;
  const headerDict = dictionaries[locale].header;
  const blogHref = locale === "ar" ? "/ar/blog" : locale === "fr" ? "/fr/blog" : locale === "de" ? "/de/blog" : "/blog";
  const menuLinks = headerDict.nav.filter((link) => link.href !== blogHref);
  const evidenceHref = "/evidence/rag-security-platform";
  const evidenceLabel = locale === "ar" ? "حزمة الأدلة" : locale === "fr" ? "Dossier de preuves" : locale === "de" ? "Evidenz" : "Evidence";
  const menuLinksWithEvidence = menuLinks.some((link) => link.href === evidenceHref)
    ? menuLinks
    : [...menuLinks, { href: evidenceHref, label: evidenceLabel }];
  const homeHref = locale === "ar" ? "/ar" : locale === "fr" ? "/fr" : locale === "de" ? "/de" : "/";

  return (
    <footer className="w-full bg-[#2d2e32] dark:bg-[#0b1120] text-white">
      <main className="flex flex-col md:flex-row gap-8 py-16 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        <div className="flex flex-col gap-4 md:w-1/3">
          <a href={homeHref} className="text-2xl font-extrabold flex items-center gap-2">
            <Logo />
            {headerDict.name}
          </a>
          <div className="flex flex-row gap-3 text-xl">
            <a
              href="https://linkedin.com/in/amhdour"
              target="_blank"
              rel="noreferrer"
              className="hover:text-site-primary transition-colors duration-300"
            >
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Amhdour"
              target="_blank"
              rel="noreferrer"
              className="hover:text-site-primary transition-colors duration-300"
            >
              <GitHubIcon className="w-6 h-6" />
            </a>
            <a
              href="mailto:ahmedamhdour@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-site-primary transition-colors duration-300"
            >
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:w-1/3">
          <h4 className="font-bold text-lg">{dict.blogTitle}</h4>
          {dict.blogLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2 md:w-1/3">
          <h4 className="font-bold text-lg">{dict.menuTitle}</h4>
          {menuLinksWithEvidence.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </main>
      <div className="border-t border-white/20 py-6 text-center text-sm text-white/50 flex flex-col sm:flex-row items-center justify-center gap-2">
        <span>{dict.copyright}</span>
        <a
          href="/blog/rss.xml"
          className="text-white/50 hover:text-site-primary transition-colors duration-300"
          title="RSS Feed"
        >
          RSS
        </a>
      </div>
    </footer>
  );
}
