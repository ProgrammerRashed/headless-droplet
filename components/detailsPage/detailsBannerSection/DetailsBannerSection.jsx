import SectionHeading from "@/components/sectionHeader/SectionHeading";
import BreadCrumb from "@/components/shared/BreadCrumb";
import Image from "next/image";

function DetailsBannerSection({ data }) {
    const { sectionTitle, publishedDate, category, featureImage  } = data;
      // Decode HTML entities in category
      const decodedCategory = category?.replace(/&amp;/g, '&');
  return (
    <section className="mt-[78px] 0.5xl:mt-[151px]">
      <div className="container">
        <div data-aos="fade-right">
          <BreadCrumb colorScheme="dark" />
        </div>
        <div className="relative mt-[15px] min-h-[360px] overflow-hidden rounded-[8px] md:mt-6 md:min-h-[500px] md:rounded-[16px] lg:min-h-[600px]">
          <div className="absolute inset-0 z-10 flex h-full w-full flex-col justify-end bg-gradient-to-b from-[#00000000] to-[#000000]">
            <div className="flex w-full flex-col px-[15px] pb-5 text-white md:px-10 md:pb-10">
              <div data-aos="fade-up">
                <SectionHeading className="mb-[5px] text-white md:mb-[10px]">
                  {sectionTitle}
                </SectionHeading>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-row items-center gap-[10px] text-xs font-normal leading-[18px] md:text-base md:leading-[26px]"
              >
                <p>{publishedDate}</p>
                <div className="h-[5px] w-[5px] rounded-full bg-gray-50/60"></div>
                <p>{decodedCategory}</p>
              </div>
            </div>
          </div>
          <Image
            src={featureImage || "/thumbnail.png"}
            width={1290}
            height={600}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default DetailsBannerSection;
