"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const navItems = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "Contact Us", url: "/contact" },
    { label: "FAQs", url: "/faqs" },
  ];

  return (
    <nav className="shadow-md px-8 py-3 flex items-center justify-between">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={800}
          height={800}
          className="w-10 h-10"
        />
        <p className="text-lg text-gray-800 max-md:hidden">VerseVault</p>
      </Link>

      {/* Desktop view */}
      <div className="lg:flex items-center gap-6 hidden">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="text-gray-800 hover:text-purple-600 transition-all duration-150 text-lg"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <Link
        href={"#"}
        className="flex items-center gap-1 text-lg hover:text-purple-600 transition-all duration-150"
      >
        <p className="max-md:hidden">Sign In</p>        
        <FaRegUser />
      </Link>

      <button>
        <RiMenu3Line/>
      </button>
    </nav>
  );
};

export default Navbar;
