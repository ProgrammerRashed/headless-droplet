import Image from "next/image";

function MissionVissionSection() {
  return (
    <section className="my-10 md:mb-[100px] md:mt-[96px]">
      <div className="container">
        <div className="flex w-full flex-col gap-[30px] rounded-[16px] bg-surface p-[10px] sm:p-5 md:gap-10 md:p-10 xl:flex-row-reverse xl:items-center xl:gap-[48px] xl:p-0 xl:pl-[30px]">
          <Image
            src="/mission-vision/mission-vision-banner.jpeg"
            width={587}
            height={456}
            alt="Mission vission banner"
            className="aspect-[31/24] w-full rounded-[14px] object-cover xl:aspect-[587/456] xl:max-w-[587px] xl:rounded-none xl:rounded-r-[16px]"
          />
          <div className="flex w-full flex-col gap-[10px] sm:flex-row md:gap-5 xl:flex-col xl:gap-[10px]">
            <div className="border-gray flex flex-col gap-[30px] overflow-hidden rounded-[8px] border bg-white p-5 sm:w-1/2 xl:w-full xl:flex-row xl:p-[30px]">
              <Image
                src="/mission-vision/card-icons/our-vision.svg"
                width={100}
                height={100}
                alt="Vision icon"
                className="aspect-[1/1] w-[100px] object-contain"
              />
              <div className="flex w-full flex-col">
                <h4 className="mb-[10px] text-[22px] font-semibold capitalize leading-[28px] text-red xl:text-[28px] xl:leading-[38px]">
                  Our vision
                </h4>
                <p className="text-gray-dark text-base font-normal leading-[26px]">
                  A world in which smallholders, communities, and nature thrive
                  together.
                </p>
              </div>
            </div>
            <div className="border-gray flex flex-col gap-[30px] overflow-hidden rounded-[8px] border bg-white p-5 sm:w-1/2 xl:w-full xl:flex-row xl:p-[30px]">
              <Image
                src="/mission-vision/card-icons/our-mission.svg"
                width={100}
                height={100}
                alt="Mission icon"
                className="aspect-[1/1] w-[100px] object-contain"
              />
              <div className="flex w-full flex-col">
                <h4 className="mb-[10px] text-[22px] font-semibold capitalize leading-[28px] text-red xl:text-[28px] xl:leading-[38px]">
                  Our mission
                </h4>
                <p className="text-gray-dark text-base font-normal leading-[26px]">
                  Scaling up collective action on markets and innovations so
                  that farming can better serve smallholder families, rural
                  communities, and nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVissionSection;
