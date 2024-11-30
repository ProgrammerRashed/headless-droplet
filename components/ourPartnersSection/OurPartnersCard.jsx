import Image from "next/image";

function OurPartnersCard() {
  return (
    <div className="group flex h-[62px] w-full items-center justify-center rounded-[6px] border border-gray px-[18px] py-[10px] shadow-sm transition-all duration-300 hover:shadow-md sm:h-[108px] sm:px-8 sm:py-[22px]">
      <Image
        src="/our-pertners/swiss-agency.png"
        alt="Partners logo"
        width={197}
        height={65}
        className="h-full w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
      />
    </div>
  );
}

export default OurPartnersCard;
