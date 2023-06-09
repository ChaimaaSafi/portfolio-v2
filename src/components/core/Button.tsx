import React, { ReactNode } from "react";

const VARIANTS: { [key: string]: string } = {
  primary: "bg-yellow-primary text-black-hero px-5 py-3",
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
  return (
    <button
      className={`${className} flex cursor-pointer items-center justify-center space-x-2 rounded-md text-lg font-semibold normal-case shadow-sm transition duration-300 hover:shadow-md
   disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTS[type]}`}
    >
      {icon && <p>{icon}</p>}
      {children}
    </button>
  );
}

export default Button;
