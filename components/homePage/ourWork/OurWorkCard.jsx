import Image from "next/image";
import PrimaryButton from "../../shared/buttons/PrimaryButton";

function OurWorkCard({ card }) {
  return (
    <div
      data-aos="fade-up"
      className="group relative h-[380px] cursor-pointer overflow-hidden rounded-[8px] shadow-xl shadow-gray-800/30 transition-all duration-300 hover:shadow-2xl sm:h-[380px]"
    >
      <div className="inset-0 overflow-hidden rounded-[8px]">
        <Image
          src={card.bgImage}
          width={410}
          height={380}
          alt={card.heading}
          className="absolute inset-0 h-full w-full rounded-[8px] object-cover object-center transition-all duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 z-10 flex h-full w-full flex-col justify-end bg-gradient-to-t from-[#000000]/100 to-[#00000000]/0">
        <div className="flex w-full flex-col p-[30px] px-5 text-white transition-all duration-1000 lg:translate-y-full lg:px-[30px] lg:group-hover:translate-y-0">
          <h4 className="mb-[10] line-clamp-1 text-xl font-semibold leading-[32px] transition-all duration-1000 lg:-translate-y-[96px] lg:text-2xl lg:leading-[36px] lg:group-hover:translate-y-0">
            {card.heading}
          </h4>
          <p className="mb-[24px] hidden text-base font-normal leading-[26px] lg:block">
            {card.details}
          </p>
          <PrimaryButton className="bg-tranparent hidden rounded-none border-0 border-b-2 border-b-white stroke-white !px-0 !pb-[10px] !pt-0 text-base font-semibold leading-[24px] text-white hover:bg-transparent lg:flex">
            {card.buttonDetails.title}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default OurWorkCard;
