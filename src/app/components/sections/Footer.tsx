import HeartIcon from "@/icons/HeartIcon";
import React from "react";

function Footer() {
  return (
    <footer className="py-20 flex justify-center flex-row font-semibold items-center text-base text-white">
        <div className="w-fit flex flex-row space-x-2">
            <p>Crafted with passion and Love</p>
            <span>
              <HeartIcon />
            </span>
            <p> by Chaimaa Safi</p>
            <p>© [2023]</p>
        </div>
    </footer>
  );
}

export default Footer;
