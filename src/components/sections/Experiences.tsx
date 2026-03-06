import ExternalLinkIcon from "@/components/icons/ExternalLink";
import ArrowRightIcon from "@/components/icons/ArrowRight";
import ScrollReveal from "@/components/ScrollReveal";
import { dictionaries } from "@/lib/dictionaries";

interface ExperienceItem {
  date: string;
  title: string;
  org: string;
  orgLink?: string;
  description?: string;
  items?: readonly string[];
  certLink?: string;
}

function ExperienceCard({ item, certificatesLabel }: { item: ExperienceItem; certificatesLabel: string }) {
  return (
    <div className="card flex flex-col rounded-lg w-full group overflow-y-hidden p-4 border border-site-primary bg-site-block">
      <div className="flex flex-col gap-2">
        <div className="text-white bg-site-primary rounded-full py-1 px-3 w-max">
          <span className="text-sm">{item.date}</span>
        </div>
        <h3 className="text-3xl font-semibold">{item.title}</h3>
        {item.orgLink ? (
          <a
            className="text-site-primary w-max hover:text-site-primary-light"
            href={item.orgLink}
            target="_blank"
            rel="noreferrer"
          >
            {item.org} <ExternalLinkIcon />
          </a>
        ) : (
          <span className="text-site-primary">{item.org}</span>
        )}
        {item.description && <p>{item.description}</p>}
        {item.items && (
          <ul className="list-disc pl-5">
            {item.items.map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        )}
        {item.certLink && (
          <a
            className="text-site-primary w-max hover:text-site-primary-light"
            href={item.certLink}
            target="_blank"
            rel="noreferrer"
          >
            {certificatesLabel} <ArrowRightIcon />
          </a>
        )}
      </div>
    </div>
  );
}

function ExperienceGroup({
  sectionTitle,
  subtitle,
  items,
  certificatesLabel,
}: {
  sectionTitle: string;
  subtitle: string;
  items: readonly ExperienceItem[];
  certificatesLabel: string;
}) {
  return (
    <section>
      <ScrollReveal animation="fade-up">
        <div>
          <h2 className="text-lg uppercase text-site-primary font-bold mx-auto pb-2 w-max">
            {sectionTitle}
          </h2>
          <h3 className="text-2xl font-bold mx-auto pb-2 text-center">{subtitle}</h3>
        </div>
      </ScrollReveal>
      <div className="flex flex-row flex-wrap gap-8 justify-center mt-4">
        {items.map((item, i) => (
          <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
            <ExperienceCard item={item} certificatesLabel={certificatesLabel} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export default function Experiences({ locale = "en" }: { locale?: "en" | "ar" | "fr" | "de" }) {
  const t = dictionaries[locale].experiences;

  return (
    <section className="w-full" id="experiences">
      <main className="flex flex-col gap-8 py-32 px-4 md:px-8 md:max-w-[1200px] md:mx-auto">
        <ExperienceGroup
          sectionTitle={t.workTitle}
          subtitle={t.workSubtitle}
          items={t.workExperience}
          certificatesLabel={t.certificatesLabel}
        />
        <ExperienceGroup
          sectionTitle={t.workTitle}
          subtitle={t.coursesSubtitle}
          items={t.courses}
          certificatesLabel={t.certificatesLabel}
        />
      </main>
    </section>
  );
}
