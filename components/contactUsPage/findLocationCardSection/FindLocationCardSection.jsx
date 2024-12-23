import SectionHeading from "@/components/sectionHeader/SectionHeading";
import FindLocationCard from "./FindLocationCard";

function FindLocationCardSection() {
  return (
    <section className="bg-surface py-[50] md:py-20">
      <div className="container">
        <SectionHeading>Find our Locations</SectionHeading>
        <div className="mt-[30px] grid w-full grid-cols-1 gap-5 md:mt-[50px] md:grid-cols-2 md:gap-[30px]">
          <FindLocationCard />
          <FindLocationCard />
          <FindLocationCard />
          <FindLocationCard />
        </div>
      </div>
    </section>
  );
}

export default FindLocationCardSection;
