"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/slider/slider (1).jpg", "/slider/slider (2).jpg", "/slider/slider (3).jpg", "/slider/slider (4).jpg",
  "/slider/slider (5).jpg", "/slider/slider (6).jpg", "/slider/slider (7).jpg", "/slider/slider (8).jpg"
];

const Slider = () => {
  const [itemsPerView, setItemsPerView] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Pause animation when tab is inactive
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div className="overflow-hidden w-full relative flex items-center justify-center">
      <div
        className={`flex transition-transform ease-in-out duration-700 ${
          isPaused ? "" : "animate-slider"
        }`}
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} style={{ minWidth: `${100 / itemsPerView}%`, padding: "8px" }}>
            <Image
              src={src}
              alt={`Slide ${i + 1}`}
              width={300}
              height={300}
              className="w-full h-auto rounded-lg"
              priority={i < itemsPerView}
              loading={i < itemsPerView ? "eager" : "lazy"}
              quality={80}
            />
          </div>
        ))}
      </div>

      {/* CSS Animation for Infinite Scrolling */}
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-slider {
          animation: slide 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Slider;
