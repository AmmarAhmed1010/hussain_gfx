"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    "/slider/slider (1).jpg", "/slider/slider (2).jpg", "/slider/slider (3).jpg", "/slider/slider (4).jpg",
    "/slider/slider (5).jpg", "/slider/slider (6).jpg"
  ];
  
  

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (images.length - itemsPerView + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [itemsPerView]);

  return (
    <div className="overflow-hidden w-full relative flex items-center justify-center">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * (100 / itemsPerView)}%)` }}
      >
        {images.concat(images.slice(0, itemsPerView)).map((src, i) => (
          <div key={i} style={{ minWidth: `${100 / itemsPerView}%`, padding: "8px" }}>
            <Image src={src} alt={`Slide ${i + 1}`} width={300} height={300} className="w-full h-auto rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
