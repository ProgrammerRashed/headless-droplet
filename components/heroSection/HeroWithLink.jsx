import React from "react";
import BreadCrumb from "../shared/BreadCrumb";
import { cn } from "@/lib/utils";
import PrimaryButton from "../shared/buttons/PrimaryButton";

function HeroWithLink({ data }) {
  const  sectionHeading = data?.data?.section_heading
  const  linkDetails = data?.data?.link_details[0]
  return (
    <section className="relative h-[334px] w-full md:h-[467px]">
      <div
        className={cn(
          "z-0 flex h-full w-full bg-white pt-[68px] xl:pt-[133px]",
        )}
      >
        <div className="relative flex h-[266px] flex-grow flex-col items-center justify-end pb-10 md:h-[334px] md:pb-0 xl:justify-center">
          <div
            data-aos="fade-right"
            className="container absolute top-[10px] md:top-[15px]"
          >
            <BreadCrumb colorScheme="dark" />
          </div>

          <div className="container">
            <h1
              data-aos="fade-up"
              className={cn(
                "text-center text-4xl font-semibold capitalize leading-[44px] text-gray-600 md:text-[70px] md:leading-[78px]",
              )}
            >
              {sectionHeading}
            </h1>
            <div data-aos="fade-up">
              <PrimaryButton href={linkDetails?.link} className="mx-auto mt-[30px] bg-red-600 stroke-white text-white hover:bg-red-900 md:mt-10">
                {linkDetails?.title}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroWithLink;
