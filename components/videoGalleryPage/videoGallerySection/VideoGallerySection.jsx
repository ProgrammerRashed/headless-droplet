"use client";

import { useState } from "react";
import VideoGalleryPlayer from "./VideoGalleryPlayer";
import TabItems from "@/components/projectsAndProgramsPage/tabItems/TabItems";

function VideoGallerySection({ data }) {
  const { videos } = data;
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const handlePlay = (id) => {
    setCurrentlyPlaying(id);
  };

  return (
    <section className="py-[50px] md:py-[100px]">
      <div className="container">
        <div className="mb-5 md:mb-10">
          <TabItems
            items={[
              { id: crypto.randomUUID(), country: "2023" },
              { id: crypto.randomUUID(), country: "2022" },
              { id: crypto.randomUUID(), country: "2021" },
              { id: crypto.randomUUID(), country: "2020" },
              { id: crypto.randomUUID(), country: "2019" },
              { id: crypto.randomUUID(), country: "2018" },
              { id: crypto.randomUUID(), country: "2017" },
              { id: crypto.randomUUID(), country: "2016" },
              { id: crypto.randomUUID(), country: "2015" },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
          {videos.map((video) => (
            <VideoGalleryPlayer
              key={video.id}
              video={video}
              isPlaying={currentlyPlaying === video.id}
              onPlay={() => handlePlay(video.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoGallerySection;
