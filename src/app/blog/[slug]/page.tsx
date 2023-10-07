"use client";

import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";


export default function Page({ params }: any) {
  const post = allPosts[0];
  const MDXContent = useMDXComponent(post?.body?.code);

  return (
    <section className="w-full ">
      <div  className="relative mx-auto flex max-w-[1250px] flex-col pt-40  lg:mt-10 lg:py-20">
      <h1 className="mx-5 py-5 text-center text-2xl font-medium  lg:m-6 lg:p-10 lg:text-4xl">
          {post.title}
        </h1>
        <div className="mx-2 lg:h-auto lg:flex-1">
          <Image
            src={post.hero as string}
            alt={post.title}
            width="1200"
            height="800"
            className="rounded-lg shadow-lg object-cover"
            priority
            blurDataURL={`/_next/image?url=${post.hero}&w=16&q=1`}
            placeholder="blur"
          />
        </div>
      </div>
      <div
        className="prose max-w-[1250px] mx-auto mt-7 mb-10 flex flex-col space-y-2 justify-between md:mb-24 lg:flex-row lg:space-x-5"
        style={{ wordBreak: "break-word" }}
      >
        <div
          className="w-full flex  flex-col space-y-4 px-5 "
          style={{ wordBreak: "break-word" }}
        >
          <MDXContent />
        </div>
      </div>
    </section>
  );
}
