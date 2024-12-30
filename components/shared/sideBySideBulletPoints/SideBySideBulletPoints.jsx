import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import Image from "next/image";

function SideBySideBulletPoints({ data }) {
  const { bannerImage, title, description, points, buttonDetails } = data;

  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
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
            <PrimaryButton className="mt-[10px] bg-red-600 stroke-white text-white hover:bg-red-900">
              {buttonDetails.title}
            </PrimaryButton>
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
