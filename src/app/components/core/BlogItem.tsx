import { StaticImageData } from "next/image";
import Image from 'next/image';

import Link from "next/link";
import React from "react";

type TBlog = {
  hero: string | any ;
  title: string;
  description: string;
  link: string;
  style?: string;
};

const BlogItem = ({ title, hero, description, link, style = 'non-full' }: TBlog) => {
  return (
    <div className="w-full">
      <Link
        href={`blog/${link}`}
        target="_blank"
        className={`flex  rounded-md h-full bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]
        from-yellow-500 via-purple-500 to-blue-500 shadow-lg shadow-gray-500 
        ${style === 'full' ? "md:flex-row justify-between space-x-3 items-center flex-col md:pb-0 pb-5": "flex-col pb-5 "}
        `}>
        <div className={`relative h-[300px] w-full rounded-md`}>
          <Image
            src={hero as string}
            alt={title}
            priority
            fill
            className="md:object-cover rounded-md"
          />
        </div>
        <div className={`md:px-5 px-2 ${style === "full" && "w-full md:w-[700px]"}`}>
            <h2 className="text-base md:text-lg font-medium text-blue-950 mt-8  w-full">
              {title}
            </h2>
            <p className="text-xs md:text-base text-gray-100 mt-4 text-justify">
              {description}
            </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
