"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../../public/cantileverlogoblack.png";
import { NavLinks } from "@/contant/Constant";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const Nav = ({ openNav }) => {
  return (
    <div className="fixed z-50 w-full transition-all duration-200 h-[7vh] bg-white shadow-md shadow-[#293c51]">
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* Logo */}
        <Image src={Logo} alt="Logo" width={190} />

        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-6">
          {NavLinks.map((link, index) => (
            <div key={index} className="relative group">
              {/* Main Link with Arrow */}
              <div className="flex items-center space-x-1 cursor-pointer px-3 py-2 font-medium rounded-lg text-sm text-gray-700 hover:bg-[#1888FF] hover:text-white">
                <Link href={link.href}>{link.title}</Link>
                {/* Icon (Changes on Hover) */}
                <span className="transition-transform duration-300 group-hover:rotate-180">
                  <FaChevronDown className="text-xs" />
                </span>
              </div>

              {/* Dropdown Menu */}
              {link.courseData || link.resourceData || link.collegeData ? (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 text-xs">
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
          <Link
            className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-[#1888FF] hover:text-white"
            href="#"
          >
            Blog
          </Link>
          <button className="px-4 py-2 rounded-md font-medium text-[#0000FF] bg-[#DBDBFF] hover:bg-[#1888FF] hover:text-white">
            <Link href="#">Login</Link>
          </button>
        </div>

        {/* Hamburger */}
        <HiMenuAlt3
          onClick={openNav}
          className="w-8 h-8 cursor-pointer text-black lg:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
