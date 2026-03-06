import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { Metadata } from "next";
import { dictionaries } from "@/lib/dictionaries";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const t = dictionaries.ar.blog;

function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), t.contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return { data, content };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: t.postNotFound };
  return {
    title: `${post.data.title} | أحمد امحدور`,
    description: post.data.excerpt,
    openGraph: {
      title: post.data.title,
      description: post.data.excerpt,
      type: "article",
      authors: [post.data.author],
    },
  };
}

export function generateStaticParams() {
  const contentDir = path.join(process.cwd(), t.contentDir);
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default async function ArabicBlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-site-bg pt-[75px]">
        <div className="max-w-[800px] mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold text-site-text mb-4">{t.postNotFound}</h1>
          <Link href={t.basePath} className="text-site-primary hover:underline">
            {t.backToBlog}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-site-bg pt-[75px]">
      <article className="max-w-[800px] mx-auto px-4 py-16">
        <Link
          href={t.basePath}
          className="text-site-primary hover:underline text-sm mb-8 inline-block"
        >
          {t.backToBlog}
        </Link>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-site-text mb-2">
            {post.data.title}
          </h1>
          <p className="text-sm text-site-muted">
            {new Date(post.data.date).toLocaleDateString(t.dateLocale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.data.author}
          </p>
        </header>
        <div className="prose prose-lg max-w-none prose-headings:text-site-text prose-headings:font-bold prose-p:text-site-text/80 prose-a:text-site-primary prose-strong:text-site-text prose-li:text-site-text/80">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
