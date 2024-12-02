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

function BlogsAndInsightsSection({ sectionHeading, btnDetails, blogs }) {
  const swiperRef = useRef(null);

  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        <div className="flex w-full flex-row items-center justify-between">
          <div data-aos="fade-up">
            <SectionHeading>{sectionHeading}</SectionHeading>
          </div>
          <div data-aos="fade-up" className="flex w-1/2 justify-end">
            <PrimaryButton className="capitalize">
              {btnDetails.title}
            </PrimaryButton>
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
            slidesPerView={1.13}
            navigation={false}
            spaceBetween={20}
            speed={600}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <BlogsCard blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default BlogsAndInsightsSection;
