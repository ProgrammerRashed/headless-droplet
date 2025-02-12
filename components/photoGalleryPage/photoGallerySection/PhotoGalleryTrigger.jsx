import Image from "next/image";

function PhotoGalleryTrigger({ gallery }) {
  return (
    <div className="group flex flex-col items-start gap-5">
      <div className="relative grid h-[240px] w-full grid-cols-2 grid-rows-2 gap-[5px]">
        {gallery?.gallery?.slice(0, 3).map((image) => (
          <div
            key={image.id}
            className="w-full overflow-hidden rounded-[8px] first-of-type:row-span-2"
          >
            <Image
              src={image.imageUrl || "https://staging.notionhive.com/wordpress/saf/wp-content/uploads/2025/02/Blog-Thrumbnai-2.png"}
              height={240}
              width={200}
              alt={image.caption}
              className="h-full w-full object-cover transition-all duration-300 group-hover:brightness-75"
            />
          </div>
        ))}
        <div className="absolute bottom-1/4 right-1/4 z-10 flex w-max translate-x-1/2 translate-y-1/2 flex-row items-center justify-center gap-1 rounded-[40px] bg-[#1C191799] px-4 py-[10px] transition-all duration-300 group-hover:bg-[#1C1917]">
          <svg
            className="h-[18px] w-[18px]"
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.25 2.25H3.75C2.92157 2.25 2.25 2.92157 2.25 3.75V14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H14.25C15.0784 15.75 15.75 15.0784 15.75 14.25V3.75C15.75 2.92157 15.0784 2.25 14.25 2.25Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.375 7.5C6.99632 7.5 7.5 6.99632 7.5 6.375C7.5 5.75368 6.99632 5.25 6.375 5.25C5.75368 5.25 5.25 5.75368 5.25 6.375C5.25 6.99632 5.75368 7.5 6.375 7.5Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.75 11.25L12 7.5L3.75 15.75"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="flex-shrink-0 text-sm font-normal leading-[22px] text-white">
            {gallery?.gallery?.length} photos
          </span>
        </div>
      </div>
      <h4 className="line-clamp-1 text-[22px] font-medium leading-[32px] text-gray-800">
        {gallery?.caption}
      </h4>
    </div>
  );
}

export default PhotoGalleryTrigger;
