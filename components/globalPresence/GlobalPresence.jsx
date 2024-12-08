import React from "react";
import GlobalMap from "./GlobalMap";
import SectionHeading from "../sectionHeader/SectionHeading";
import Image from "next/image";

function GlobalPresence() {
  return (
    <section className="my-[50px] md:my-[100px]">
      <div className="container">
        <SectionHeading className="mb-5 text-center md:mb-[50px]">
          Our Global Presence
        </SectionHeading>
        <div className="mx-auto flex w-full max-w-[970px] flex-col items-center lg:flex-row lg:gap-20">
          <div className="mb-5 w-full rounded-[8px] border border-gray-50 bg-surface p-[10px] sm:mb-10 lg:mb-0 lg:max-w-[180px] lg:border-none lg:bg-transparent lg:p-0">
            <div className="flex flex-wrap items-center justify-center gap-[10px] lg:flex-col">
              <div className="flex items-center justify-center gap-1 rounded-[4px] bg-white p-2 shadow-lg lg:w-full">
                <Image
                  src="/global-presence/country-flag/switzerland.png"
                  width={15}
                  height={15}
                  alt="Switzerland"
                  className="h-[15px] w-[15px] object-contain"
                />
                <p className="text-xs font-semibold leading-[18px] text-gray-600">
                  Switzerland (HQ)
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 rounded-[4px] bg-white p-2 shadow-lg lg:w-full">
                <Image
                  src="/global-presence/country-flag/bangladesh.png"
                  width={15}
                  height={15}
                  alt="Switzerland"
                  className="h-[15px] w-[15px] object-contain"
                />
                <p className="text-xs font-semibold uppercase leading-[18px] text-gray-600">
                  Bangladesh
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 rounded-[4px] bg-white p-2 shadow-lg lg:w-full">
                <Image
                  src="/global-presence/country-flag/india.png"
                  width={15}
                  height={15}
                  alt="Switzerland"
                  className="h-[15px] w-[15px] object-contain"
                />
                <p className="text-xs font-semibold uppercase leading-[18px] text-gray-600">
                  India
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 rounded-[4px] bg-white p-2 shadow-lg lg:w-full">
                <Image
                  src="/global-presence/country-flag/kenya.png"
                  width={15}
                  height={15}
                  alt="Switzerland"
                  className="h-[15px] w-[15px] object-contain"
                />
                <p className="text-xs font-semibold uppercase leading-[18px] text-gray-600">
                  Kenya
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center">
            <GlobalMap />
            <div className="mt-5 flex w-full max-w-[400px] items-center gap-3 rounded-[10px] border border-gray-50 bg-surface p-2 sm:mt-10">
              <div className="flex items-center justify-center gap-1">
                <div className="h-[18px] w-[18px] rounded-full border-[2px] border-gray-50 bg-green-600"></div>
                <p className="w-fit text-xs font-normal leading-[18px] text-gray-600">
                  Current Countries
                </p>
              </div>
              <div className="h-4 w-0.5 rounded-full bg-gray-50"></div>
              <div className="flex items-center justify-center gap-1">
                <div className="h-[18px] w-[18px] rounded-full border-[2px] border-gray-50 bg-green-400"></div>
                <p className="w-fit text-xs font-normal leading-[18px] text-gray-600">
                  Previously Covered Countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalPresence;
