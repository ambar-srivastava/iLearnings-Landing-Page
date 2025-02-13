import Image from "next/image";
import React from "react";
import { CareerImages } from "@/contant/Constant";
import rocket from "../../../public/CareerImg/rocket.gif";

const Career = () => {
  return (
    <div className="bg-[#185ADB] h-auto">
      <div>
        <h2 className="text-center lg:text-[2.8rem] text-[2rem] text-white py-6">
          <b className="font-medium">BOOST</b> your <i>career</i>
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col gap-y-20">
        <div className="lg:w-1/2 lg:h-[25rem] flex lg:flex-row flex-col gap-x-40 gap-y-10 px-28 items-center">
          {CareerImages.map((career) => (
            <div
              key={career.id}
              className="flex flex-col gap-5 justify-center items-center text-white font-normal"
            >
              <Image
                src={career.careerImgUrl}
                alt={career.heading}
                width={150}
                height={100}
              />
              <div>
                <h4 className=" font-medium text-3xl">{career.heading}</h4>
              </div>
              <div>
                <p className=" text-center">{career.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 flex lg:flex-row flex-col items-end justify-center">
          <Image src={rocket} alt="rocket image" width={500} />
        </div>
      </div>
    </div>
  );
};

export default Career;
