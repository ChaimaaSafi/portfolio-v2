import Image from "next/image";
import Link from "next/link";
import React from "react";
import Me from "@/public/assets/me2.png";
import Button from "./core/Button";
import { motion } from "framer-motion";

type Props = {};

function Home({}: Props) {
  return (
    <section className="bg-black-hero flex flex-col pb-10 h-screen">
      <header className="bg-[#222831] border border-black-hero">
        <nav className="flex items-center justify-between py-4 px-10">
          <Link href={"/"} className="text-3xl font-black text-white uppercase">
            S<span className="font-extrabold text-yellow-hero">Chaimaa</span>
          </Link>
          <motion.ul className="flex items-center space-x-10 px-5">
            {["About", "Work", "Contact"].map(
              (value: string, index: number) => (
                <Link key={index} href={`/${value}`}>
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
        animate={{ x: [100, 500, 0], opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.2, 0.2, 0.76, 1],
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        className="px-10 mt-10 flex justify-between items-center space-x-2"
      >
        <div className="flex flex-col text-white">
          <h2 className="text-xl font-semibold">Oh Hey! My name is</h2>
          <h1 className="text-5xl font-bold my-5leading-6 uppercase text-yellow-primary ">
            Chaimaa Safi
          </h1>
          <p className="text-lg font-medium">A Front-end Developer</p>
          <div className="w-[200px] mt-4">
            <Button type="primary">Know more</Button>
          </div>
        </div>
        <div className="relative">
          <motion.div
            whileHover={{
              scale: 0.8,
              zIndex: 50,
            }}
            transition={{
              duration: 0.7,
              type: "spring",
            }}
            className="absolute w-[350px] h-[500px] bg-yellow-400 rounded-lg"
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
            className="w-[330px] h-[450px] bg-red-400 rounded-lg"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
