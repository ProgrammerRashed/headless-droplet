import Image from "next/image";
import Link from "next/link";

function ImpactSliderCard({ card }) {
  return (
    <div className="flex flex-col items-stretch lg:flex-row lg:justify-between lg:gap-10 xl:gap-[60px]">
      <div className="relative overflow-hidden rounded-[8px] lg:flex-grow">
        <Image
          src={card.bannerImage}
          width={615}
          height={338}
          alt=""
          className="aspect-[330/207] w-full object-cover transition-all duration-300 group-hover:scale-105 lg:h-full lg:w-full"
        />
        <div className="absolute left-[10px] top-[10px] z-10 rounded-[80px] bg-white px-[10px] py-2 text-xs leading-[18px] md:px-4 md:py-2 md:text-sm md:leading-[22px]">
          {card.category}
        </div>
      </div>
      <div className="flex flex-grow flex-col p-[15px] lg:w-1/2 lg:max-w-[615px] lg:py-0">
        <h4 className="mb-[10px] text-[22px] font-semibold leading-[28px] text-gray-800 md:text-[32px] md:font-bold md:leading-[42px] lg:mb-5">
          {card.title}
        </h4>
        <p className="sm: mb-[30px] line-clamp-6 text-base font-normal leading-[26px] text-gray-600 xl:line-clamp-none">
          {card.details}
        </p>
        <Link
          href="/"
          className="mt-auto flex w-fit flex-row items-center gap-2 border-b-2 border-red-500 stroke-red-500 pb-[10px] text-base font-semibold leading-[26px] text-red-500"
        >
          <span>{card.buttonDetails.title}</span>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2181_7358)">
              <path
                d="M8 14L12 10L8 6"
                stroke="current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2181_7358">
                <rect width={20} height={20} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default ImpactSliderCard;
