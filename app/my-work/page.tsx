import React from 'react';
import Image from 'next/image';

const page = () => {
  const images = Array.from({ length: 8 }, (_, i) => `/slider/slider (${i + 1}).jpg`);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((src, index) => (
        <div key={index} className="border border-white rounded-xl overflow-hidden">
          <Image src={src} alt={`slider ${index + 1}`} width={300} height={300} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default page;