"use client";

import { useState } from "react";
import SectionHeading from "../../sectionHeader/SectionHeading";

import VideoList from "./VideoList";
import VideoPlayer from "../../shared/VideoPlayer";
import VideoSlider from "./VideoSlider";

function VideosSection({ sectionHeading, videos }) {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const handleSelectedVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <section className="my-[50px] md:py-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading className="text-center">
            {sectionHeading}
          </SectionHeading>
        </div>
        <div className="mt-[50px] hidden h-[482px] w-full justify-between md:flex md:h-auto md:flex-col md:gap-10 lg:h-[482px] lg:flex-row lg:gap-5 xl:flex-row xl:gap-[30px]">
          <VideoPlayer key={selectedVideo.id} video={selectedVideo} />
          <VideoList onSelectedVideo={handleSelectedVideo} videos={videos} />
        </div>
        <VideoSlider videos={videos} />
      </div>
    </section>
  );
}

export default VideosSection;
