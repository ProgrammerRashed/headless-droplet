"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SectionHeading from "../../sectionHeader/SectionHeading";
import { useRef } from "react";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import SliderButtonTop from "@/components/shared/buttons/SliderButtonTop";
import Image from "next/image";
import OurDirectorMessageCard from "./OurDirectorMessageCard";

function OurDirectorMessageSliderSection({ data }) {
  const { section_title, messages } = data?.data;
  const swiperRef = useRef(null);

  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        <div className="flex flex-row items-end justify-between">
          <div data-aos="fade-up">
            <SectionHeading className="max-w-[800px]">
              {section_title}
            </SectionHeading>
          </div>
          <div data-aos="fade-up" className="hidden 0.5xl:block">
            <SliderButtonTop
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </div>
      <div className="slider-full-container">
        <div className="relative mt-10">
          <Swiper
            className="z-10 cursor-grab"
            breakpoints={{
              640: {
                slidesPerView: 1.4,
              },
              768: {
                slidesPerView: 1.9,
              },
              1024: {
                slidesPerView: 2.16,
              },
              1441: {
                slidesPerView: 3.16,
              },
            }}
            slidesPerView={1.14}
            navigation={false}
            spaceBetween={10}
            speed={600}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {messages?.map((message) => (
              <SwiperSlide key={message._id}>
                <OurDirectorMessageCard card={message} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default OurDirectorMessageSliderSection;
