"use client"
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import DualSlider from "./InfiniteSlider";

const Hero: React.FC = () => {
  return (
    <div className=" bg-[#030303] min-h-screen  text-[#D4D4D4]">
 <div className="flex flex-col items-center justify-center text-center">
 <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Hussain GFX</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-[#E900B9]">Creative & Professional Designs</h2>
      <h3 className="text-xl md:text-3xl mb-6">Thumbnails That Stand Out</h3> 
  </div> 
      <DualSlider/>    
      <Link href="/my-work">
      <div className="flex flex-col items-center justify-center text-center">
      <button className="bg-[#E900B9] text-white px-6 py-3 rounded-3xl text-lg font-semibold flex items-center gap-2 mt-6 hover:bg-[#d100a6] transition duration-300">
          See Latest Work <FaArrowRight />
        </button>
      </div>
      </Link>
   
    </div>
  );
};

export default Hero;
