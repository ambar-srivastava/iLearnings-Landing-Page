"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const ResponsiveNav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleMobileNavOpen = () => {
    setShowMobileNav(true);
  };
  const handleMobileNavClose = () => {
    setShowMobileNav(false);
  };
  return (
    <div>
      <Nav openNav={handleMobileNavOpen} />
      <MobileNav
        showMobileNav={showMobileNav}
        closeNav={handleMobileNavClose}
      />
    </div>
  );
};

export default ResponsiveNav;
