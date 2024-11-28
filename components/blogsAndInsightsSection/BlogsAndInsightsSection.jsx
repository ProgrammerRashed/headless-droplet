"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import PrimaryButton from "../buttons/PrimaryButton";
import SectionHeading from "../sectionHeader/SectionHeading";
import BlogsCard from "./BlogsCard";
import { useRef } from "react";
import SlidersButton from "../buttons/SlidersButton";

function BlogsAndInsightsSection() {
  const swiperRef = useRef(null);

  return (
    <section className="bg-surface py-[50px]">
      <div className="container">
        <div className="flex flex-row items-center justify-between gap-5">
          <SectionHeading className="w-1/2 sm:w-auto">
            Blogs & Insights
          </SectionHeading>
          <PrimaryButton>View All</PrimaryButton>
        </div>
      </div>
      <div className="container">
        <div className="relative mt-10">
          <SlidersButton
            onPrev={() => swiperRef.current?.slidePrev()}
            onNext={() => swiperRef.current?.slideNext()}
          />
          <Swiper
            className="cursor-grab"
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            slidesPerView={1.12}
            navigation={false}
            spaceBetween={20}
            speed={600}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <BlogsCard />
            </SwiperSlide>
            <SwiperSlide>
              <BlogsCard />
            </SwiperSlide>
            <SwiperSlide>
              <BlogsCard />
            </SwiperSlide>
            <SwiperSlide>
              <BlogsCard />
            </SwiperSlide>
            <SwiperSlide>
              <BlogsCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default BlogsAndInsightsSection;
