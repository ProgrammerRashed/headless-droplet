import SectionHeading from "@/components/sectionHeader/SectionHeading";
import LeadershipCard from "./LeadershipCard";
import { cn } from "@/lib/utils";

function LeadershipGridSection({
  sectionClassName,
  sectionGridClass,
  sectionTitle,
  leaders,
  cardBackgroundSection,
  cardImageSize,
  cardDetailsClass,
}) {
  return (
    <section className={cn("py-[50px] md:py-[100px]", sectionClassName)}>
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading>{sectionTitle}</SectionHeading>
        </div>
        <div
          className={cn(
            "mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-[50px] md:gap-[30px] lg:grid-cols-3",
            sectionGridClass,
          )}
        >
          {leaders?.map((leader, index) => (
            <LeadershipCard
              cardBackgroundSection={cardBackgroundSection}
              cardImageSize={cardImageSize}
              cardDetailsClass={cardDetailsClass}
              key={index}
              people={leader}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipGridSection;
