"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useRef } from "react";
import SectionHeading from "@/components/sectionHeader/SectionHeading";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import SlidersButton from "@/components/shared/buttons/SlidersButton";
import BlogsCard from "@/components/shared/blogsAndInsightsSection/BlogsCard";
import MonthlyGiftCard from "@/components/shared/monthlyGiftSection/MonthlyGiftCard";
import ImpactStoryCard from "@/components/shared/monthlyGiftSection/ImpactStoryCard";

function RealatedStoriesSliderSection({ data, blogs }) {
  const { sectionHeading, btnDetails, largeScreenCardView = 3 } = data;
  const swiperRef = useRef(null);
  
  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        <div className="flex w-full flex-row items-center justify-between">
          <div data-aos="fade-up">
            <SectionHeading>{sectionHeading}</SectionHeading>
          </div>
          <div
            data-aos="fade-up"
            className="flex w-[65%] justify-end sm:w-auto"
          >
            {btnDetails && (
              <PrimaryButton className="capitalize">
                {btnDetails.title}
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>
      <div className="slider-container">
        <div className="relative mt-10">
          <SlidersButton
            onPrev={() => swiperRef.current?.slidePrev()}
            onNext={() => swiperRef.current?.slideNext()}
          />
          <Swiper
            className="z-10 cursor-grab"
            breakpoints={{
              640: {
                slidesPerView: 2.1,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: largeScreenCardView,
                spaceBetween: 30,
              },
            }}
            slidesPerView={1.13}
            navigation={false}
            spaceBetween={20}
            speed={600}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {blogs?.map((blog) => (
              <SwiperSlide key={blog.id}>
                <ImpactStoryCard key={blog.id} card={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default RealatedStoriesSliderSection;
