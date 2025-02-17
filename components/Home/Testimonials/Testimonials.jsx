"use client";
import React from "react";
import { testimonialContent } from "@/constant/Constant";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="h-auto w-full relative py-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 place-items-center w-[80%] h-full mx-auto py-10">
        {testimonialContent.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 lg:bg-gray-50 cursor-pointer shadow-lg rounded-lg overflow-hidden flex flex-col gap-y-6 justify-start p-5 lg:w-[25rem] w-full transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl lg:min-h-[25rem]"
          >
            <div className="flex items-center">
              <div className="rounded-full overflow-hidden w-24 h-24 bg-white">
                <Image
                  src={testimonial.avatarImg}
                  alt={testimonial.name}
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex flex-col mx-4 justify-center">
                <h2 className="text-start uppercase font-medium text-gray-800 text-xl text-wrap">
                  {testimonial.name}
                </h2>
                <Image
                  src={testimonial.companyImg}
                  alt={testimonial.companyName}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div>
              <p className=" tracking-wide text-wrap font-normal text-gray-600">
                {testimonial.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
