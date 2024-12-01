import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";

function OurWorkCard() {
  return (
    <div
      data-aos="fade-up"
      className="work-card group relative h-[380px] cursor-pointer overflow-hidden rounded-[8px] shadow-md shadow-dark/30 transition-all duration-300 hover:shadow-lg sm:h-[380px]"
    >
      <Image
        src="/our-work/our-work-1.jpeg"
        width={410}
        height={380}
        alt="Our works thumnail"
        className="absolute inset-0 h-full w-full rounded-[8px] object-cover object-center transition-all duration-700 group-hover:scale-105"
      />
      <div className="absolute z-10 flex h-full w-full flex-col justify-end bg-gradient-to-t from-[#000000e4] via-[#00000065] to-[#00000000]">
        <div className="work-card-hover h-0 overflow-hidden px-5 py-[30px] lg:px-[30px] lg:py-[30px]">
          <h3 className="text-xl font-semibold leading-[32px] text-white sm:text-lg sm:leading-normal md:text-2xl md:leading-[36px]">
            Climate-Smart Agriculture
          </h3>
          <p className="mb-5 mt-[10px] text-base font-normal leading-[26px] text-white">
            Together, we innovate for a sustainable future where smallholders
            thrive, add few more words.
          </p>
          <PrimaryButton className="flex border-none bg-white transition-all duration-500">
            Learn More
          </PrimaryButton>
        </div>
        <div className="work-card-initial flex flex-col px-5 py-[30px] lg:px-[30px] lg:py-[30px]">
          <h3 className="text-xl font-semibold leading-[32px] text-white sm:text-lg sm:leading-normal md:text-2xl md:leading-[36px]">
            Climate-Smart Agriculture
          </h3>
        </div>
      </div>
    </div>
  );
}

export default OurWorkCard;
