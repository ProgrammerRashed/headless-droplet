import Image from "next/image";
import MissionVissionCard from "./MissionVissionCard";

function MissionVissionSection({ coverImage, missionVisionDetails }) {
  return (
    <section className="my-10 md:my-[100px]">
      <div data-aos="fade-up" className="container">
        <div className="flex w-full flex-col gap-[30px] rounded-[16px] bg-surface p-[10px] sm:p-5 md:gap-10 md:p-10 xl:flex-row-reverse xl:items-center xl:gap-[60px] xl:p-0 xl:pl-[30px]">
          <Image
            src={coverImage}
            width={587}
            height={456}
            alt="Mission vission banner"
            className="aspect-[31/24] w-full rounded-[14px] object-cover xl:aspect-[587/456] xl:max-w-[587px] xl:rounded-none xl:rounded-r-[16px]"
          />
          <div className="flex w-full flex-col gap-[10px] sm:flex-row md:gap-5 xl:flex-col xl:gap-[10px]">
            <MissionVissionCard cardDetails={missionVisionDetails.vision} />
            <MissionVissionCard cardDetails={missionVisionDetails.mission} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVissionSection;
