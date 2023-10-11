import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

const VARIANTS: { [key: string]: string } = {
  primary: "bg-yellow-primary text-black-hero px-5 py-3 ",
  secondary: "bg-blue-5 px-8 py-2 text-blue-1",
  border:
    "border-2 border-blue-1 bg-transparent px-5 py-1.5 text-blue-1 hover:bg-[#F4F9FD] duration-200",
};
type TButton = {
  type: keyof typeof VARIANTS;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

function Button({ type, icon, className, children }: TButton) {
  return type === "primary" ? (
    <AnimatePresence>
      <motion.button
        initial={{
          background: "linear-gradient(to left, #F8C43A, #E95793) right",
          backgroundSize: "200%",
        }}
        whileHover={{
          backgroundPosition: "left",
          background: "linear-gradient(to right, #C8AE7D, #313866)",
          transition: { duration: .2, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.9 }}
        style={{
          color: "white",
        }}
        className={`${className} flex cursor-pointer items-center justify-center space-x-2  rounded-md text-sm lg:text-lg font-semibold normal-case 
         disabled:cursor-not-allowed disabled:opacity-50 shadow shadow-gray-50 ${VARIANTS[type]}`}
      >
        {icon && <p>{icon}</p>}
        {children}
      </motion.button>
    </AnimatePresence>
  ) : (
    <motion.button
      className={`${className} flex cursor-pointer items-center justify-center space-x-2  rounded-md text-sm lg:text-lg font-semibold normal-case 
   disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTS[type]}`}
    >
      {icon && <p>{icon}</p>}
      {children}
    </motion.button>
  );
}

export default Button;
