"use client";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function SDGSCard() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="group relative flex min-h-[211px] flex-col items-center overflow-hidden rounded-[4px] text-white shadow-lg transition-all duration-500 hover:shadow-xl md:min-h-[278px] md:cursor-pointer md:rounded-[8px]">
      <div
        className={cn(
          "z-10 flex min-h-full w-full flex-col items-center p-[10px] transition-all duration-500 md:p-5 md:group-hover:items-start md:group-hover:bg-[#FE4C5C]/90",
          `${isClicked ? "bg-[#FE4C5C]/90" : "bg-[#FE4C5C]"}`,
        )}
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
          01
        </p>
        <p className="mb-1 min-h-[54px] text-center text-xs font-semibold uppercase leading-[18px] tracking-[0.48px] transition-all duration-500 md:min-h-min md:text-lg md:leading-[28px] md:tracking-[0.72px] md:group-hover:mb-[5px] md:group-hover:text-left">
          No proverty
        </p>
        <Image
          src="/contributions-sdgs/no-proverty.svg"
          alt="No provery icon"
          width={100}
          height={100}
          className={cn(
            "mb-5 h-[62px] w-[62px] object-contain transition-all duration-500 md:mb-1 md:h-[100px] md:w-[100px] md:group-hover:hidden",
            `${isClicked ? "hidden" : "flex"}`,
          )}
        />
        <p
          className={cn(
            "text-center text-[10px] font-normal leading-[15px] transition-all duration-500 md:text-left md:group-hover:flex md:group-hover:text-sm md:group-hover:leading-[22px]",
            `${isClicked ? "flex" : "hidden"}`,
          )}
        >
          Eliminate extreme poverty and decrease the number of individuals
          living in poverty.
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
        src="/contributions-sdgs/bg-zero-hunger.jpg"
        alt="No provery image"
        width={158}
        height={192}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-500"
      />
    </div>
  );
}

export default SDGSCard;
