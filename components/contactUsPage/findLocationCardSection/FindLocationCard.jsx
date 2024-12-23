import Image from "next/image";
import React from "react";

function FindLocationCard() {
  return (
    <div className="group flex w-full flex-col rounded-[4px] bg-white shadow shadow-gray-50">
      <div className="overflow-hidden rounded-t-[4px]">
        <Image
          src="/contact-us-page/location-cards/location-1.jpg"
          width={630}
          height={220}
          alt=""
          className="aspect-[33/16] w-full object-cover transition-all duration-700 group-hover:scale-105 xl:aspect-[63/22]"
        />
      </div>
      <div className="flex flex-col gap-[10px] p-5">
        <h4 className="text-xl font-semibold leading-[32px] text-gray-800 md:text-2xl md:leading-[36px]">
          Switzerland (HQ)
        </h4>
        <p className="text-base font-normal leading-[26px] text-gray-600">
          B5.5, Rosentalstrasse 67 CH-4058 Basel Switzerland
        </p>
        <p className="text-base font-normal leading-[26px] text-gray-600">
          +41 61 323 5634
        </p>
        <p className="text-base font-normal leading-[26px] text-gray-600">
          syngenta.foundation@syngenta.com
        </p>
      </div>
    </div>
  );
}

export default FindLocationCard;
