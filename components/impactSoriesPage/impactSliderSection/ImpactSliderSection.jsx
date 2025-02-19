"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ImpactSliderCard from "./ImpactSliderCard";
import SlidersButton from "@/components/shared/buttons/SlidersButton";

function ImpactSliderSection({ data }) {
  const swiperRef = useRef(null);
  return (
    <section className="group bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        <div className="relative">
          <SlidersButton
            onPrev={() => swiperRef.current?.slidePrev()}
            onNext={() => swiperRef.current?.slideNext()}
          />
          <Swiper
            className="z-10 cursor-grab"
            slidesPerView={1}
            navigation={false}
            spaceBetween={20}
            speed={600}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {data?.map((impact, index) => (
              <SwiperSlide key={index}>
                <ImpactSliderCard card={impact} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ImpactSliderSection;
