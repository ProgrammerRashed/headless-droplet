"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SliderButtonTop from "@/components/shared/buttons/SliderButtonTop";

function PhotoGalleryContent({ gallery }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const swiperRef = useRef(null);

  const totalSlides = gallery?.gallery?.length || 0;

  return (
    <DialogContent
      data-lenis-prevent
      closeBtnClassName="right-[15px] top-[15px] md:right-[190px] md:top-[18px] lg:right-[300px] xl:right-[400px]"
      className="md: flex h-full w-full max-w-full items-center border-0 bg-transparent p-0 md:h-fit"
    >
      <div className="flex w-full flex-col items-start px-[15px] sm:px-[90px] md:px-[190px] lg:px-[300px] xl:px-[400px]">
        <DialogHeader className="mb-5 flex flex-col items-start lg:gap-[10px]">
          <DialogTitle className="text-lg font-medium leading-[42px] text-white md:font-semibold xl:text-[32px] xl:font-bold xl:leading-[42px]">
            {gallery.caption}
          </DialogTitle>

          <DialogDescription className="m-0 p-0 text-base font-normal leading-normal text-white">
            {currentSlide}/{totalSlides}
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full flex-col">
          <Swiper
            className="w-full rounded-[8px]"
            slidesPerView={1}
            navigation={false}
            speed={600}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
          >
            {gallery?.gallery?.map((image) => (
              <SwiperSlide key={image.id}>
                <Image
                  src={image.imageUrl || "/thumbnail.png"}
                  height={750}
                  width={1290}
                  alt={image.caption}
                  className="aspect-video w-full object-cover"
                />
                <div className="absolute bottom-[10px] left-[10px] rounded-[80px] bg-gray-800/60 px-4 py-[7px] text-base font-normal leading-[26px] text-white md:bottom-6 md:left-6">
                  {image.caption}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-5 md:self-end">
            <SliderButtonTop
              variation="small"
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

export default PhotoGalleryContent;
