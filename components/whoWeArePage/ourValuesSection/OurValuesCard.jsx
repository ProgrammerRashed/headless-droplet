import { cn } from "@/lib/utils";
import Image from "next/image";

function OurValuesCard({ card, index }) {
  return (
    <div
      data-aos="fade-up"
      className={`value-card border-gray-50 lg:hover:bg-green-400 group flex cursor-pointer flex-col border-b bg-white p-5 shadow-sm transition-all duration-1000 lg:h-[238px] lg:justify-between ${index === (2 || 5) ? "border-r-0" : "xl:border-r"}`}
    >
      <h5 className="text-gray-800 mb-[10px] rounded text-lg font-medium leading-[28px] lg:text-[22px] lg:leading-[32px]">
        {card.title}
      </h5>
      <p className="text-gray-600 value-card--details mb-6 text-base font-normal leading-[26px] lg:invisible lg:hidden lg:text-sm lg:leading-[22px] lg:opacity-0 lg:group-hover:visible lg:group-hover:block lg:group-hover:opacity-100">
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
