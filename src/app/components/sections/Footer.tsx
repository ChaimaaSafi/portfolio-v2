import HeartIcon from "@/icons/HeartIcon";
import React from "react";

function Footer() {
  return (
    <footer className="py-10 md:py-20 flex justify-center flex-row font-semibold items-center text-sm md:text-base text-white">
        <div className="hidden md:flex w-fit flex-row space-x-2">
            <p>Crafted with passion and Love</p>
            <span>
              <HeartIcon />
            </span>
            <p> by Chaimaa Safi</p>
            <p>© [2023]</p>
        </div>
        <div className="w-full flex justify-between items-center md:hidden">
            <p> by Chaimaa Safi</p>
            <span>
              <HeartIcon />
            </span>
            <p>© [2023]</p>
        </div>
    </footer>
  );
}

export default Footer;
