import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

const VARIANTS: { [key: string]: string } = {
  primary:
    "bg-gradient-to-bl from-orange-200  text-gray-800 via-yellow-400 to-rose-400 px-5 py-3 ",
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
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 8px 2px rgba(255, 255, 255, 0.75)",
          marginLeft: "18px",
          transition: { duration: 0.3 },
          filter: "brightness(1.2)",
        }}
        whileTap={{ scale: 0.9 }}
        className={`${className} flex ml-1   cursor-pointer items-center justify-center space-x-2  rounded-md text-sm lg:text-lg font-semibold normal-case 
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
