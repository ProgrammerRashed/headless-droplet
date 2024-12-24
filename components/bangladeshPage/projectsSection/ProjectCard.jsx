import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <div data-aos="fade-up" className="flex flex-col">
      <Image
        src={project.imageLink}
        width={630}
        height={240}
        alt="Project Thumnail"
        className="mb-[15px] aspect-[300/207] w-full rounded-[8px] object-cover md:mb-5 md:aspect-[63/42]"
      />
      <h3 className="mb-[10px] line-clamp-2 min-h-[56px] text-[22px] font-semibold leading-[28px] text-gray-800 0.5xl:min-h-[84px] 0.5xl:text-[32px] 0.5xl:font-bold 0.5xl:leading-[42px]">
        {project.title}
      </h3>
      <div className="mb-[10px] flex w-full flex-col gap-2 text-base font-normal leading-[26px] text-gray-800 0.5xl:mb-[30px] 0.5xl:text-[22px] 0.5xl:leading-[32px]">
        <div className="grid grid-cols-[55px_4px_auto] items-start gap-[10px] md:grid-cols-[76px_4px_auto]">
          <span className="text-gray-600">Donor</span>
          <span>:</span>
          <span className="font-medium">{project.donor}</span>
        </div>
        <div className="grid grid-cols-[55px_4px_auto] items-start gap-[10px] md:grid-cols-[76px_4px_auto]">
          <span className="text-gray-600">Tenure</span>
          <span>:</span>
          <span className="font-medium sm:min-h-[52px] lg:min-h-fit">
            {project.tenure}
          </span>
        </div>
      </div>
      <p className="mb-5 line-clamp-3 text-base font-normal leading-[26px] text-gray-600 md:mb-10">
        {project.details}
      </p>
      <div data-aos="fade-up">
        <Link
          href={project.pdfLink}
          target="_blank"
          className={cn(
            "flex w-fit flex-row items-center gap-2 rounded-full border border-red-600 stroke-red-600 px-6 py-[13px] text-sm font-semibold leading-[22px] text-red-600 transition-all duration-300 hover:bg-red-900 hover:stroke-white hover:text-white md:px-6 md:py-[15px] md:text-base md:leading-[24px]",
          )}
        >
          <span>Download PDF</span>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2181_7358)">
              <path
                d="M8 14L12 10L8 6"
                stroke="current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2181_7358">
                <rect width={20} height={20} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
