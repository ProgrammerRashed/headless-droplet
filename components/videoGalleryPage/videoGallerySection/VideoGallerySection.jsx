"use client";

import { useState } from "react";
import VideoGalleryPlayer from "./VideoGalleryPlayer";
import TabItems from "@/components/projectsAndProgramsPage/tabItems/TabItems";
import extractYouTubeEmbedURL from "@/utils/extractYouTubeEmbedURL";

function VideoGallerySection({ data }) {
  const { videos } = data?.data;
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  // Create unique array of years from videos
  const years = [...new Set(videos.map(video => video.video_year))]
    .sort((a, b) => b - a) // Sort years in descending order
    .map(year => ({
      slug: year.trim(),
      value: year.trim()
    }));

  // Set initial year if not set
  if (!selectedYear && years.length > 0) {
    setSelectedYear(years[0].slug);
  }

  const handlePlay = (id) => {
    setCurrentlyPlaying(id);
  };

  // Filter videos based on selected year
  const filteredVideos = videos.filter(video => 
    video.video_year.trim() === selectedYear
  );

  return (
    <section className="py-[50px] md:py-[100px]">
      <div className="container">
        <div className="mb-5 md:mb-10">
          <TabItems 
            items={years}
            tabItems={selectedYear}
            setTabItems={setSelectedYear}
          />
        </div>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
          {filteredVideos.map((video) => (
            <VideoGalleryPlayer
              key={video._id}
              video={{
                id: video._id,
                video_link: extractYouTubeEmbedURL(video.video_link),
                video_thumbnail: video.video_thumbnail,
                video_title: video.video_title
              }}
              isPlaying={currentlyPlaying === video._id}
              onPlay={() => handlePlay(video._id)}
            />
          ))}

        </div>
        <p    data-aos="fade-up" className="mt-10 italic text-right">All images, videos, and assets are the property of SAF. Usage requires proper attribution to SAF. </p>

      </div>
    </section>
  );
}

export default VideoGallerySection;
