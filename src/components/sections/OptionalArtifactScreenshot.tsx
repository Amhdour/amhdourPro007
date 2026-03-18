import Image from "next/image";
import { cn } from "@/lib/utils";

export default function OptionalArtifactScreenshot({
  src,
  alt,
  wrapperClassName,
  imageClassName,
  sizes,
}: {
  src?: string | null;
  alt: string;
  wrapperClassName?: string;
  imageClassName?: string;
  sizes?: string;
}) {
  if (!src) {
    return null;
  }

  return (
    <div className={cn("relative w-full aspect-video rounded-md overflow-hidden border border-site-primary/20", wrapperClassName)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("object-cover", imageClassName)}
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
      />
    </div>
  );
}
