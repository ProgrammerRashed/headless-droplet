"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SectionHeading from "../../sectionHeader/SectionHeading";
import { useRef } from "react";
import SliderCard from "./SliderCard";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import SliderButtonTop from "@/components/shared/buttons/SliderButtonTop";

function CardSliderSection({ data }) {
  const { section_title, testimonials, button_details } = data.data;

  const swiperRef = useRef(null);

  return (
    <section className="bg-white py-[50px] md:py-[100px]">
      <div className="container">
        <div className="flex flex-row items-end justify-between">
          <div data-aos="fade-up">
            <SectionHeading className="max-w-[740px]">
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
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 1.9,
              },
              1024: {
                slidesPerView: 2.2,
              },
              1300: {
                slidesPerView: 2.55,
              },
            }}
            slidesPerView={1.14}
            navigation={false}
            spaceBetween={20}
            speed={600}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial._id}>
                <SliderCard card={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div data-aos="fade-up">
        <PrimaryButton href={button_details[0].link} className="mx-auto mt-10 bg-red-600 stroke-white text-white hover:bg-red-900">
          {button_details[0].title}
        </PrimaryButton>
      </div>
    </section>
  );
}

export default CardSliderSection;
