"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
    
    const navItems = [
        {label: "Home", url: "/"},
        {label: "About Us", url: "#"},
        {label: "Contact Us", url: "#"},
        {label: "FAQs", url: "#"}
    ]

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
        <p className="text-lg text-gray-800">VerseVault</p>
      </Link>

      <div className="flex items-center gap-6">
        <Link
          href={"#"}
          className="text-gray-800 hover:text-purple-600 transition-all duration-150 text-lg"
        >
          Home
        </Link>
      </div>

      <Link href={"#"} className="flex items-center gap-1 text-lg">
        Sign In
        <FaRegUser />
      </Link>
    </nav>
  );
};

export default Navbar;
