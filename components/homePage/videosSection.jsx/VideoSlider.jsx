"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import VideoPlayer from "../../shared/VideoPlayer";

function VideoSlider({ videos }) {
  return (
    <div className="slider-container !ml-0">
      <div className="mt-10 md:hidden">
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
          }}
          slidesPerView={1.13}
          navigation={false}
          spaceBetween={20}
          speed={600}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <VideoPlayer video={video} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default VideoSlider;
