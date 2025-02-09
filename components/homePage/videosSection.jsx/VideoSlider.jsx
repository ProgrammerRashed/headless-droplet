"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import VideoGalleryPlayer from "@/components/videoGalleryPage/videoGallerySection/VideoGalleryPlayer";
import { useRef, useState } from "react";
import SliderButtonTop from "@/components/shared/buttons/SliderButtonTop";

function VideoSlider({ videos }) {
  const swiperRef = useRef(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const handlePlay = (id) => {
    setCurrentlyPlaying(id);
  };

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
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {videos.map((video) => (
            <SwiperSlide key={video._id}>
              <VideoGalleryPlayer
                key={video._id}
                video={video}
                isPlaying={currentlyPlaying === video._id}
                onPlay={() => handlePlay(video._id)}
              />
            </SwiperSlide>
          ))}
          <div className="mt-5 sm:hidden">
            <SliderButtonTop
              variation="small"
              onPrev={() => {
                swiperRef.current?.slidePrev();
                handlePlay(null);
              }}
              onNext={() => {
                swiperRef.current?.slideNext();
                handlePlay(null);
              }}
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default VideoSlider;
