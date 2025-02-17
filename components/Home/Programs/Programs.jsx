"use client";
import React from "react";
import { ProgramImages } from "@/constant/Constant";
import Image from "next/image";

const Programs = () => {
  return (
    <div className="lg:h-[35rem] h-auto w-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 place-items-center w-[80%] h-full mx-auto py-10">
        {ProgramImages.map((program, index) => (
          <div
            key={index}
            className="bg-gray-100 lg:bg-gray-50 shadow-lg rounded-lg overflow-hidden flex flex-col gap-y-6 justify-center p-5 lg:w-[20rem] w-full transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <Image
              src={program.programImgUrl}
              alt={program.heading}
              width={200}
              height={200}
            />

            <h2 className="text-start font-semibold text-lg text-wrap">
              {program.heading}
            </h2>
            <button className="border-[#185ADB] border rounded-md py-1 tracking-wider cursor-pointer w-24 text-[#185ADB] text-lg">
              {program.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
