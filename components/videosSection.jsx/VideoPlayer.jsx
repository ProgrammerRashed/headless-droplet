"use client";

import Image from "next/image";
import { useState } from "react";

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="aspect-[330/186] w-full flex-grow overflow-hidden rounded-[8px] shadow-xl transition-all duration-300 hover:shadow-2xl md:aspect-auto md:h-[482px] lg:h-auto">
      {isPlaying ? (
        <video
          className="block h-full border-none object-cover"
          width="100%"
          height="100%"
          src="/videos/hero-banner.mp4"
          title="Farming transforms video"
          controls={true}
          autoPlay
        ></video>
      ) : (
        <div
          className="relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-[8px] border-none bg-black"
          onClick={handlePlayClick}
        >
          <Image
            width={850}
            height={482}
            src="/videos/farming-transform/thumbnails/video-thumbnail-2.png"
            alt="Farming transforms video thumbnail"
            className="absolute inset-0 h-full w-full rounded-[8px] object-cover"
          />
          <div className="absolute inset-0 flex w-full items-end bg-gradient-to-b from-black/10 to-black/70">
            <p className="m-[15px] line-clamp-1 w-full text-xl font-bold leading-[32px] text-white md:mx-10 md:my-[30px] md:line-clamp-2 md:max-w-[600px] md:text-[32px] md:leading-[42px]">
              Developing young people's potential in agriculture
            </p>
          </div>
          <div className="absolute z-10 flex h-12 w-12 items-center justify-center rounded-full p-3 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:shadow-md md:h-[76px] md:w-[76px]">
            <svg
              className="h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="white"
              stroke="none"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-play"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
