import Image from "next/image";
import React from "react";
import logo from "@/public/cantileverlogoblack.png";

const Footer = () => {
  return (
    <div className="lg:h-[22rem] h-auto bg-[#1D1D1D] p-6 flex flex-wrap">
      <div className="lg:w-[30%] h-auto grid place-items-center text-white gap-y-10">
        <Image
          src={logo}
          alt="footer logo"
          width={500}
          height={100}
          className=" invert"
        />
        <div className="text-lg leading-9">
          <p>&copy; copyright 2018 Cantilever Labs - All Rights Reserved</p>
          <hr className="h-[2px] bg-white w-1/2 text-left" />
          <p>T-HUB Catalyst Building</p>
          <p>IIIT Hyderabad Campus</p>
          <p>Email -info@cantileverlabs.com</p>
        </div>
      </div>
      <div className="lg:w-[40%] h-auto bg-amber-100">
        <div>
            <div></div>
        </div>
      </div>
      <div className="lg:w-[30%] h-auto bg-gray-400"></div>
    </div>
  );
};

export default Footer;
