import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import Image from "next/image";

function ProjectCard() {
  return (
    <div data-aos="fade-up" className="flex flex-col">
      <Image
        src="/projects-programs/project-1.png"
        width={630}
        height={240}
        alt="Project Thumnail"
        className="mb-[15px] aspect-[300/207] w-full rounded-[8px] object-cover md:mb-5 md:aspect-[63/42]"
      />
      <h3 className="mb-[10px] text-[22px] font-semibold leading-[28px] text-gray-800 md:text-[32px] md:font-bold md:leading-[42px]">
        Paradigm shift in agriculture inputs – seeds to soilless
      </h3>
      <div className="mb-[10px] flex w-full flex-col gap-2 text-base font-normal leading-[26px] text-gray-800 md:mb-[30px] md:text-[22px] md:leading-[32px]">
        <div className="grid grid-cols-[55px_4px_auto] items-start gap-[10px] md:grid-cols-[76px_4px_auto]">
          <span className="text-gray-600">Donor</span>
          <span>:</span>
          <span className="font-medium">Lionel Brown</span>
        </div>
        <div className="grid grid-cols-[55px_4px_auto] items-start gap-[10px] md:grid-cols-[76px_4px_auto]">
          <span className="text-gray-600">Tenure</span>
          <span>:</span>
          <span className="font-medium">3rd Aug 2024 - 10 Sep 24</span>
        </div>
      </div>
      <p className="mb-5 line-clamp-3 text-base font-normal leading-[26px] text-gray-600 md:mb-10 md:line-clamp-4">
        Lorem ipsum dolor sit amet consectetur. Amet tristique nunc bibendum
        augue. Et sit senectus consectetur nibh pulvinar vulputate tempus aenean
        ante. At eget praesent ultricies dignissim. Enim sed ultricies elementum
        morbi congue blandit mattis aenean nec. Felis vel nisl arcu tortor.
      </p>
      <div data-aos="fade-up">
        <PrimaryButton>Download Pdf</PrimaryButton>
      </div>
    </div>
  );
}

export default ProjectCard;
