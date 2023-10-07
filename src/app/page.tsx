import Image from "next/image";
import About from "@/components/sections/About";
import Blogs from "@/components/sections/Blogs";
import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";

export default function Home() {
  return (
    <section className="bg-main">
      <div className="max-w-7xl  w-full mx-auto px-3">
        <Hero />
        <About />
        <Works />
        <Blogs />
      </div>
    </section>
  );
}
