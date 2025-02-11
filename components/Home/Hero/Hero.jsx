"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import threeDImage from "../../../public/3d-image.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full bg-white mt-[7vh]">
      <div className="lg:min-h-[55%] h-auto w-full bg-gradient-to-r from-[#4b6cb7] to-[#00349c] clip-path-custom flex items-center flex-col lg:flex-row">
        <div className="min-h-full lg:w-[65%] w-full flex flex-col lg:flex-row lg:items-center lg:px-0 px-5 lg:mx-auto gap-y-12">
          <div className=" h-full lg:w-[50%] w-full">
            <div className="flex flex-col justify-center h-full">
              <div>
                <span className="font-bold bg-clip-text lg:text-[3rem] text-4xl text-[#FFA500]">
                  UPSKILL
                </span>
                {/* Typing effect Animation here */}
                <TypeAnimation
                  sequence={[
                    "for Future",
                    2000,
                    "",
                    1000,
                    "Yourself",
                    2000,
                    "",
                    1000,
                  ]}
                  cursor={false}
                  wrapper="span"
                  speed={10}
                  repeat={Infinity}
                  className="text-white lg:text-[3rem] text-4xl font-light inline ml-2 text-wrap"
                />

                {/* Custom Orange Cursor */}
                <span className="text-orange-400 text-[3.4rem] blink">|</span>
              </div>
              <div className="text-white font-normal mt-2">
                <p className="lg:text-[2.5rem] text-3xl">Grab Your Dream Job</p>
                <p className="text-[#ffe817] text-[1.4rem] text-wrap mt-4">
                  Be Different & Make the Difference, Start your Journey Today
                </p>
              </div>
              <button className="uppercase w-40 mt-8 rounded-2xl text-white font-semibold text-xl py-4 bg-[#FFA500] ">
                get started
              </button>
            </div>
          </div>
          <div className="lg:w-[50%] flex justify-end items-center">
            <Image src={threeDImage} width={470} alt="3D Robot" className=" scale-x-[-1]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
