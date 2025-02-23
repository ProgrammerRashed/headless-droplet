"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useRef } from "react";
import Image from "next/image";

function FullWidthSlider({ images }) {
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        className="w-full cursor-grab"
        slidesPerView={1}
        speed={600}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="bg-transparent">
            <div className="relative w-full">
              <Image
                width={1440}
                height={662}
                src={image}
                alt={`Slide ${index}`}
                className="aspect-video h-auto w-full object-cover md:aspect-[1440/662]"
                priority
              />
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default FullWidthSlider;
