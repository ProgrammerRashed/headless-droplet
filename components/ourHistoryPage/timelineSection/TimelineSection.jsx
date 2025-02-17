import SectionHeading from "@/components/sectionHeader/SectionHeading";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

function TimelineSection({ data }) {
  const cards = data?.data?.cards;
  const sectionHeading = data?.data?.section_heading;
  return (
    <section className="my-[50px] md:my-[100px]">
      <div className="container !max-w-[1295px]">
        <div data-aos="fade-up">
          <SectionHeading className="text-center">
            {sectionHeading}
          </SectionHeading>
        </div>
        <Timeline data={cards} />
      </div>
    </section>
  );
}

export default TimelineSection;
