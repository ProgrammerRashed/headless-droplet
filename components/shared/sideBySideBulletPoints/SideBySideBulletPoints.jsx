import SideBySideSection from "@/components/ourHistoryPage/sideBySideSection/SideBySideSection";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { cn } from "@/lib/utils";
import Image from "next/image";

function SideBySideBulletPoints({ data }) {
  const title = data?.data?.title
  const description = data?.data?.description
  const sectionClassName = data?.data?.section_class_name;
  const buttonPrimaryDetails = data?.data?.button_primary_details[0]
  const buttonSecondaryDetails = data?.data?.button_secondary_details[0]
  const points = data?.data?.points
  const bannerImage = data?.data?.banner_image
  const subTitle = data?.data?.sub_title;
  const heading = title
  const secondaryHeading = subTitle
  const details = description
  const bannerImg = bannerImage
  if(subTitle) return <SideBySideSection heading={heading} secondaryHeading={secondaryHeading} details={details} bannerImg={bannerImg}/>


  return (
    <section
      className={cn("bg-surface py-[50px] md:py-[100px]", sectionClassName)}
    >
      <div className="container">
        <div className="flex w-full flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
          <div data-aos="fade-up" className="flex flex-col">
            <h3 className="mb-5 text-[30px] font-bold leading-[40px] tracking-[1%] text-gray-800 md:text-5xl md:leading-[60px]">
              {title}
            </h3>
            <p className="mb-5 text-base font-normal leading-[26px] text-gray-600 md:mb-[30px]">
              {description}
            </p>
            {points && (
              <ul className="md:mb-30 mb-[20px] flex list-disc flex-col gap-[10px] pl-6 text-base font-normal leading-[26px] text-gray-600">
                {points?.map((point) => (
                  <li key={point?._id}>{point?.point}</li>
                ))}
              </ul>
            )}
            <div
              data-aos="fade-up"
              className="mt-[10px] flex flex-col-reverse gap-5 sm:flex-row"
            >
              {buttonPrimaryDetails?.link && (
                <PrimaryButton href={buttonPrimaryDetails?.link} className="bg-red-600 stroke-white text-white hover:bg-red-900">
                  {buttonPrimaryDetails?.title}
                </PrimaryButton>
              )}
              {buttonSecondaryDetails?.link && (
                <PrimaryButton href={buttonSecondaryDetails?.link}>{buttonSecondaryDetails?.title}</PrimaryButton>
              )}
            </div>
          </div>
          <Image
            data-aos="fade-up"
            src={bannerImage  || "/thumbnail.png"}
            width={625}
            height={625}
            alt=""
            className="aspect-square w-full rounded-[8px] object-cover xl:w-[625px]"
          />
        </div>
      </div>
    </section>
  );
}

export default SideBySideBulletPoints;
