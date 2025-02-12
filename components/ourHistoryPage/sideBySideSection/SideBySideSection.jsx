import SectionHeading from "@/components/sectionHeader/SectionHeading";
import Image from "next/image";

function SideBySideSection({ heading, secondaryHeading, details, bannerImg }) {
  return (
    <section className="my-[50px] md:my-[100px]">
      <div className="container">
        <div className="flex flex-col gap-10 0.5xl:flex-row 0.5xl:items-center 0.5xl:justify-between 0.5xl:gap-[100px]">
          <div className="flex flex-col justify-center 0.5xl:w-[560px]">
            <div data-aos="fade-up">
              <SectionHeading className="mb-5">{heading}</SectionHeading>
            </div>
            <h3
              data-aos="fade-up"
              className="mb-5 text-xl font-semibold leading-[32px] text-gray-800 md:text-[22px] md:font-medium md:leading-[32px] lg:mb-[30px]"
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
            src={bannerImg || "https://staging.notionhive.com/wordpress/saf/wp-content/uploads/2025/02/Blog-Thrumbnai-2.png"}
            width={625}
            height={625}
            alt=""
            className="aspect-square w-full rounded-[8px] object-cover 0.5xl:w-1/2 xl:w-[625px]"
          />
        </div>
      </div>
    </section>
  );
}

export default SideBySideSection;
