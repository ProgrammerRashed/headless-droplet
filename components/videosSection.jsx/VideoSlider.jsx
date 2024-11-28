"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import VideoPlayer from "./VideoPlayer";

function VideoSlider() {
  return (
    <div className="mt-10 md:hidden">
      <Swiper>
        <SwiperSlide>
          <VideoPlayer />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default VideoSlider;
