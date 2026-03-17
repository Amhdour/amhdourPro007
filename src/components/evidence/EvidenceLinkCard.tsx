import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type EvidenceLinkCardProps = {
  title: string;
  description: string;
  href: string;
  type: string;
  placeholder?: boolean;
};

export default function EvidenceLinkCard({ title, description, href, type, placeholder = false }: EvidenceLinkCardProps) {
  const isAnchor = href.startsWith("#");

  return (
    <Card className="bg-site-block border-site-primary/20 h-full">
      <CardHeader>
        <p className="text-xs uppercase tracking-wide text-site-primary font-semibold">{type}</p>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p className="text-sm text-site-muted">{description}</p>
        {isAnchor ? (
          <span className="text-sm font-semibold text-site-muted">Placeholder link</span>
        ) : (
          <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-site-primary hover:underline"
          >
            Open evidence
          </Link>
        )}
        {placeholder && <p className="text-xs text-amber-600">Placeholder — replace with public evidence URL.</p>}
      </CardContent>
    </Card>
  );
}
