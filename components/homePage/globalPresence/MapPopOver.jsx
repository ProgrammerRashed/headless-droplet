import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MapPopOver({ styles }) {
  return (
    <div
      style={styles}
      className={cn("absolute w-[252px] rounded-[8px] bg-white shadow-md")}
    >
      <div className="flex w-full flex-col p-[15px]">
        <Image
          src="/blogs-and-insights/blog-2.jpg"
          alt=""
          width={220}
          height={140}
          className="mb-4 aspect-[22/14] w-full rounded-[4px] object-cover"
        />
        <div className="mb-1 flex items-center justify-start gap-1.5">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 8.33325C17 14.1666 9.5 19.1666 9.5 19.1666C9.5 19.1666 2 14.1666 2 8.33325C2 6.34413 2.79018 4.43647 4.1967 3.02995C5.60322 1.62343 7.51088 0.833252 9.5 0.833252C11.4891 0.833252 13.3968 1.62343 14.8033 3.02995C16.2098 4.43647 17 6.34413 17 8.33325Z"
              fill="#5B5755"
            />
            <path
              d="M9.5 11.8333C11.433 11.8333 13 10.2662 13 8.33325C13 6.40026 11.433 4.83325 9.5 4.83325C7.567 4.83325 6 6.40026 6 8.33325C6 10.2662 7.567 11.8333 9.5 11.8333Z"
              fill="white"
            />
          </svg>
          <h4 className="text-lg font-semibold uppercase leading-[28px] text-gray-800">
            Kenya
          </h4>
        </div>
        <p className="mb-4 text-sm font-normal leading-[22px] text-gray-600">
          Female beneficiaries rose to 45%, up from 29%, advancing our 2025
          parity goal.
        </p>
      </div>
      <Link
        href=""
        className="text-red- flex items-center justify-between border-t border-gray-50 px-6 py-3 text-base font-semibold leading-[24px] text-red-600 transition-all duration-300 hover:border-gray-400/50 hover:text-red-dark"
      >
        <span>Learn More</span>
        <ChevronRight className="w-5" />
      </Link>
    </div>
  );
}

export default MapPopOver;
