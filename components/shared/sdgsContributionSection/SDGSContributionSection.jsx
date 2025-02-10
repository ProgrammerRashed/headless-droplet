import { cn } from "@/lib/utils";
import SectionHeading from "../../sectionHeader/SectionHeading";

import SDGSCard from "./SDGSCard";

function SDGSContributionSection({data}) {
  const {
    section_heading,
    card_details,
    section_classnames,
  } = data.data;
  return (
    <section
      className={cn("bg-surface py-[50px] md:py-[100px]", section_classnames)}
    >
      <div className="container lg:px-[95px]">
        <div data-aos="fade-up">
          <SectionHeading className="text-center normal-case">
            {section_heading}
          </SectionHeading>
        </div>
        <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5">
          {card_details.map((card, index) => (
            <SDGSCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SDGSContributionSection;
