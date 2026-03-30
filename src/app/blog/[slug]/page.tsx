import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import BlogPostContent from "./BlogPostContent";

export function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
