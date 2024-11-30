import Image from "next/image";

function MissionVissionCard() {
  return (
    <div className="flex flex-col gap-[30px] overflow-hidden rounded-[8px] border border-gray bg-white p-5 shadow-md sm:w-1/2 xl:w-full xl:flex-row xl:p-[30px]">
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
        <p className="text-base font-normal leading-[26px] text-gray-dark">
          A world in which smallholders, communities, and nature thrive
          together.
        </p>
      </div>
    </div>
  );
}

export default MissionVissionCard;
