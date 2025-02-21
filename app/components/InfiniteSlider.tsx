"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/slider/slider (1).jpg", "/slider/slider (2).jpg", "/slider/slider (3).jpg", "/slider/slider (4).jpg",
  "/slider/slider (5).jpg", "/slider/slider (6).jpg", "/slider/slider (7).jpg", "/slider/slider (8).jpg"
];

const InfiniteSlider = ({ direction = "left" }) => {
  const containerRef = useRef(null);

  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        ref={containerRef}
        className="flex"
        animate={{ x: direction === "left" ? [0, "-100%"] : ["-100%", 0] }}
        transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="p-2 min-w-[50%] md:min-w-[25%] md:w-1/4">
            <Image src={src} alt={`Slide ${index + 1}`} width={300} height={300} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const DualSlider = () => {
  return (
    <div className="space-y-4">
      {/* Top Slider */}
      <InfiniteSlider direction="left" />
      {/* Bottom Slider */}
      <InfiniteSlider direction="right" />
    </div>
  );
};

export default DualSlider;
