import Image from "next/image";
import React from "react";

function ImpactSoriesGridCard({ card }) {
  return (
    <div data-aos="fade-up" className="group flex flex-col bg-white">
      <div className="relative mb-[15px] overflow-hidden rounded-[8px]">
        <Image
          src={card.bannerImage || "/thumbnail.png"}
          height={238}
          width={410}
          alt={card.title}
          className="aspect-[330/208] w-full object-cover transition-all duration-300 group-hover:scale-105"
        />
        <span className="absolute left-[10px] top-[10px] rounded-[80px] bg-white px-[10px] py-[7px] text-xs font-normal leading-[18px] text-gray-800">
          {card.category}
        </span>
      </div>
      <div className="flex w-full flex-col">
        <h4 className="mb-[10px] text-[22px] font-semibold leading-[28px] text-gray-800">
          {card.title}
        </h4>
        <p className="mb-[30px] line-clamp-3 text-base font-normal leading-[26px] text-gray-600">
          {card.details}
        </p>
      </div>
    </div>
  );
}

export default ImpactSoriesGridCard;
