import VideoPlayer from "@/components/shared/VideoPlayer";
import extractYouTubeEmbedURL from "@/utils/extractYouTubeEmbedURL";
import React from "react";

function AboutUsSection({ data }) {
const {title, description} =data?.data
  const videoDetails = {
    video_link: extractYouTubeEmbedURL(data?.data?.video_link)
    , video_title:"" ,
    video_thumbnail: data?.data?.video_thumbnail
  }
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
            {description}
          </p>
          <VideoPlayer video={videoDetails} />
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
