 "use client"
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

type Props = {
  children: JSX.Element;
};
function Reveal({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls =  useAnimation()

  useEffect(() => {
    if(isInView) {
        console.log(isInView)
        mainControls.start("visible")
    }
  }, [isInView]);
  return (
    <div ref={ref} className="relative overflow-hidden">
    <motion.div
    variants={{
        hidden: {opacity: 0, y: 175},
        visible: {opacity: 1, y: 0},
    }}
    initial="hidden"
    animate={mainControls}
    transition={{
        duration: 0.6,
        delay:  0.3
    }}
    >
        {children}
    </motion.div>
    </div>
  );
}


export default Reveal;
