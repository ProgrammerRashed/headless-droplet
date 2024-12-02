import VideoListCard from "./VideoListCard";

function VideoList({ videos, onSelectedVideo }) {
  return (
    <div
      data-aos="fade-up"
      data-lenis-prevent
      className="scrollbar-thin relative md:grid md:w-full md:max-w-max md:grid-cols-2 md:gap-5 lg:flex lg:h-full lg:min-w-[413px] lg:max-w-[413px] lg:flex-col lg:gap-[10px] lg:overflow-y-auto lg:pr-3"
    >
      {videos.map((video) => (
        <VideoListCard
          key={video.id}
          video={video}
          onSelectedVideo={onSelectedVideo}
        />
      ))}
    </div>
  );
}

export default VideoList;
