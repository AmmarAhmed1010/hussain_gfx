"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header className="bg-[#030303] text-[#D4D4D4] py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-[#E900B9] text-2xl font-bold cursor-pointer">
            <span className="text-white">Hussain</span>GFX
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-[#E900B9] transition-colors">Home</Link>
          <Link href="/my-work" className="hover:text-[#E900B9] transition-colors">My Work</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl text-white focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-[200px] bg-[#111] text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button 
          className="absolute top-5 right-5 text-2xl text-[#E900B9] focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        <nav className="flex flex-col items-center mt-20 space-y-6 text-xl">
          <Link href="/" className="hover:text-[#E900B9]" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/my-work" className="hover:text-[#E900B9]" onClick={() => setIsOpen(false)}>My Work</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
