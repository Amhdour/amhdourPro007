"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export type EvidenceScreenshotItem = {
  id: string;
  title: string;
  repository: string;
  imageSrc?: string;
  caption: string;
  tags: readonly string[];
  evidenceHref?: string;
  evidenceLabel?: string;
};

export default function EvidenceScreenshotCard({
  item,
  onOpen,
}: {
  item: EvidenceScreenshotItem;
  onOpen?: (item: EvidenceScreenshotItem) => void;
}) {
  const [imageLoadFailed, setImageLoadFailed] = useState(false);
  const hasUsableImage = useMemo(() => Boolean(item.imageSrc) && !imageLoadFailed, [item.imageSrc, imageLoadFailed]);

  return (
    <article className="h-full rounded-lg border border-site-primary/20 bg-site-block p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-base font-semibold text-site-text leading-snug">{item.title}</h4>
        <span className="text-[11px] px-2 py-1 rounded-full bg-site-primary/10 text-site-primary font-semibold whitespace-nowrap">
          {item.repository}
        </span>
      </div>

      {hasUsableImage && (
        <button
          type="button"
          onClick={() => onOpen?.(item)}
          className="rounded-md border border-site-primary/15 overflow-hidden text-left"
          aria-label={`Open screenshot preview for ${item.title}`}
        >
          <div className="relative aspect-video w-full">
            <Image
              src={item.imageSrc!}
              alt={`${item.title} evidence screenshot`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageLoadFailed(true)}
            />
          </div>
        </button>
      )}

      <p className="text-sm text-site-muted leading-relaxed">{item.caption}</p>

      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="text-[11px] px-2 py-1 rounded-full bg-site-primary/10 text-site-primary font-semibold">
            {tag}
          </span>
        ))}
      </div>

      {item.evidenceHref && item.evidenceLabel && (
        <div className="mt-auto">
          <a href={item.evidenceHref} target={item.evidenceHref.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-site-primary hover:underline text-sm font-semibold">
            {item.evidenceLabel}
          </a>
        </div>
      )}
    </article>
  );
}
