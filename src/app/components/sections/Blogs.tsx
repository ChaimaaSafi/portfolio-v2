"use client";
import React from "react";

import { allPosts } from "contentlayer/generated";
import BlogItem from "@/components/core/BlogItem";
import Reveal from "../Reveal";

function Blogs() {
  const posts = allPosts;
  return (
    <section className="px-1 py-10 md:py-36">
      <Reveal>
        <h2 className="text-2xl w-full capitalize font-semibold text-yellow-primary mb-5">
          Blogs
        </h2>
      </Reveal>

      <div className="mt-10 flex flex-col space-y-8">
        <Reveal>
          <div className="flex md:flex-row flex-col  space-y-3 md:space-y-0 md:justify-between md:space-x-5">
            <BlogItem
              hero={posts[0]?.hero}
              title={posts[0].title}
              description={posts[0].description}
              _raw={posts[0]._raw.flattenedPath}
            />
            <BlogItem
              hero={posts[1]?.hero}
              title={posts[1].title}
              description={posts[1].description}
              _raw={posts[1]._raw.flattenedPath}
            />
          </div>
        </Reveal>
        <Reveal>
          <div className="w-full">
            <BlogItem
              hero={posts[2]?.hero}
              title={posts[2].title}
              description={posts[2].description}
              _raw={posts[2]._raw.flattenedPath}
              style="full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Blogs;
