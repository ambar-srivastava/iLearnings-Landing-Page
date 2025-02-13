"use client";
import React from "react";
import Hero from "./Hero/Hero";
import Alumini from "./Alumini/Alumini";
import Career from "./Career/Career";
import Programs from "./Programs/Programs";

const Home = () => {
  return (
    <div className=" overflow-x-hidden">
      <Hero />
      <Alumini />
      <Career />
      <Programs />
    </div>
  );
};

export default Home;
