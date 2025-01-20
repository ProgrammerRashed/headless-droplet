import Image from "next/image";
import React from "react";

function FindLocationCard({ country }) {
  return (
    <div
      data-aos="fade-up"
      className="group flex w-full cursor-pointer flex-col rounded-[4px] bg-white shadow shadow-gray-50"
    >
      <div className="overflow-hidden rounded-t-[4px]">
        <Image
          src={country.imageLink}
          width={630}
          height={220}
          alt=""
          className="aspect-[33/16] w-full object-cover transition-all duration-700 group-hover:scale-105 xl:aspect-[63/22]"
        />
      </div>
      <div className="flex flex-col gap-[10px] p-4 md:p-5">
        <h4 className="break-words text-xl font-semibold leading-[32px] text-gray-800 md:text-2xl md:leading-[36px]">
          {country.country}
        </h4>
        <p className="break-words text-base font-normal leading-[26px] text-gray-600 md:min-h-[78px] lg:min-h-[52px]">
          {country.address}
        </p>
        <p className="break-words text-base font-normal leading-[26px] text-gray-600">
          {country.phone}
        </p>
        <p className="break-words text-base font-normal leading-[26px] text-gray-600">
          {country.email}
        </p>
      </div>
    </div>
  );
}

export default FindLocationCard;
