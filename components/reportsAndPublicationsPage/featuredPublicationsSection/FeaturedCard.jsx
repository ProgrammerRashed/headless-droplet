import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import Image from "next/image";

function FeaturedCard() {
  return (
    <div className="group flex flex-col bg-white">
      <div className="relative flex items-center justify-center rounded-t-[8px] bg-gray-50 p-[10px] lg:p-4">
        <div className="w-full overflow-hidden rounded-[4px]">
          <Image
            src="/reports-and-publications-page/feature-image-1.jpg"
            height={372}
            width={467}
            className="aspect-[280/317] w-full object-cover transition-all duration-300 group-hover:scale-105 lg:aspect-[372/467]"
            alt=""
          />
        </div>
        <span className="absolute left-[22px] top-[22px] rounded-[80px] bg-white px-[10px] py-[7px] text-xs font-normal leading-[18px] text-gray-800 lg:left-[30px] lg:top-[30px] lg:px-4 lg:py-2 lg:text-sm lg:leading-[22px]">
          Agriculture
        </span>
      </div>
      <div className="flex flex-col p-5 lg:p-[30px]">
        <h3 className="mb-[10px] text-lg font-medium leading-[28px] text-gray-800 lg:text-2xl lg:font-semibold lg:leading-[36px]">
          Foster science & technology in the service of humanity
        </h3>
        <p className="mb-5 text-sm font-normal leading-[22px] lg:mb-10">
          06 September, 2024
        </p>
        <PrimaryButton className="">Download PDF</PrimaryButton>
      </div>
    </div>
  );
}

export default FeaturedCard;
