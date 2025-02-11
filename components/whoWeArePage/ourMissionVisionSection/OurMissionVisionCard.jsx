import { cn } from "@/lib/utils";
import Image from "next/image";

function OurMissionVisionCard({ card, reverse }) {
  return (
    <div
      className={cn(
        "flex w-full gap-5 md:w-1/2 md:gap-[30px]",
        `${reverse ? "flex-col md:flex-col-reverse" : "flex-col"}`,
      )}
    >
      <Image
        src={card.bannerImg || "/thumbnail.png"}
        width={410}
        height={456}
        alt={card.title}
        data-aos="fade-up"
        className="aspect-[33/26] w-full rounded-[8px] object-cover shadow-sm md:aspect-[410/456]"
      />
      <div className="flex w-full flex-col gap-[10px]">
        <h5
          data-aos="fade-up"
          className="text-[22px] font-semibold leading-[28px] text-gray-800 md:text-[28px] md:leading-[38px]"
        >
          {card.title}
        </h5>
        <p
          data-aos="fade-up"
          className="text-base font-normal leading-[26px] text-gray-600"
        >
          {card.subTitle}
        </p>
      </div>
    </div>
  );
}

export default OurMissionVisionCard;
