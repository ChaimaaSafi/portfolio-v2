import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

const scrollVariants = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  show: {
    opacity: 1,
    height: "100vh",
    transition: {
      duration: 0.75,
    },
  },
  hide: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.75,
    },
  },
};
function About() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "start end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0vh", "-50vh", "-100vh"]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.2]);
  const scaleImg = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.2]);
  return (
    <motion.section className="bg-black-primary h-screen text-white" id="about">
      <motion.div
        style={{ y, scale, opacity }}
        ref={targetRef}
        className="max-w-[1400px] mx-auto h-full px-3 flex justify-between space-x-3  items-center"
      >
        <div className="w-3/5 text-justify">
          <h1 className="text-xl capitalize font-semibold text-yellow-primary mb-5">
            About me
          </h1>
          <p className="text-base leading-8 font-normal">
            Hello, I'm Chaimaa Safi, a front-end developer who is passionate
            about coding, programming, and exploring new possibilities. I find
            joy in constantly learning and trying new things in this dynamic
            domain. Alongside my love for technology, I also have a deep
            appreciation for travel, as it fuels my creativity and broadens my
            perspective.{" "}
            <span className="text-orange-hero font-light">
              Join me on this journey as I showcase my work and share my love
              for development
            </span>
          </p>
        </div>
        <div>
          <div className="w-[450px] h-[500px] bg-yellow-400 rounded-lg" />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;
