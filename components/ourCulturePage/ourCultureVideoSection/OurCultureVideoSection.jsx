"use client";
import extractYouTubeEmbedURL from "@/utils/extractYouTubeEmbedURL";
import Image from "next/image";
import { useState } from "react";

function OurCultureVideoSection({ data }) {
const video = data?.data?.video[0]
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section data-aos="fade-up">
      <div className="aspect-[1440/810] w-full flex-grow overflow-hidden transition-all duration-300">
        {isPlaying ? (
          <iframe
            className="block h-full border-none object-cover"
            width="100%"
            height="100%"
            src={extractYouTubeEmbedURL(video?.video_link)}
            title={video?.video_title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            className="relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden border-none bg-black"
            onClick={handlePlayClick}
          >
            <Image
              width={850}
              height={482}
              src={video?.video_thumbnail || "/thumbnail.png"}
              alt="Farming transforms video thumbnail"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className={`absolute inset-0 flex w-full items-end ${video?.video_title ? "bg-gradient-to-b from-black/10 to-black/70" : ""}`}
            >
              {video?.video_title && (
                <p
                  data-aos="fade-up"
                  className="w-full p-4 text-left text-base font-bold leading-normal tracking-[1%] text-white sm:p-8 sm:text-center sm:text-2xl lg:p-10 lg:text-5xl lg:font-bold lg:leading-[60px]"
                >
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
    </section>
  );
}

export default OurCultureVideoSection;
