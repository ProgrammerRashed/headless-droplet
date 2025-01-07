import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { cn } from "@/lib/utils";
import Image from "next/image";

function SideBySideBulletPoints({ data }) {
  const {
    sectionClassName,
    bannerImage,
    title,
    description,
    points,
    buttonPrimaryDetails,
    buttonSecondaryDetails,
  } = data;

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
                {points.map((point) => (
                  <li key={point.id}>{point.point}</li>
                ))}
              </ul>
            )}
            <div className="mt-[10px] flex flex-col-reverse gap-5 sm:flex-row">
              {buttonPrimaryDetails && (
                <PrimaryButton className="bg-red-600 stroke-white text-white hover:bg-red-900">
                  {buttonPrimaryDetails.title}
                </PrimaryButton>
              )}
              {buttonSecondaryDetails && (
                <PrimaryButton>{buttonSecondaryDetails.title}</PrimaryButton>
              )}
            </div>
          </div>
          <Image
            data-aos="fade-up"
            src={bannerImage}
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
