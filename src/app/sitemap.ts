import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://amhdour.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/secure-support-agent-starter-kit",
    "/blog",
    "/resources",
    "/assessment",
    "/ar",
    "/fr",
    "/de",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/secure-support-agent-starter-kit" ? "weekly" : "monthly",
    priority: route === "/secure-support-agent-starter-kit" || route === "/" ? 1 : 0.7,
  }));
}
