import Image from "next/image";
import Link from "next/link";

function MonthlyGiftCard({ card }) {
  return (
    <div data-aos="fade-up" className="group flex flex-col gap-[15px] md:gap-5">
      <div className="relative overflow-hidden rounded-[8px]">
        <Image
          src={card.imageLink}
          alt={card.title}
          width={410}
          height={238}
          className="aspect-[300/207] w-full object-cover transition-all duration-300 group-hover:scale-105 md:aspect-[410/238]"
        />
        <div className="absolute left-[10px] top-[10px] z-10 rounded-[80px] bg-white px-[10px] py-2 text-xs leading-[18px] text-gray-800 md:px-4 md:py-2 md:text-sm md:leading-[22px]">
          {card.category}
        </div>
      </div>
      <div className="flex flex-col">
        <h5 className="mb-[10px] text-[22px] font-semibold leading-[28px] text-gray-800 md:line-clamp-2 md:text-2xl md:leading-[36px]">
          {card.title}
        </h5>
        <p className="mb-[30px] line-clamp-3 text-base font-normal leading-[26px] text-gray-600 md:mb-10">
          {card.details}
        </p>
        <Link
          href="/"
          className="flex w-fit flex-row items-center gap-2 border-b-2 border-red-600 stroke-red-600 pb-[10px] text-base font-semibold leading-[26px] text-red-600 transition-all duration-300 hover:border-red-800 hover:stroke-red-800 hover:text-red-800"
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

export default MonthlyGiftCard;
