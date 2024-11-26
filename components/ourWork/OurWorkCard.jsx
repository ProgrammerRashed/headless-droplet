import Image from "next/image";

function OurWorkCard() {
  return (
    <div className="shadow-dark/30 relative h-[380px] overflow-hidden rounded-[8px] shadow-md sm:h-[380px]">
      <Image
        src="/our-work/our-work-1.jpeg"
        width={410}
        height={380}
        alt="Our works thumnail"
        className="absolute inset-0 h-full w-full rounded-[8px] object-cover object-center"
      />
      <div className="absolute z-10 flex h-full w-full flex-col justify-end bg-gradient-to-t from-[#000000e4] via-[#00000065] to-[#00000000]">
        <div className="px-5 py-[30px] lg:px-[30px] lg:py-[30px]">
          <h3 className="text-xl font-semibold leading-[32px] text-white sm:text-lg sm:leading-normal md:text-2xl md:leading-[36px]">
            Climate-Smart Agriculture
          </h3>
        </div>
      </div>
    </div>
  );
}

export default OurWorkCard;
