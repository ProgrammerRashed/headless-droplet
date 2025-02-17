"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

function SDGSCard({ card }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
      className="contribution-card group relative flex min-h-[193px] flex-col items-center overflow-hidden rounded-[4px] text-white shadow-lg transition-all duration-500 hover:shadow-xl md:min-h-[250px] md:cursor-pointer md:rounded-[8px]"
    >

      
      <div
    style={{
      backgroundColor: card.bg_color_class,
      opacity: isHovered ? 0.9 : 1, 
      transition: "all 0.5s ease",

    }}
        className={
          `z-10 flex min-h-full w-full flex-col items-center p-[10px] transition-all duration-500 md:p-5 md:group-hover:items-start md:group-hover:bg-opacity-90    ${isClicked ? "bg-opacity-90" : "bg-opacity-100"}`}
      >
        <button
          onClick={() => setIsClicked(false)}
          className={cn(
            "mb-[10px] w-full items-center justify-end gap-1 text-xs font-medium leading-[18px] transition-all duration-500",
            `${isClicked ? "flex" : "hidden"}`,
          )}
        >
          <span>Close</span>
          <svg
            width={10}
            height={9}
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 2313">
              <line
                id="Line 39"
                x1="1.20611"
                y1="0.660588"
                x2="8.82391"
                y2="8.27839"
                stroke="white"
                strokeWidth="1.5"
              />
              <line
                id="Line 40"
                y1="-0.75"
                x2="10.7732"
                y2="-0.75"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 9 1.19141)"
                stroke="white"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </button>
        <p className="mb-1 text-lg font-medium uppercase leading-[24px] transition-all duration-500 md:text-[32px] md:leading-[42px] md:group-hover:hidden">
          {card.serial}
        </p>
        <p
          className={`contribution-card--title mb-1 text-center text-xs font-semibold uppercase leading-[18px] tracking-[4%] transition-all duration-500 md:h-[56px] md:text-lg md:leading-[28px] md:tracking-[0.72px] md:group-hover:mb-[5px] md:group-hover:h-auto md:group-hover:text-left ${isClicked ? "h-auto" : "h-[36px]"}`}
        >
          {card.title}
        </p>
        <Image
          src={card.icon || "/thumbnail.png"}
          alt="No provery icon"
          width={100}
          height={100}
          className={cn(
            "contribution-card--icon mb-5 h-[62px] w-[62px] object-contain transition-all duration-500 md:mb-1 md:h-[100px] md:w-[100px] md:group-hover:hidden",
            `${isClicked ? "hidden" : "flex"}`,
          )}
        />
        <p
          className={cn(
            "contribution-card--details text-center text-[10px] font-normal leading-[15px] transition-all duration-500 md:text-left md:group-hover:flex md:group-hover:text-sm md:group-hover:leading-[22px]",
            `${isClicked ? "flex" : "hidden"}`,
          )}
        >
          {card.details}
        </p>
        <button
          onClick={() => setIsClicked(true)}
          className={cn(
            "w-full items-center justify-center gap-1 border-t border-white/20 pt-1 text-xs font-medium leading-[18px] transition-all duration-500 md:hidden",
            `${isClicked ? "hidden" : "flex"}`,
          )}
        >
          <span>More</span>
          <svg
            width={11}
            height={10}
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="chevron_right">
              <path
                id="Vector"
                d="M2.32422 3.5L5.32422 6.5L8.32422 3.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
      <Image
        src={card.bg_img || "/thumbnail.png"}
        alt={card.title}
        width={158}
        height={192}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-500"
      />
    </div>
  );
}

export default SDGSCard;
