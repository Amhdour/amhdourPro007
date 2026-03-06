import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogListClient from "@/components/BlogListClient";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
}

function getBlogPosts(): BlogPost[] {
  const contentDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const filePath = path.join(contentDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(".mdx", ""),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author,
      tags: data.tags || [],
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="min-h-screen bg-site-bg pt-[75px]">
      <div className="max-w-[900px] mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-site-text mb-2">Blog</h1>
        <p className="text-site-muted mb-10">
          Insights on AI Trust &amp; Security Readiness — from RAG pipelines to autonomous agents.
        </p>
        <BlogListClient
          posts={posts}
          labels={{
            searchPlaceholder: "Search articles...",
            filterAll: "All",
            noResults: "No articles found.",
          }}
          blogPrefix="/blog"
          dateLocale="en-US"
        />
      </div>
    </main>
  );
}
