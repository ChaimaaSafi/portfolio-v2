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
      <motion.div className="px-10 mt-10 flex justify-between items-center space-x-2">
        <div className="flex flex-col text-white">
          <h2 className="text-lg font-semibold">Oh Hey! My name is</h2>
          <motion.h1
            animate={{ x: [50, 150, 0], opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              ease: [0.2, 0.2, 0.5, 1],
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 0px 20px rgb(255,255,0)",
              transition: {
                duration: 0.5,
              },
            }}
            className="text-5xl font-bold my-5 leading-6 uppercase text-yellow-primary"
          >
            Chaimaa Safi
          </motion.h1>
          <p className="text-base font-medium">A Front-end Developer</p>
          <div className="w-[200px] mt-4">
            <Button type="primary">Know more</Button>
          </div>
        </div>
        <div className="w-[480px] h-[500px] bg-red-400"></div>
      </motion.div>
    </section>
  );
}

export default Home;
