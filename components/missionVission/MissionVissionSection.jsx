import Image from "next/image";
import MissionVissionCard from "./MissionVissionCard";

function MissionVissionSection() {
  return (
    <section className="my-10 md:mb-[100px] md:mt-[96px]">
      <div className="container">
        <div className="flex w-full flex-col gap-[30px] rounded-[16px] bg-surface p-[10px] shadow-lg sm:p-5 md:gap-10 md:p-10 xl:flex-row-reverse xl:items-center xl:gap-[48px] xl:p-0 xl:pl-[30px]">
          <Image
            src="/mission-vision/mission-vision-banner.jpeg"
            width={587}
            height={456}
            alt="Mission vission banner"
            className="aspect-[31/24] w-full rounded-[14px] object-cover shadow-md xl:aspect-[587/456] xl:max-w-[587px] xl:rounded-none xl:rounded-r-[16px] xl:shadow-none"
          />
          <div className="flex w-full flex-col gap-[10px] sm:flex-row md:gap-5 xl:flex-col xl:gap-[10px]">
            <MissionVissionCard />
            <MissionVissionCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVissionSection;
