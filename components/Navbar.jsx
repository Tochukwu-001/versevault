"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const {data: session} = useSession();
  console.log(session);
  
  const navItems = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "Contact Us", url: "/contact" },
    { label: "FAQs", url: "/faqs" },
  ];

  return (
    <nav className="shadow-md md:px-8 px-2 py-3 flex items-center justify-between">
      <Link href={"/"} className="flex items-center gap-1 z-40">
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

      {/* mobile and tab view */}
      <div
        className={`lg:hidden bg-white h-dvh w-full top-0 left-0 absolute flex flex-col items-center gap-10 pt-20 ${
          navOpen ? "opacity-100" : "opacity-0"
        }`}
      >
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
        href={"/auth/signin"}
        className="flex items-center gap-1 text-lg hover:text-purple-600 transition-all duration-150 max-lg:ml-auto z-40"
      >
        <p className="max-md:hidden">Sign In</p>
        <FaRegUser />
      </Link>

      <button
        onClick={() => setNavOpen(!navOpen)}
        className="lg:hidden text-2xl ml-2 z-40"
      >
        {navOpen ? <IoCloseOutline /> : <RiMenu3Line />}
      </button>
    </nav>
  );
};

export default Navbar;
