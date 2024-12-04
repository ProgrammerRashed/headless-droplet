import SectionHeading from "@/components/sectionHeader/SectionHeading";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

function TimelineSection() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="flex flex-col pr-[10px] xl:flex-row xl:items-start xl:gap-[60px]">
          <div className="flex flex-col">
            <h4 className="mb-[15px] text-[22px] font-semibold leading-[28px] text-gray-800">
              Title Here
            </h4>
            <p className="mb-[30px] text-sm font-normal leading-[22px] text-gray-600 md:text-base md:leading-[26px]">
              I am excited to share Quest Asia's mission and future goals as we
              revolutionize the recruitment industry. Our focus goes beyond
              connecting talent with opportunities; it’s about fostering
              understanding, innovation, and bridging divides.
            </p>
          </div>
          <Image
            src="/timeline/timeline-1.jpg"
            width={435}
            height={400}
            alt=""
            className="aspect-[280/257] w-full rounded-[8px] object-cover xl:aspect-[435/400] xl:max-w-[435px]"
          />
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div className="flex flex-col pr-[10px] xl:flex-row xl:items-start xl:gap-[60px]">
          <div className="flex flex-col">
            <h4 className="mb-[15px] text-[22px] font-semibold leading-[28px] text-gray-800">
              Title Here
            </h4>
            <p className="mb-[30px] text-sm font-normal leading-[22px] text-gray-600 md:text-base md:leading-[26px]">
              I am excited to share Quest Asia's mission and future goals as we
              revolutionize the recruitment industry. Our focus goes beyond
              connecting talent with opportunities; it’s about fostering
              understanding, innovation, and bridging divides.
            </p>
          </div>
          <Image
            src="/timeline/timeline-1.jpg"
            width={435}
            height={400}
            alt=""
            className="aspect-[280/257] w-full rounded-[8px] object-cover xl:aspect-[435/400] xl:max-w-[435px]"
          />
        </div>
      ),
    },
    {
      title: "2016",
      content: (
        <div className="flex flex-col pr-[10px] xl:flex-row xl:items-start xl:gap-[60px]">
          <div className="flex flex-col">
            <h4 className="mb-[15px] text-[22px] font-semibold leading-[28px] text-gray-800">
              Title Here
            </h4>
            <p className="mb-[30px] text-sm font-normal leading-[22px] text-gray-600 md:text-base md:leading-[26px]">
              I am excited to share Quest Asia's mission and future goals as we
              revolutionize the recruitment industry. Our focus goes beyond
              connecting talent with opportunities; it’s about fostering
              understanding, innovation, and bridging divides.
            </p>
          </div>
          <Image
            src="/timeline/timeline-1.jpg"
            width={435}
            height={400}
            alt=""
            className="aspect-[280/257] w-full rounded-[8px] object-cover xl:aspect-[435/400] xl:max-w-[435px]"
          />
        </div>
      ),
    },
  ];

  return (
    <section className="my-[50px] md:my-[100px]">
      <div className="mx-auto max-w-[1295px] px-[15px] sm:px-[30px] md:px-[45px] lg:px-[75px]">
        <SectionHeading className="text-center">Timeline</SectionHeading>
        <Timeline data={data} />
      </div>
    </section>
  );
}

export default TimelineSection;
