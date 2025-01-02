"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SectionHeading from "@/components/sectionHeader/SectionHeading";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import MonthlyGiftCard from "@/components/shared/monthlyGiftSection/MonthlyGiftCard";

function MonthlyGiftSection({ data }) {
  const { sectionTitle, cardItems, buttonDetails } = data;
  const swiperRef = useRef(null);

  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading className="max-w-[740px]">
            {sectionTitle}
          </SectionHeading>
        </div>
      </div>
      <div className="slider-container">
        <div className="relative mt-10">
          <Swiper
            className="z-10 cursor-grab"
            breakpoints={{
              640: {
                slidesPerView: 1.4,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2.1,
              },
              1024: {
                slidesPerView: 2.2,
              },
              1440: {
                slidesPerView: 3,
              },
            }}
            slidesPerView={1.14}
            navigation={false}
            spaceBetween={20}
            speed={600}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {cardItems.map((card) => (
              <SwiperSlide key={card.id}>
                <MonthlyGiftCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div data-aos="fade-up">
        <PrimaryButton className="mx-auto mt-10 bg-red-600 stroke-white text-white hover:bg-red-900">
          {buttonDetails.title}
        </PrimaryButton>
      </div>
    </section>
  );
}

export default MonthlyGiftSection;
