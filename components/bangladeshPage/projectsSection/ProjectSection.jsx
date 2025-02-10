"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SectionHeading from "@/components/sectionHeader/SectionHeading";
import ProjectCard from "./ProjectCard";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { cn } from "@/lib/utils";

function ProjectSection({
  SectionTitle,
  titlePositionClassName,
  projects,
  viewAllBtnDetails,
}) {

  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div data-aos="fade-up" className="container">
        <SectionHeading className={cn("text-center", titlePositionClassName)}>
          {SectionTitle}
        </SectionHeading>
      </div>
      <div className="slider-container sm:hidden">
        <div className="relative mt-10">
          <Swiper
            className="cursor-grab"
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            slidesPerView={1.14}
            navigation={false}
            spaceBetween={20}
            speed={600}
            loop={true}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container">
        <div className="mb-[30px] mt-[60px] hidden grid-cols-2 gap-5 border-gray-50 pb-[60px] sm:grid sm:border-b md:gap-[30px]">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div data-aos="fade-up">
          <PrimaryButton className="mx-auto hidden sm:flex">
            {viewAllBtnDetails.title}
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
