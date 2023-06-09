import Image from "next/image";
import Link from "next/link";
import React from "react";
import Me from "@/public/assets/me2.png";
import Button from "./core/Button";

type Props = {};

function Home({}: Props) {
  return (
    <section className="bg-black-hero flex flex-col pb-10">
      <header className="bg-[#222831] border border-black-hero">
        <nav className="flex items-center justify-between py-4 px-10">
          <h2 className="text-3xl font-black text-white uppercase">
            S<span className="font-extrabold text-yellow-hero">Chaimaa</span>
          </h2>
          <div className="flex items-center space-x-4">
            <Link href="/about">About</Link>
            <Link href="/work"> Work</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </header>
      <div className="px-10 mt-10 flex justify-between items-center space-x-2">
        <div className="flex flex-col text-white">
          <h2 className="text-lg font-semibold">Oh Hey! My name is</h2>
          <h1 className="text-5xl font-bold my-5 leading-6 uppercase text-yellow-primary">
            Safi Chaimaa
          </h1>
          <p className="text-base font-medium">A Front-end Developer</p>
          <div className="w-[200px] mt-4">
            <Button type="primary">Know more</Button>
          </div>
        </div>
        <div className="w-[480px] h-[500px] relative">
          <Image src={Me} alt={"me"} fill />
        </div>
      </div>
    </section>
  );
}

export default Home;
