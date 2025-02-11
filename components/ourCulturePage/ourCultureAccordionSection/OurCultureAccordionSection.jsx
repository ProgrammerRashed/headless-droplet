import Image from "next/image";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/sectionHeader/SectionHeading";
import OurCultureAccordion from "./OurCultureAccordion";

function OurCultureAccordionSection({ data }) {
  const { sectionClassName, sectionTitle, imageUrl, qsnAndAns } = data;
  return (
    <section className={cn("py-[50px] lg:py-[100px]", sectionClassName)}>
      <div className="container">
        <div className="flex flex-col gap-[60px] 0.5xl:flex-row 0.5xl:items-center">
          <Image
            src={imageUrl || "/thumbnail.png"}
            alt={sectionTitle}
            width={625}
            height={625}
            className="h-auto min-h-[330px] w-full rounded-[8px] object-cover 0.5xl:min-h-[625px] 0.5xl:w-1/2 xl:aspect-square"
            data-aos="fade-up"
          />
          <div className="flex flex-col 0.5xl:w-1/2">
            <div data-aos="fade-up" className="flex flex-col gap-[30px]">
              <SectionHeading>{sectionTitle}</SectionHeading>

              <div className="xl:pr-[90px]">
                <OurCultureAccordion qsnAndAns={qsnAndAns} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCultureAccordionSection;
