import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import Image from "next/image";

function PublicationCard({ card }) {
  return (
    <div data-aos="fade-up" className="group flex flex-col bg-white">
      <div className="relative flex items-center justify-center rounded-t-[8px] bg-gray-50 p-[10px] lg:p-4">
        <div className="w-full overflow-hidden rounded-[4px]">
          <Image
            src={card.bannerImage}
            height={372}
            width={467}
            className="aspect-[280/317] w-full object-cover transition-all duration-300 group-hover:scale-105 lg:aspect-[372/467]"
            alt={card.title}
          />
        </div>
        <span className="absolute left-[22px] top-[22px] rounded-[80px] bg-white px-[10px] py-[7px] text-xs font-normal leading-[18px] text-gray-800 lg:left-[30px] lg:top-[30px] lg:px-4 lg:py-2 lg:text-sm lg:leading-[22px]">
          {card.category}
        </span>
      </div>
      <div className="flex flex-col p-5 lg:p-0 lg:pt-5">
        <h3 className="mb-[10px] line-clamp-2 text-lg font-medium leading-[28px] text-gray-800 lg:text-2xl lg:font-semibold lg:leading-[36px]">
          {card.title}
        </h3>
        <p className="mb-[30px] text-sm font-normal leading-[22px] lg:mb-10">
          {card.publishedDate}
        </p>
        <PrimaryButton>{card.buttonDetails.title}</PrimaryButton>
      </div>
    </div>
  );
}

export default PublicationCard;
