import { cn } from "@/lib/utils";
import SectionHeading from "../../sectionHeader/SectionHeading";

import SDGSCard from "./SDGSCard";

function SDGSContributionSection({
  sectionHeading,
  cardDetails,
  sectionClassName,
}) {
  return (
    <section
      className={cn("bg-surface py-[50px] md:py-[100px]", sectionClassName)}
    >
      <div className="container lg:px-[95px]">
        <div data-aos="fade-up">
          <SectionHeading className="text-center normal-case">
            {sectionHeading}
          </SectionHeading>
        </div>
        <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5">
          {cardDetails.map((card) => (
            <SDGSCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SDGSContributionSection;
