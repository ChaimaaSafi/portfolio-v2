import About from "@/components/About";
import Home from "@/components/Home";
import { useEffect, useState } from "react";

export default function Index() {
  const [pageIndex, setpageIndex] = useState<number>(1);
  useEffect(() => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollPositionToTriggerAnimation = 0; // Adjust this value as needed
    console.log(scrollTop);

    if (scrollTop >= scrollPositionToTriggerAnimation) {
      setpageIndex(2);
    } else {
      setpageIndex(3);
    }
  });

  return (
    <section>
      <Home />
      <About />
    </section>
  );
}
