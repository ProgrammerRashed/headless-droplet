import Image from "next/image";

function AboutCountrySection({data}) {
  const { banner_image, primary_text, secondary_text } = data.data
  return (
    <section>
      <Image
        src={banner_image || "/thumbnail.png"}
        width={1440}
        height={622}
        alt="Bangladesh"
        className="aspect-[36/20] max-h-[660px] w-full object-cover"
      />
      <div className="container">
        <div className="my-[50px] md:my-[100px]">
        {
            primary_text && ( <div className="mb-[30px] w-full border-b border-gray-50 pb-5 md:mb-10 md:pb-[30px]">
           
          <h4
            data-aos="fade-up"
            className="mr-auto max-w-[960px] text-lg font-medium leading-[28px] text-gray-800 md:text-2xl md:font-semibold md:leading-[36px]"
          >
            {primary_text}
          </h4>
            
          </div>)
           }
          <p
            data-aos="fade-up"
            className="max-w-[850px] text-left text-base font-normal leading-[26px] text-gray-600 md:ml-auto"
          >
            {secondary_text}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutCountrySection;
