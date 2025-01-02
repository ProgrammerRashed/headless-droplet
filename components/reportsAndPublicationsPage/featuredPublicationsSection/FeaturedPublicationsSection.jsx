"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SectionHeading from "@/components/sectionHeader/SectionHeading";
import FeaturedCard from "./FeaturedCard";

function FeaturedPublicationsSection({ data }) {
  const { sectiionTitle, featuredCards } = data;
  return (
    <section className="bg-surface py-[50px] lg:py-20">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading>Featured Publications</SectionHeading>
        </div>
      </div>
      <div className="slider-full-container 0.5xl:hidden">
        <div className="relative mt-5 border-t border-gray-50 pt-5">
          <Swiper
            className="cursor-grab"
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2.3,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
            }}
            slidesPerView={1.14}
            navigation={false}
            spaceBetween={15}
            speed={600}
            loop={true}
          >
            {featuredCards.map((featuredCard) => (
              <SwiperSlide key={featuredCard.id}>
                <FeaturedCard card={featuredCard} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container hidden 0.5xl:block">
        <div className="mt-5 grid grid-cols-3 gap-[15px] border-t border-gray-50 pt-5 xl:gap-[30px]">
          {featuredCards.map((featuredCard) => (
            <FeaturedCard key={featuredCard.id} card={featuredCard} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPublicationsSection;
