"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import DualSlider from "./InfiniteSlider";

const Hero: React.FC = () => {
  return (
    <div className="bg-[#030303] min-h-screen flex flex-col justify-center items-center text-[#D4D4D4] px-4">
      {/* Hero Content */}
      <div className="text-center max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Welcome to Hussain GFX
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold mb-2 text-[#E900B9]">
          Creative & Professional Designs
        </h2>
        <h3 className="text-lg md:text-2xl mb-4">
          Thumbnails That Stand Out
        </h3>
      </div>

      {/* Sliders (Reduced Height for Balance) */}
      <div className="w-full max-w-5xl">
        <DualSlider />
      </div>

      {/* CTA Button */}
      <Link href="/my-work">
        <button className="mt-6 bg-[#E900B9] text-white px-6 py-3 rounded-3xl text-lg font-semibold flex items-center gap-2 hover:bg-[#d100a6] transition duration-300">
          See Latest Work <FaArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default Hero;
