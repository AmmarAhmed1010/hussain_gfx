"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/slider/slider (1).jpg",
  "/slider/slider (2).jpg",
  "/slider/slider (3).jpg",
  "/slider/slider (4).jpg",
  "/slider/slider (5).jpg",
  "/slider/slider (6).jpg",
  "/slider/slider (7).jpg",
  "/slider/slider (8).jpg",
];

const DualSlider = () => {
  const [itemsPerView, setItemsPerView] = useState(4);
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  return (
    <div className="w-full space-y-2 overflow-hidden">
      <div className="w-full overflow-hidden relative">
        <motion.div
          className="flex"
          animate={{ x: ["0%", `-${100}%`] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {[...images, ...images].map((src, i) => (
            <div key={i} style={{ minWidth: `${100 / itemsPerView}%`, padding: "8px" }}>
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                width={300}
                height={300}
                priority={i < 2}
                quality={80}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="w-full overflow-hidden relative">
        <motion.div
          className="flex"
          animate={{ x: [`-${100}%`, "0%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {[...images, ...images].map((src, i) => (
            <div key={i} style={{ minWidth: `${100 / itemsPerView}%`, padding: "8px" }}>
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                width={300}
                height={300}
                priority={i < 2}
                quality={80}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DualSlider;
