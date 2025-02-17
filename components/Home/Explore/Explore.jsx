"use client";
import React from "react";
import exploreImg from "../../../public/Explore/explore.png";
import Image from "next/image";

const Explore = () => {
  return (
    <div className="h-auto lg:h-[30rem] w-full bg-[#185ADB] text-white flex flex-wrap">
      <div className="lg:w-[40%] hidden lg:flex items-start justify-end">
        <Image
          src={exploreImg}
          width={450}
          height={450}
          alt="explore image"
          className="-my-8"
        />
      </div>
      <div className="lg:w-[60%] flex flex-col justify-center tracking-wider items-center p-5 lg:p-10 my-10">
        <h2 className="text-4xl text-center font-medium">
          Searching for a Job/Internship?
        </h2>
        <button className="bg-white text-black font-medium text-xl mt-10 py-2 lg:px-20 px-10 rounded-full">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Explore;
