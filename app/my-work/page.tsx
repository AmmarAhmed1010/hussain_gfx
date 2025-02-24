import React from 'react';
import Image from 'next/image';

const page = () => {
  const sliderImages = Array.from({ length: 8 }, (_, i) => `/slider/slider (${i + 1}).jpg`);
  const myWorkImages = Array.from({ length: 5 }, (_, i) => `/mywork/mywork (${i + 1}).jpg`);

  const images = [...sliderImages, ...myWorkImages];

  return (
    <div className="grid grid-cols-1 mt-20 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="border border-white rounded-xl overflow-hidden w-full h-auto md:h-[300px] flex items-center justify-center">
          <Image
            src={src}
            alt={`image ${index + 1}`}
            width={300}
            height={300}
            className="w-full h-auto md:h-full md:object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default page;
