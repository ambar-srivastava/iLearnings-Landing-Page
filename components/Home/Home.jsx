"use client";
import React from "react";
import Hero from "./Hero/Hero";
import Alumni from "./Alumni/Alumni";
import Career from "./Career/Career";
import Programs from "./Programs/Programs";
import Person from "./Person/Person";
import Testimonials from "./Testimonials/Testimonials";
import Explore from "./Explore/Explore";
// import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className=" overflow-x-hidden">
      <Hero />
      <Alumni />
      <Career />
      <Programs />
      <Person />
      <Testimonials />
      <Explore />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
