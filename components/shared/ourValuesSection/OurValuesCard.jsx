import { cn } from "@/lib/utils";
import Image from "next/image";

function OurValuesCard({ card, index }) {
  return (
    <div
      data-aos="fade-up"
      className={`value-card group flex cursor-pointer flex-col border-b border-gray-50 bg-white p-5 shadow-sm transition-all duration-1000 lg:h-[238px] lg:justify-between lg:hover:bg-green-400 ${index === (2 || 5) ? "border-r-0" : "xl:border-r"}`}
    >
      <h5 className="mb-[10px] rounded text-lg font-medium leading-[28px] text-gray-800 lg:text-[22px] lg:leading-[32px]">
        {card.title}
      </h5>
      <p className="value-card--details mb-6 flex-grow text-base font-normal leading-[26px] text-gray-600 lg:invisible lg:hidden lg:flex-grow-0 lg:text-sm lg:leading-[22px] lg:opacity-0 lg:group-hover:visible lg:group-hover:block lg:group-hover:opacity-100">
        {card.details}
      </p>
      <Image
        src={card.iconLink}
        alt={card.title}
        width={80}
        height={80}
        className="value-card--icon h-[60px] w-[60px] object-contain lg:visible lg:block lg:h-20 lg:w-20 lg:opacity-100 lg:group-hover:invisible lg:group-hover:hidden lg:group-hover:opacity-0"
      />
    </div>
  );
}

export default OurValuesCard;
