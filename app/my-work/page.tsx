import React from 'react';
import Image from 'next/image';

const categories = [
  {
    label: 'Thumbnail',
    height: 'h-[260px]',
    images: [
      '/mywork/thumbnail/mywork (1).jpeg',
      '/mywork/thumbnail/mywork (1).jpg',
      '/mywork/thumbnail/mywork (1).png',
      '/mywork/thumbnail/mywork (2).jpeg',
      '/mywork/thumbnail/mywork (2).jpg',
      '/mywork/thumbnail/mywork (2).png',
      '/mywork/thumbnail/mywork (3).jpeg',
      '/mywork/thumbnail/mywork (3).jpg',
      '/mywork/thumbnail/mywork (4).jpeg',
      '/mywork/thumbnail/mywork (6).jpeg',
      '/mywork/thumbnail/mywork (7).jpeg',
      '/slider/slider (1).jpg',
      '/slider/slider (2).jpg',
      '/slider/slider (3).jpg',
      '/slider/slider (4).jpg',
      '/slider/slider (5).jpg',
      '/slider/slider (6).jpg',
      '/slider/slider (7).jpg',
      '/slider/slider (8).jpg',
    ],
  },
  {
    label: 'Poster',
    height: 'h-[420px]',
    images: [
      '/mywork/poster/mywork (1).jpeg',
      '/mywork/poster/mywork (1).jpg',
      '/mywork/poster/mywork (2).jpeg',
    ],
  },
  {
    label: 'Banner',
    height: 'h-[260px]',
    images: [
      '/mywork/banner/mywork.jpg',
    ],
  },
];

const page = () => {
  return (
    <div className="mt-20 px-4 pb-12 space-y-14">
      {categories.map((category) => (
        <section key={category.label}>
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">
            {category.label}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.images.map((src, index) => (
              <div
                key={index}
                className={`border border-white/20 rounded-xl overflow-hidden w-full h-[180px] ${category.height.replace('h-[', 'md:h-[')} flex items-center justify-center bg-white/5`}
              >
                <Image
                  src={src}
                  alt={`${category.label} ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default page;
