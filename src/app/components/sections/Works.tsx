"use client";
import React, { useState } from "react";
import img_1 from "@/public/assets/projects/portfolly.png";
import img_2 from "@/public/assets/projects/day_dhikr.png";
import img_3 from "@/public/assets/projects/custom_code.png";
import img_4 from "@/public/assets/projects/obytes.png";
import WorkRow from "@/components/core/WorkRow";
import Reveal from "../Reveal";

type Props = {};

const WORKS = [
  {
    name: "Portfolly",
    description:
      "Portfolly is a game-changing platform that streamlines the portfolio-building process, saving valuable time and effort for developers of all levels. Let's Create Yours",
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
  return (
    <section className="flex flex-col pt-10 md:pt-40 w-full">
      <Reveal>
        <h2 className="text-2xl w-full capitalize font-semibold text-yellow-primary mb-5">
          My Work
        </h2>
      </Reveal>

      <div className="h-full flex flex-col">
        {WORKS.map((props, index: number) => (
          <Reveal key={index}>
            <WorkRow
              {...props}
              className="py-8 border-b border-orange-300 last:border-b-0"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Works;
