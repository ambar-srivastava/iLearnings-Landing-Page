"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Brands1, Brands2 } from "@/contant/Constant";

const Alumini = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full bg-white py-10 overflow-hidden">
      <h2 className="text-center capitalize text-[1.4rem] lg:text-[2.5rem] font-semibold opacity-85 text-black mb-6">
        Our Alumni placed at leading Companies
      </h2>

      {/* Marquee effect using Framer Motion */}
      <div className="w-full flex flex-col gap-y-2 items-center justify-center">
        <div className="w-full flex overflow-hidden relative mt-10">
          <motion.div
            className="flex space-x-10"
            animate={{ x: ["0%", "-100%"] }} // Move left continuously
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 50, // Adjust speed as needed
            }}
            style={{ minWidth: "200%" }} // Ensure it's long enough for smooth looping
          >
            {/* Duplicate logos to create a continuous effect */}
            {[...Brands1, ...Brands1].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex-grow-0 bg-[#FAFAFA] rounded-xl overflow-hidden"
              >
                <Image
                  width={250}
                  height={100}
                  src={brand.brandUrl} // Corrected Image Path
                  alt={brand.brand}
                  loading="lazy"
                  className="object-contain rounded-lg shadow-md"
                />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="w-full flex overflow-hidden relative mt-10">
          <motion.div
            className="flex space-x-10"
            animate={{ x: ["-100%", "0"] }} // Move right continuously
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 50, // Adjust speed as needed
            }}
            style={{ minWidth: "200%" }} // Ensure it's long enough for smooth looping
          >
            {/* Duplicate logos to create a continuous effect */}
            {[...Brands2, ...Brands2].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex-grow-0 bg-[#FAFAFA] rounded-xl overflow-hidden"
              >
                <Image
                  width={250}
                  height={100}
                  src={brand.brandUrl} // Corrected Image Path
                  alt={brand.brandName}
                  loading="lazy"
                  className="object-contain rounded-lg shadow-md"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Alumini;
