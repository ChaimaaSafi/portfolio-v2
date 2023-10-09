"use client"
import { motion } from "framer-motion";
import React from "react";
import Image from 'next/image';
import Link from "next/link";
import { allPosts } from "contentlayer/generated";

function Blogs() {
  const posts = allPosts;
  return (
    <div className="px-1 py-10 md:py-36">
      <h2 className="text-2xl w-full capitalize font-semibold text-yellow-primary mb-5">
        Blogs
      </h2>
      <motion.div className="flex justify-center mt-10">
          <motion.div className="flex flex-col space-y-3 md:space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-y-8">
            {allPosts.map(({ hero, title, description, _raw }, index) => (
              <motion.div key={index} className={`${index % 2 === 0 && index != 0 && "lg:ml-20"} lg:w-fit`}>
                <Link
                href={`blog/${_raw.flattenedPath}`}
                target="_blank"
                  className="pb-5 lg:w-[500px] flex flex-col rounded-md h-full bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]
                   from-yellow-500 via-purple-500 to-blue-500 shadow-lg shadow-gray-500"
                >
                  <div className="relative h-[300px] w-full rounded-md">
                    <Image
                      src={hero  as string}
                      alt={title}
                      priority
                      fill
                      className="md:object-cover rounded-md"
                    />{" "}
                  </div>
                  <h2 className="text-base md:text-lg font-medium text-blue-950 mt-8 px-3 w-full">
                    {title}
                  </h2>
                  <p className="text-xs md:text-base text-gray-100 mt-4 px-3 text-justify">
                    {description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
      </motion.div>
    </div>
  );
}

export default Blogs;
