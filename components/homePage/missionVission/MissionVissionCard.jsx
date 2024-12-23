import Image from "next/image";

function MissionVissionCard({ cardDetails }) {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col gap-[30px] overflow-hidden rounded-[8px] border border-gray-50 bg-white p-5 sm:w-1/2 xl:w-full xl:flex-row xl:p-[30px]"
    >
      <div className="flex w-full flex-col">
        <h4 className="mb-[10px] text-[22px] font-semibold capitalize leading-[28px] text-red-600 xl:text-[28px] xl:leading-[38px]">
          {cardDetails.title}
        </h4>
        <p className="text-lg font-normal leading-[28px] text-gray-600">
          {cardDetails.details}
        </p>
      </div>
    </div>
  );
}

export default MissionVissionCard;
