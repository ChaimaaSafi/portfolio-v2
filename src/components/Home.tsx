import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Me from "@/public/assets/me2.png";
import { Sling as Hamburger } from "hamburger-react";
import Button from "./core/Button";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {};

function Home({}: Props) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <section className="bg-black-hero flex flex-col md:pb-10 h-screen w-full">
      <header className="bg-[#222831] border border-black-hero">
        <nav
          className={`flex items-center justify-between py-4 ${
            isOpen ? "" : "px-3"
          } md:px-10`}
        >
          <Link
            href={"/"}
            className="text-base md:text-3xl font-black text-white uppercase"
          >
            S<span className="font-extrabold text-yellow-hero">Chaimaa</span>
          </Link>
          <div className="z-50 md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} color="#FFE569" />
          </div>
          <motion.ul
            className={`${
              isOpen
                ? "fixed top-0 flex h-screen bg-gray-600 w-full flex-col items-center text-center md:hidden"
                : "hidden"
            } md:flex md:items-center md:space-x-10 md:px-5`}
          >
            {["About", "Work", "Contact"].map(
              (value: string, index: number) => (
                <Link
                  key={index}
                  href={`/${value}`}
                  className="py-2 mt-28 md:py-0 md:mt-0"
                >
                  <motion.li
                    whileHover={{
                      scale: 1.3,
                      originX: 0,
                      color: "#F8C43A",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    {value}
                  </motion.li>
                </Link>
              )
            )}
          </motion.ul>
        </nav>
      </header>
      <motion.div
        style={{ opacity }}
        ref={targetRef}
        animate={{ x: [100, -100, 0], opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.2, 0.2, 0.76, 1],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        className="md:px-10 px-3 flex md:justify-between md:items-center md:space-x-2 md:flex-row flex-col h-full py-10"
      >
        <div className="flex flex-col space-y-1.5 text-white order-last md:order-first mt-10 md:mt-0">
          <h2 className="text-base lg:text-xl font-semibold">
            Oh Hey! My name is
          </h2>
          <h1 className="text-xl lg:text-5xl font-bold my-5 leading-6 uppercase text-yellow-primary ">
            Chaimaa Safi
          </h1>
          <p className="text-base lg:text-lg font-medium">
            A Front-end Developer
          </p>
          <div className="md:w-[200px] mt-4">
            <Button type="primary">Know more</Button>
          </div>
        </div>
        <div className="block md:hidden w-full h-[300px] bg-yellow-400 rounded-lg" />
        <div className="relative hidden md:block ">
          <motion.div
            whileHover={{
              scale: 0.8,
              zIndex: 50,
            }}
            transition={{
              duration: 0.7,
              type: "spring",
            }}
            className="absolute lg:w-[350px] lg:h-[500px] w-[250px] h-[360px] bg-yellow-400 rounded-lg"
          />
          <motion.div
            animate={{ x: "-20vh", y: 20 }}
            transition={{
              duration: 1.4,
              type: "spring",
              mass: 0.5,
              damping: 8,
              delay: 1,
            }}
            className="lg:w-[330px] lg:h-[450px] w-[230px] h-[300px] bg-red-400 rounded-lg"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
