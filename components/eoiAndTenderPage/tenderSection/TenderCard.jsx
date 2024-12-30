import PrimaryButton from "@/components/shared/buttons/PrimaryButton";

function TenderCard({ card }) {
  return (
    <div
      data-aos="fade-up"
      className="flex w-full flex-col items-start justify-between gap-5 border-y border-gray-50 bg-white p-5 sm:gap-8 sm:px-[30px] sm:py-10 lg:flex-row lg:items-center lg:gap-10"
    >
      <div className="flex flex-col">
        <h4 className="mb-[10px] line-clamp-4 text-[22px] font-medium leading-[32px] md:line-clamp-2 lg:line-clamp-1">
          {card.title}
        </h4>
        <p className="mb-1 text-xs font-semibold leading-[18px] text-gray-800">
          Date of Issue: <span className="font-normal">{card.issueDate}</span>
        </p>
        <p className="text-xs font-semibold leading-[18px] text-gray-800">
          Closing Date: <span className="font-normal">{card.closingDate}</span>
        </p>
      </div>
      <button className="flex w-fit flex-shrink-0 flex-row items-center gap-2 rounded-full border border-red-600 stroke-red-600 px-6 py-[13px] text-sm font-semibold leading-[22px] text-red-600 transition-all duration-300 hover:bg-red-900 hover:stroke-white hover:text-white md:px-6 md:py-[15px] md:text-base md:leading-[24px]">
        <span>Download Tender</span>
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
      </button>
    </div>
  );
}

export default TenderCard;
