"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/slider/slider (1).jpg", "/slider/slider (2).jpg", "/slider/slider (3).jpg",
  "/slider/slider (4).jpg", "/slider/slider (5).jpg", "/slider/slider (6).jpg",
  "/slider/slider (7).jpg", "/slider/slider (8).jpg", "/slider/slider (9).jpg",
  "/slider/slider (10).jpg"
];

const itemsPerView = 4; // Always display 4 images

const Slider2 = () => {
  const [visibleImages, setVisibleImages] = useState(images.slice(-itemsPerView));
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);

      setTimeout(() => {
        setVisibleImages((prev) => {
          const newFirstIndex = (images.indexOf(prev[0]) - 1 + images.length) % images.length;
          return [images[newFirstIndex], ...prev.slice(0, itemsPerView - 1)];
        });

        setIsSliding(false);
      }, 700); // Adjusted transition timing for stability
    }, 2000); // Move every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full relative flex items-center justify-center">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: isSliding ? "translateX(-100%)" : "translateX(0%)" }}>
        {visibleImages.map((src, i) => (
          <div key={i} style={{ minWidth: `${100 / itemsPerView}%`, padding: "8px" }}>
            <Image src={src} alt={`Slide ${i + 1}`} width={300} height={300} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider2;
