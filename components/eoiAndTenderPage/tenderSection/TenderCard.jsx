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
          height={21}
          viewBox="0 0 20 21"
          fill="current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 15.2285V3.35352"
            stroke="current"
            strokeWidth="1.5"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.25 11.4785L10 15.2285L13.75 11.4785"
            stroke="current"
            strokeWidth="1.5"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 15.8535V17.1035C15 17.791 14.4375 18.3535 13.75 18.3535H6.25C5.5625 18.3535 5 17.791 5 17.1035V15.8535"
            stroke="current"
            strokeWidth="1.5"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default TenderCard;
