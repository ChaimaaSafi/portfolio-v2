"use client"
import React, { useState } from "react";
import img_1 from "@/public/assets/projects/portfolly.png";
import img_2 from "@/public/assets/projects/day_dhikr.png";
import img_3 from "@/public/assets/projects/custom_code.png";
import img_4 from "@/public/assets/projects/obytes.png";
import WorkRow from "@/components/core/WorkRow";

type Props = {};

const WORKS = [
  {
    name: "Portfolly",
    description:
      "As a proud member of the Portfolly team, I contributed to the development of an innovative website that empowers developers to effortlessly create their professional portfolios with just one click. Portfolly is a game-changing platform that streamlines the portfolio-building process, saving valuable time and effort for developers of all levels.",
    link: "https://portfolly.io/",
    imgSrc: img_1,
  },
  {
    name: "Day Dhikr",
    description:
      "Your daily dose: Explore handpicked Quranic verses, Hadith, and Dhikr for daily reflection.",
    link: "https://www.daydhikr.us/",
    imgSrc: img_2,
  },
  {
    name: "Custom Code",
    description:
      "Your one-stop destination for beginner-friendly web development components, complete with full code examples. Build beautiful websites effortlessly!",
    link: "https://custom-code.vercel.app/",
    imgSrc: img_3,
  },
  {
    name: "Obytes",
    description: "Your Great Ideas, Our Execution!",
    link: "https://www.obytes.com/",
    imgSrc: img_4,
  },
];

function Works({}: Props) {
  const [link, setLink] = useState<string>("Portfolly");

  const links_variants = {
    active: { scale: 1.2, x: "25px" },
    inactive: { scale: 1, x: "0" },
  };
  return (
    <section
      className="flex flex-col pt-60 w-full"
    >
      <h2 className="text-2xl w-full capitalize font-semibold text-yellow-primary mb-5">
        My Work
      </h2>
      <div
        className="h-full flex flex-col"
      >
        {WORKS.map((props, index: number) => (
          <WorkRow key={index} {...props} className="py-8 border-b border-orange-300 last:border-b-0" />
        ))}
      </div>
    </section>
  );
}

export default Works;
