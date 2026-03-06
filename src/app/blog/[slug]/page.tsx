import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), "src/content/blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return { data, content };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.data.title} | Ahmed Amhdour`,
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
  const contentDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-site-bg pt-[75px]">
        <div className="max-w-[800px] mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold text-site-text mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-site-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-site-bg pt-[75px]">
      <article className="max-w-[800px] mx-auto px-4 py-16">
        <Link
          href="/blog"
          className="text-site-primary hover:underline text-sm mb-8 inline-block"
        >
          ← Back to Blog
        </Link>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-site-text mb-2">
            {post.data.title}
          </h1>
          <p className="text-sm text-site-muted">
            {new Date(post.data.date).toLocaleDateString("en-US", {
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
