import SectionHeading from "@/components/sectionHeader/SectionHeading";
import { cn } from "@/lib/utils";
import OurImpactCard from "./OurImpactCard";

function OurImpactSection({ data }) {
  const { counters, sectionHeading } = data;
  return (
    <section className="bg-surface py-[50] md:py-[100px]">
      <SectionHeading className="text-center">{sectionHeading}</SectionHeading>
      <div className="container">
        <div
          className={cn(
            "mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          )}
        >
          {counters.map((counter) => (
            <OurImpactCard key={counter.id} counter={counter} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurImpactSection;
