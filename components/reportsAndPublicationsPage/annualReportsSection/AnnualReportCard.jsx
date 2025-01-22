import Image from "next/image";

function AnnualReportCard({ card }) {
  return (
    <div
      data-aos="fade-up"
      className="group flex items-center justify-start gap-[15px] rounded-[8px] border border-gray-50 bg-white py-3 pl-[10px] pr-5 shadow-sm shadow-white"
    >
      <div className="overflow-hidden rounded-[4px]">
        <Image
          src={card.bannerImage}
          width={72}
          height={72}
          alt=""
          className="aspect-square w-[72px] object-contain transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <h4 className="text-[22px] font-medium leading-[32px] text-gray-800">
        {card.title}
      </h4>
      <svg
        className="ml-auto"
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 23V4"
          stroke="#971512"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 17L16 23L22 17"
          stroke="#971512"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 24V26C24 27.1 23.1 28 22 28H10C8.9 28 8 27.1 8 26V24"
          stroke="#971512"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default AnnualReportCard;
