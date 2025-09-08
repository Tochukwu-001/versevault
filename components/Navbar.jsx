"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";




const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  const navItems = [
    { label: "Home", url: "/home" },
    { label: "About Us", url: "/about" },
    { label: "Contact Us", url: "/contact" },
    { label: "FAQS", url: "/faqs" }
  ]
  return (
    <nav className='flex items-center justify-between shadow-md md:px-8 px-2 py-3'>
      <Link href={"/"} className='flex items-center gap-2 z-40'>
        <Image src={"/logo.png"} alt='logo' width={800} height={800} className="w-10 h-10" />
        <p className='text-lg text-gray-800 max-md:hidden'>VerseVault</p>
      </Link>

      {/* {desktop view} */}
      <div className='lg:flex items-center gap-6 hidden'>
        {navItems.map((items, index )=>(
          <Link 
          key={index}  href={items.url} className='text-gray-800 text-lg hover:text-purple-600 transition-all duration-150 '>
          {items.label}
          </Link>
        )) }
      </div>


      {/* mobile and nav view */}
      <div className= {`lg:hidden bg-white h-dvh w-full absolute top-0 left-0 flex flex-col items-center gap-10 pt-20 ${navOpen? "opacity-100" : "opacity-0"}`}>
        {navItems.map((items, index )=>(
          <Link 
          key={index}  href={items.url} className='text-gray-800 text-lg hover:text-purple-600 transition-all duration-150 '>
          {items.label}
          </Link>
        )) }
      </div>

      <Link href={"#"} className='flex items-center gap-1 text-lg hover:text-purple-600 transition-all duration-150 max-lg:ml-auto ml-2 z-40'>
        <p className='max-md:hidden'>Sign In</p>
        <FaRegUser />
      </Link>
      <button onClick={()=> setNavOpen(!navOpen)} className='lg:hidden text-2xl z-40'>
        {navOpen ?  <IoMdClose /> : <RiMenu3Fill /> }

      </button>
    </nav>
  )
}

export default Navbar

