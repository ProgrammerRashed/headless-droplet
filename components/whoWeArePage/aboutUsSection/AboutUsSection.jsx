"use client"
import VideoPlayer from "@/components/shared/VideoPlayer";
import extractYouTubeEmbedURL from "@/utils/extractYouTubeEmbedURL";
import React, { useState } from "react";

function AboutUsSection({ data }) {
  const { title, description } = data?.data;
  
  const videoDetails = {
    video_link: extractYouTubeEmbedURL(data?.data?.video_link),
    video_title: "",
    video_thumbnail: data?.data?.video_thumbnail,
  };

  // State to manage the visibility of the full description
  const [isExpanded, setIsExpanded] = useState(false);

  // Limit the description to 490 characters if not expanded
  const truncatedDescription = description?.slice(0, 490);

  const handleToggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="my-[50px] md:my-[100px]">
      <div className="container !max-w-[1000px]">
        <div className="flex flex-col">
          <h3
            data-aos="fade-up"
            className="text-gray-800 border-gray-50 mb-5 border-b pb-5 text-xl font-semibold leading-[32px] md:mb-6 md:pb-6 md:text-2xl md:leading-[36px]"
          >
            {title}
          </h3>
          <p
            data-aos="fade-up"
            className="text-gray-600 mb-10 text-base font-normal leading-[26px]"
          >
            {isExpanded ? description : truncatedDescription}
            {description?.length > 490 && (
              <button
                onClick={handleToggleDescription}
                className="text-red-900 ml-2 font-semibold cursor-pointer"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </p>
          <VideoPlayer video={videoDetails} />
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
