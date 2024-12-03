import Image from "next/image";

function VideoListCard({ video, onSelectedVideo }) {
  return (
    <div
      onClick={() => onSelectedVideo(video)}
      className="mb-[10px] cursor-pointer border-gray pb-[10px] last-of-type:mb-0 last-of-type:border-none lg:border-b"
    >
      <div className="flex flex-row items-center gap-5 rounded-[4px] border-2 border-transparent p-2 transition-all duration-300 hover:border-dark-light hover:bg-surface">
        <div className="relative md:h-[80px] md:min-w-[120px] lg:h-[99px] lg:min-w-[160px]">
          <Image
            src={video.videoThumbNail}
            alt={video.videoTitle}
            width={160}
            height={99}
            className="relative h-full w-full rounded-[4px] object-cover"
          />
          <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full p-[14px] shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-md">
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
              className="feather feather-play h-3 w-3"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
        <p className="line-clamp-2 font-medium text-dark md:text-lg md:leading-normal lg:text-[22px] lg:leading-[32px]">
          {video.videoTitle}
        </p>
      </div>
    </div>
  );
}

export default VideoListCard;
