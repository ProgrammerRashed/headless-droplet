import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import formatDate from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";

function FeaturedCard({ card }) {
  const cardData = card?.node;
  return (
    <div data-aos="fade-up" className="group flex flex-col bg-white">
      <div className="relative flex items-center justify-center rounded-t-[8px] bg-gray-50 p-[10px] lg:p-4">
        <div className="w-full overflow-hidden rounded-[4px]">
          <Image
            src={cardData?.featuredImage?.node?.mediaItemUrl || "/thumbnail.png"}
            height={372}
            width={467}
            className="aspect-[280/317] w-full object-cover transition-all duration-300 group-hover:scale-105 lg:aspect-[372/467]"
            alt={cardData?.title}
          />
        </div>
        <span className="absolute left-[22px] top-[22px] rounded-[80px] bg-white px-[10px] py-[7px] text-xs font-normal leading-[18px] text-gray-800 lg:left-[30px] lg:top-[30px] lg:px-4 lg:py-2 lg:text-sm lg:leading-[22px]">
          {cardData?.customCategory}
        </span>
      </div>
      <div className="flex flex-col p-5 lg:p-[30px]">
        <h3 className="mb-[10px] line-clamp-2 text-lg font-medium leading-[28px] text-gray-800 lg:text-2xl lg:font-semibold lg:leading-[36px]">
          {cardData?.title}
        </h3>
        <p className="mb-5 text-sm font-normal leading-[22px] lg:mb-10">
          {formatDate(cardData?.customDate ||cardData?.date, "full" )}
        </p>
        <Link
          href={cardData?.pdfFile}
          target="_blank"
          className="flex w-fit flex-row items-center gap-2 rounded-full border border-red-600 stroke-red-600 px-6 py-[13px] text-sm font-semibold leading-[22px] text-red-600 transition-all duration-300 hover:bg-red-900 hover:stroke-white hover:text-white md:px-6 md:py-[15px] md:text-base md:leading-[24px]"
        >
          <span>Download PDF</span>
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
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCard;
