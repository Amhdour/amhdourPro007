import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogListClient from "@/components/BlogListClient";
import { dictionaries } from "@/lib/dictionaries";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
}

function getBlogPosts(): BlogPost[] {
  const contentDir = path.join(process.cwd(), dictionaries.fr.blog.contentDir);
  if (!fs.existsSync(contentDir)) return [];
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

export default function FrenchBlogPage() {
  const posts = getBlogPosts();
  const t = dictionaries.fr.blog;

  return (
    <main className="min-h-screen bg-site-bg pt-[75px]">
      <div className="max-w-[900px] mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold text-site-text mb-2">{t.title}</h1>
        <p className="text-site-muted mb-10">{t.subtitle}</p>
        <BlogListClient
          posts={posts}
          labels={{
            searchPlaceholder: "Rechercher des articles...",
            filterAll: "Tous",
            noResults: "Aucun article trouvé.",
          }}
          blogPrefix={t.basePath}
          dateLocale={t.dateLocale}
        />
      </div>
    </main>
  );
}
