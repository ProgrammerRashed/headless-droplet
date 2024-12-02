import Image from "next/image";
import React from "react";
import BreadCrumb from "../shared/BreadCrumb";

function SecondaryBanner({ sectionHeading }) {
  return (
    <section className="relative h-[254px] w-full md:h-[441px]">
      <div className="bg-green-900/90 z-0 flex h-full w-full pt-[68px] xl:pt-[141px]">
        <div className="relative flex h-[186px] flex-grow flex-col items-center justify-center md:h-[300px]">
          <div
            data-aos="fade-right"
            className="container absolute top-[10px] md:top-[15px]"
          >
            <BreadCrumb />
          </div>

          <div className="container">
            <h1
              data-aos="fade-up"
              className="text-center text-4xl font-semibold capitalize leading-[44px] text-white md:text-[70px] md:leading-[78px]"
            >
              {sectionHeading}
            </h1>
          </div>
        </div>
      </div>
      <Image
        src="/hero-banners/who-we-are.jpg"
        width={1440}
        height={441}
        alt="Who we are section banner"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
    </section>
  );
}

export default SecondaryBanner;
