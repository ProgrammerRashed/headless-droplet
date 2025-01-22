import Image from "next/image";
import React from "react";
import BreadCrumb from "../shared/BreadCrumb";
import { cn } from "@/lib/utils";

function SecondaryBanner({ data }) {
  const { sectionHeading, bannerCover } = data;
  return (
    <section className="relative h-[254px] w-full md:h-[368px] 0.5xl:h-[441px]">
      <div
        className={cn(
          "z-0 flex h-full w-full pt-[68px] 0.5xl:pt-[141px]",
          `${bannerCover ? "bg-green-900/90" : ""}`,
        )}
      >
        <div className="relative flex h-[186px] flex-grow flex-col items-center justify-center md:h-[312px] 0.5xl:h-[300px]">
          <div
            data-aos="fade-right"
            className="container absolute top-[10px] md:top-[15px]"
          >
            <BreadCrumb colorScheme={bannerCover ? "" : "dark"} />
          </div>

          <div className="container">
            <h1
              data-aos="fade-up"
              className={cn(
                "text-center text-4xl font-semibold capitalize leading-[44px] md:text-[70px] md:leading-[90px]",
                `${bannerCover ? "text-white" : "text-gray-600"}`,
              )}
            >
              {sectionHeading}
            </h1>
          </div>
        </div>
      </div>
      {bannerCover && (
        <Image
          src={bannerCover}
          width={1440}
          height={441}
          alt="Primary banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      )}
    </section>
  );
}

export default SecondaryBanner;
