import About from "@/components/sections/About";
import Blogs from "@/components/sections/Blogs";
import Hero from "@/components/sections/Hero";
import Works from "@/components/sections/Works";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <section className="bg-main">
      <div className="md:max-w-7xl  w-full md:mx-auto px-3">
        <Hero />
        <About />
        <Works />
        <Blogs />
        <Footer />
      </div>
    </section>
  );
}
