"use client";

import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { type allPosts } from "contentlayer/generated";
import {
  FacebookShare,
  LinkedinShare,
  TwitterShare,
} from "@/components/core/ShareTo";

type Post = (typeof allPosts)[number];

type BlogPostContentProps = {
  post: Post;
};

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <section className="w-full ">
      <div className="relative mx-auto flex max-w-[1250px] flex-col pt-10  lg:py-5">
        <h1 className="mx-5 py-5 text-center text-2xl font-medium  lg:m-6 lg:p-10 lg:text-4xl">
          {post.title}
        </h1>
        {post.hero ? (
          <div className="mx-2 lg:h-auto lg:flex-1">
            <Image
              src={post.hero}
              alt={post.title || ""}
              width="1200"
              height="800"
              className="rounded-lg object-cover shadow-lg"
              priority
              blurDataURL={`/_next/image?url=${post.hero}&w=16&q=1`}
              placeholder="blur"
            />
          </div>
        ) : null}
      </div>
      <div
        className="prose mx-auto mt-7 mb-10 flex max-w-[1250px] flex-col justify-between space-y-2 md:mb-24 lg:flex-row lg:space-x-5"
        style={{ wordBreak: "break-word" }}
      >
        <div
          className="flex w-full flex-col space-y-4 px-5 "
          style={{ wordBreak: "break-word" }}
        >
          <MDXContent />
        </div>
      </div>
      <div className="my-10 flex flex-col items-center justify-center space-y-5 lg:mt-10">
        <span className="text-lg leading-6 text-gray-900">Share article</span>
        <div className="mt-5 flex space-x-5">
          <TwitterShare slug={post.slug} title={post.title} />
          <FacebookShare slug={post.slug} title={post.title} />
          <LinkedinShare slug={post.slug} />
        </div>
      </div>
    </section>
  );
}
