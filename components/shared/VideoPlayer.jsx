"use client";

import Image from "next/image";
import { useState } from "react";

function VideoPlayer({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div
      data-aos="fade-up"
      className="aspect-[85/50] w-full flex-grow overflow-hidden rounded-[8px] bg-black shadow-xl transition-all duration-300 hover:shadow-2xl"
    >
      {isPlaying ? (
        <iframe
          className="block h-full border-none object-cover"
          width="100%"
          height="100%"
          src={video?.video_link}
          title={video?.video_title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <div
          className="relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-[8px] border-none bg-black"
          onClick={handlePlayClick}
        >
          <Image
            width={850}
            height={482}
            src={video?.video_thumbnail || "/thumbnail.png"}
            alt="Farming transforms video thumbnail"
            className="absolute inset-0 h-full w-full rounded-[8px] object-cover"
          />
          <div
            className={`absolute inset-0 flex w-full items-end ${video?.video_title ? "bg-gradient-to-b from-black/10 to-black/70" : ""}`}
          >
            {video?.video_title && (
              <p className="m-[15px] line-clamp-1 w-full text-xl font-bold leading-[32px] text-white md:mx-10 md:my-[30px] md:line-clamp-2 md:max-w-[600px] md:text-[32px] md:leading-[42px]">
                {video?.video_title}
              </p>
            )}
          </div>
          <div className="absolute z-10 flex h-12 w-12 items-center justify-center rounded-full p-3 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:shadow-md md:h-[76px] md:w-[76px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="white"
              stroke="none"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-play h-8 w-8"
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
