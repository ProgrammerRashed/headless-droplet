import Image from "next/image";

function AboutCountrySection({ bannerImage, primaryText, secondaryText }) {
  return (
    <section>
      <Image
        src={bannerImage}
        width={1440}
        height={622}
        alt="Bangladesh"
        className="aspect-[36/30] max-h-[620px] w-full object-cover"
      />
      <div className="container">
        <div className="my-[50px] md:my-[100px]">
          <div className="mb-[30px] w-full border-b border-gray-50 pb-5 md:mb-10 md:pb-[30px]">
            <h4 className="mr-auto max-w-[960px] text-lg font-medium leading-[28px] text-gray-800 md:text-2xl md:font-semibold md:leading-[36px]">
              {primaryText}
            </h4>
          </div>
          <p className="max-w-[850px] text-left text-base font-normal leading-[26px] text-gray-600 md:ml-auto">
            {secondaryText}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutCountrySection;
