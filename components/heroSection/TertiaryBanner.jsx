import Image from "next/image";
import React from "react";
import BreadCrumb from "../shared/BreadCrumb";
import { cn } from "@/lib/utils";

function TertiaryBanner({ data }) {
  const { bannerCover } = data;
  return (
    <section className="relative h-[254px] w-full md:h-[441px]">
      <div className={cn("z-0 flex h-full w-full pt-[68px] xl:pt-[141px]")}>
        <div className="relative flex h-[186px] flex-grow flex-col items-center justify-center md:h-[300px]">
          <div
            data-aos="fade-right"
            className="container absolute top-[10px] md:top-[15px]"
          >
            <BreadCrumb colorScheme="dark" />
          </div>
        </div>
      </div>
      {bannerCover && (
        <Image
          src={bannerCover || "/thumbnail.png"}
          width={1440}
          height={441}
          alt="Primary banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
      )}
    </section>
  );
}

export default TertiaryBanner;
