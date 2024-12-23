import BreadCrumb from "../shared/BreadCrumb";

function TertiaryBanner({ sectionHeading, sectionSubHeading }) {
  return (
    <section className="relative h-[254px] w-full md:h-[350px] lg:h-[370px] 0.5xl:h-[441px]">
      <div className="flex h-full w-full bg-white pt-[68px] 0.5xl:pt-[141px]">
        <div className="relative flex h-[186px] flex-grow flex-col items-center justify-end pb-5 sm:justify-center sm:pb-0 md:h-[300px]">
          <div
            data-aos="fade-right"
            className="container absolute top-[10px] md:top-[15px]"
          >
            <BreadCrumb colorScheme="dark" />
          </div>

          <div className="container">
            <h1
              data-aos="fade-up"
              className="mb-[10px] text-center text-4xl font-semibold capitalize leading-[44px] text-gray-600 md:mb-5 md:text-[70px] md:leading-[78px]"
            >
              {sectionHeading}
            </h1>
            {sectionSubHeading && (
              <p
                data-aos="fade-up"
                className="text-center text-lg font-medium leading-[28px] text-gray-800 md:text-[22px] md:leading-[32px]"
              >
                {sectionSubHeading}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TertiaryBanner;
