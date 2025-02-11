"use client";
import { NavLinks } from "@/contant/Constant";
import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const MobileNav = ({ showMobileNav, closeNav }) => {
  const navOpen = showMobileNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed inset-0 transform transition-all duration-500 z-10 bg-black opacity-90 ${navOpen} w-full h-screen`}
      ></div>

      {/* NavLinks */}
      <div
        className={`text-white fixed inset-0 flex justify-center flex-col transform transition-all duration-500 delay-300 w-[80%] h-screen sm:w-[60%] bg-gradient-to-r from-[#00349c] to-[#4b6cb7] space-y-7 z-50 ${navOpen}`}
      >
        {NavLinks.map((link, index) => (
          <div key={index} className="relative group">
            {/* Main Link with Arrow */}
            <div className="flex items-center justify-center space-x-1 cursor-pointer p-4 font-medium rounded-lg text-lg text-white hover:bg-[#1888FF] w-[70%] mx-auto">
              <Link href={link.href}>{link.title}</Link>
              {/* Icon (Changes on Hover) */}
              <span className="transition-transform duration-300 group-hover:rotate-180">
                <FaChevronDown className="text-xs" />
              </span>
            </div>

            {/* Dropdown Menu */}
            {link.courseData || link.resourceData || link.collegeData ? (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 text-sm text-black">
                {Object.values(
                  link.courseData || link.resourceData || link.collegeData
                ).map((item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
        <button className="p-4 w-[70%] mx-auto rounded-lg text-lg font-medium hover:bg-[#1888FF] text-white">
          Blog
        </button>
        <button className="w-[70%] mx-auto p-4 text-lg rounded-md font-medium text-[#0000FF] bg-[#DBDBFF] hover:bg-[#1888FF] hover:text-white">
          <Link href="#">Login</Link>
        </button>
        {/* close Icon button */}
        <CgClose
          onClick={closeNav}
          className="cursor-pointer absolute top-[0.7rem] right-[2rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
