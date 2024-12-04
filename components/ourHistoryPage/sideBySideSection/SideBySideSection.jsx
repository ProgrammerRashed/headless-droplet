import SectionHeading from "@/components/sectionHeader/SectionHeading";
import Image from "next/image";

function SideBySideSection({ heading, secondaryHeading, details, bannerImg }) {
  return (
    <section className="my-[50px] md:my-[100px]">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between xl:gap-[100px]">
          <div className="flex flex-col justify-center lg:w-[560px]">
            <div data-aos="fade-up">
              <SectionHeading className="mb-5">{heading}</SectionHeading>
            </div>
            <h3
              data-aos="fade-up"
              className="mb-5 text-xl font-semibold leading-[32px] text-gray-800 lg:mb-[30px]"
            >
              {secondaryHeading}
            </h3>
            <p
              data-aos="fade-up"
              className="text-base font-normal leading-[26px] text-gray-600"
            >
              {details}
            </p>
          </div>
          <Image
            data-aos="fade-up"
            src={bannerImg}
            width={625}
            height={625}
            alt=""
            className="aspect-square w-full rounded-[8px] object-cover lg:w-1/2 xl:w-[625px]"
          />
        </div>
      </div>
    </section>
  );
}

export default SideBySideSection;
