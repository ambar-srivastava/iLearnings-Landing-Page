"use client";
import Image from "next/image";
import React from "react";
import personImg from "../../../public/Person.png";

const Person = () => {
  return (
    <div className="w-full lg:h-[25rem] h-auto bg-[#185ADB] flex lg:flex-row flex-col p-4 py-10">
      <div className="lg:w-2/5 w-full flex items-center justify-center">
        <Image src={personImg} width={350} height={350} alt="person image" />
      </div>
      <div className="lg:w-3/5 w-full lg:p-10 p-4 flex flex-col justify-center">
        <div className="font-medium text-white uppercase">
          <h1 className=" text-4xl">Sarvesh Mehtani</h1>
          <h3 className="text-white text-2xl py-2">
            IIT Bombay - Computer Science
          </h3>
        </div>
        <div className="lg:w-3/4 flex flex-col gap-y-8">
          <p className="text-white text-wrap text-lg pt-5">
            Overall, I loved the fact that the whole process was tailored as per
            the individual's interests and goals which made it very effective in
            pointing out our areas of strength and the areas that we need to
            work on.
          </p>
          <button className="py-3 bg-white px-8 rounded-full lg:w-[55%] text-[#185ADB] text-2xl font-semibold">
            A.I.R 1, JEE ADVANCED 2017
          </button>
        </div>
      </div>
    </div>
  );
};

export default Person;
