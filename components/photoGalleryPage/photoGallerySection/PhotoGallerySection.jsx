"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef } from "react";
import SlidersButton from "@/components/shared/buttons/SlidersButton";
import SliderButtonTop from "@/components/shared/buttons/SliderButtonTop";

function PhotoGallerySection() {
  const swiperRef = useRef(null);
  return (
    <section className="py-[50px] md:py-[100px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
          <Dialog>
            <DialogTrigger>
              <div className="group flex flex-col items-start gap-5">
                <div className="grid h-[240px] grid-cols-2 grid-rows-2 gap-[5px]">
                  <div className="row-span-2 overflow-hidden rounded-[8px]">
                    <Image
                      src="/photo-gallery-page/photo-gallery-1.jpg"
                      height={240}
                      width={200}
                      alt=""
                      className="h-full object-cover transition-all duration-300 group-hover:brightness-75"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[8px]">
                    <Image
                      src="/photo-gallery-page/photo-gallery-2.jpg"
                      height={117}
                      width={200}
                      alt=""
                      className="h-full w-full object-cover transition-all duration-300 group-hover:brightness-75"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-[8px]">
                    <Image
                      src="/photo-gallery-page/photo-gallery-3.jpg"
                      height={117}
                      width={200}
                      alt=""
                      className="h-full w-full object-cover transition-all duration-300 group-hover:brightness-75"
                    />
                    <div className="absolute left-1/2 top-1/2 z-10 flex w-max -translate-x-1/2 -translate-y-1/2 flex-row items-center justify-center gap-1 rounded-[40px] bg-[#1C191799] px-4 py-[10px] transition-all duration-300 group-hover:bg-[#1C1917]">
                      <svg
                        className="h-[18px] w-[18px]"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.25 2.25H3.75C2.92157 2.25 2.25 2.92157 2.25 3.75V14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H14.25C15.0784 15.75 15.75 15.0784 15.75 14.25V3.75C15.75 2.92157 15.0784 2.25 14.25 2.25Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.375 7.5C6.99632 7.5 7.5 6.99632 7.5 6.375C7.5 5.75368 6.99632 5.25 6.375 5.25C5.75368 5.25 5.25 5.75368 5.25 6.375C5.25 6.99632 5.75368 7.5 6.375 7.5Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.75 11.25L12 7.5L3.75 15.75"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="flex-shrink-0 text-sm font-normal leading-[22px] text-white">
                        12 photos
                      </span>
                    </div>
                  </div>
                </div>
                <h4 className="line-clamp-1 text-[22px] font-medium leading-[32px] text-gray-800">
                  Bangladesh SDG Conference 2023
                </h4>
              </div>
            </DialogTrigger>
            <DialogOverlay className="bg-gray-800">
              <DialogContent
                data-lenis-prevent
                closeBtnClassName="right-0 top-0 md:right-0 md:top-[19px]"
                className="flex h-[95vh] w-[90vw] flex-col justify-center overflow-hidden rounded-none border-none bg-transparent p-0 sm:w-[90vw] sm:min-w-[90vw] sm:max-w-[90vw] sm:rounded-none sm:px-20 lg:mt-16 lg:h-[85vh] lg:w-[50vw] lg:min-w-[50vw] lg:max-w-[50vw] lg:justify-start lg:p-0"
              >
                <div className="flex flex-col">
                  <DialogHeader className="mb-[10px] flex h-fit flex-col justify-start md:mb-5">
                    <DialogTitle className="mb-[5px] text-left text-xl font-medium leading-[30px] text-white md:mb-[10px] md:text-[32px] md:font-bold md:leading-[42px]">
                      India SDG Conference 2023
                    </DialogTitle>
                    <p className="text-left text-sm font-normal leading-[22px] text-white md:text-base md:leading-[26px]">
                      1/12
                    </p>
                  </DialogHeader>
                  <div className="h-full overflow-hidden rounded-[8px]">
                    <Swiper
                      className="relative h-[250px] cursor-grab md:h-[350px] lg:h-[400px]"
                      slidesPerView={1}
                      navigation={false}
                      speed={600}
                      loop={true}
                      onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                      <SwiperSlide>
                        <Image
                          src="/photo-gallery-page/photo-gallery-1.jpg"
                          height={750}
                          width={1290}
                          alt=""
                          className="h-full w-full object-cover transition-all duration-300 group-hover:brightness-75"
                        />
                        <div className="absolute bottom-[10px] left-[10px] z-10 rounded-[40px] bg-gray-800 px-3 py-2 text-white">
                          Meeting with team
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          src="/photo-gallery-page/photo-gallery-1.jpg"
                          height={750}
                          width={1290}
                          alt=""
                          className="h-full w-full object-cover transition-all duration-300 group-hover:brightness-75"
                        />
                        <div className="absolute bottom-[10px] left-[10px] z-10 rounded-[40px] bg-gray-800 px-3 py-2 text-white">
                          Meeting with team
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <Image
                          src="/photo-gallery-page/photo-gallery-1.jpg"
                          height={750}
                          width={1290}
                          alt=""
                          className="h-full w-full object-cover transition-all duration-300 group-hover:brightness-75"
                        />
                        <div className="absolute bottom-[10px] left-[10px] z-10 rounded-[40px] bg-gray-800 px-3 py-2 text-white">
                          Meeting with team
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <div className="mt-5 flex justify-center lg:justify-end">
                      <SliderButtonTop
                        variation="small"
                        onPrev={() => swiperRef.current?.slidePrev()}
                        onNext={() => swiperRef.current?.slideNext()}
                      />
                    </div>
                  </div>
                </div>
              </DialogContent>
            </DialogOverlay>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

export default PhotoGallerySection;
