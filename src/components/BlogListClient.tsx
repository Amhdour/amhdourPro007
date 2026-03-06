"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
}

interface BlogListClientProps {
  posts: BlogPost[];
  labels: {
    searchPlaceholder: string;
    filterAll: string;
    noResults: string;
  };
  blogPrefix: string;
  dateLocale: string;
}

export default function BlogListClient({ posts, labels, blogPrefix, dateLocale }: BlogListClientProps) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((p) => p.tags?.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, [posts]);

  const filtered = useMemo(() => {
    let result = posts;
    if (activeTag) {
      result = result.filter((p) => p.tags?.includes(activeTag));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)
      );
    }
    return result;
  }, [posts, activeTag, search]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="text"
          placeholder={labels.searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-site-block border-site-muted/30 flex-1"
        />
      </div>
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeTag === null
                ? "bg-site-primary text-white"
                : "bg-site-block text-site-muted hover:text-site-primary border border-site-muted/30"
            }`}
          >
            {labels.filterAll}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeTag === tag
                  ? "bg-site-primary text-white"
                  : "bg-site-block text-site-muted hover:text-site-primary border border-site-muted/30"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
      {filtered.length === 0 ? (
        <p className="text-site-muted text-center py-8">{labels.noResults}</p>
      ) : (
        filtered.map((post) => (
          <Link key={post.slug} href={`${blogPrefix}/${post.slug}`}>
            <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer border-site-primary/20 hover:border-site-primary">
              <CardHeader>
                <CardTitle className="text-xl text-site-text hover:text-site-primary transition-colors duration-300">
                  {post.title}
                </CardTitle>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <p className="text-sm text-site-muted">
                    {new Date(post.date).toLocaleDateString(dateLocale, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    · {post.author}
                  </p>
                  {post.tags?.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-site-primary/10 text-site-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-site-text/80">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))
      )}
    </div>
  );
}
