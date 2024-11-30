import Image from "next/image";

function DirectorsSaySection() {
  return (
    <section className="bg-surface py-[50px] md:py-20">
      <div className="container">
        <div className="md: mx-auto flex w-full flex-col items-center gap-[30px] md:flex-row md:justify-center md:gap-12 xl:items-start">
          <Image
            src="/directors-say/directors-avatar.png"
            width={260}
            height={260}
            alt="Directors image"
            className="h-[200px] w-[200px] object-cover md:h-[260px] md:w-[260px]"
          />
          <div className="flex w-full max-w-[812px] flex-col">
            <svg
              className="mb-5 h-8 w-8 object-contain md:h-12 md:w-12"
              width={49}
              height={48}
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="251093_quote_begin_testimonial_quotation_icon 1"
                clipPath="url(#clip0_1_25499)"
              >
                <g id="Group">
                  <path
                    id="Vector"
                    d="M18.5 25.5H6.5V22.5C6.5 16.353 9.782 10.218 15.5 8.157V1.5C6.218 4.032 0.5 12.99 0.5 22.5V28.5V43.5C0.5 45.1575 1.8425 46.5 3.5 46.5H18.5C20.1575 46.5 21.5 45.1575 21.5 43.5V28.5C21.5 26.844 20.1575 25.5 18.5 25.5Z"
                    fill="#3FC4A4"
                  />
                  <path
                    id="Vector_2"
                    d="M45.5 25.5H33.5V22.5C33.5 16.353 36.782 10.218 42.5 8.157V1.5C33.218 4.032 27.5 12.99 27.5 22.5V28.5V43.5C27.5 45.1575 28.8425 46.5 30.5 46.5H45.5C47.1575 46.5 48.5 45.1575 48.5 43.5V28.5C48.5 26.844 47.1575 25.5 45.5 25.5Z"
                    fill="#3FC4A4"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_25499">
                  <rect
                    width={48}
                    height={48}
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="pb-[30px] text-lg font-normal italic leading-[28px] text-dark lg:text-[22px] lg:leading-[32px]">
              Our Foundation is accelerating support for first-mile
              entrepreneurial networks, helping under-served, pre-commercial
              smallholders fully engage in market systems. We are placing a
              stronger emphasis on empowering women as both entrepreneurs and
              farmers. Looking ahead, we aim to expand the range of
              climate-smart innovations that enhance smallholders'
              diversification, productivity, and resilience.
            </p>
            <div className="flex flex-col gap-0.5">
              <h6 className="text-xl font-semibold leading-[32px] text-dark lg:text-2xl lg:leading-[36px]">
                Simon Winter
              </h6>
              <p className="text-sm font-normal leading-[22px] text-gray-light">
                Executive Director
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DirectorsSaySection;
