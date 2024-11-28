import VideoListCard from "./VideoListCard";

function VideoList() {
  return (
    <div className="scrollbar-thin relative md:grid md:w-full md:max-w-max md:grid-cols-2 md:gap-5 lg:flex lg:h-full lg:min-w-[413px] lg:max-w-[413px] lg:flex-col lg:gap-[10px] lg:overflow-y-auto lg:pr-2">
      <VideoListCard />
      <VideoListCard />
      <VideoListCard />
      <VideoListCard />
    </div>
  );
}

export default VideoList;
