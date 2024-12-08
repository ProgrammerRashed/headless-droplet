import Image from "next/image";
import BreadCrumb from "../shared/BreadCrumb";

function TertiaryBanner({ sectionHeading }) {
  return (
    <section className="relative h-[258px] w-full md:h-[428px]">
      <div className="z-0 flex h-full w-full bg-white pt-[68px] xl:pt-[141px]">
        <div className="relative flex h-[186px] flex-grow flex-col items-center justify-center md:h-[290px]">
          <div
            data-aos="fade-right"
            className="container absolute top-[10px] md:top-[15px]"
          >
            <BreadCrumb colorScheme="dark" />
          </div>

          <div className="container">
            <h1
              data-aos="fade-up"
              className="mb-5 text-center text-4xl font-semibold capitalize leading-[44px] text-gray-600 md:text-[70px] md:leading-[78px]"
            >
              {sectionHeading}
            </h1>
            <h3 className="text-center text-[22px] font-medium leading-[32px] text-gray-800">
              Advancing Sustainable Agriculture and Innovation
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TertiaryBanner;
