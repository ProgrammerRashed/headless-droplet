import SectionHeading from "../sectionHeader/SectionHeading";

import SDGSCard from "./SDGSCard";

function SDGSContributionSection() {
  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div className="container lg:px-[95px]">
        <SectionHeading className="text-center normal-case">
          Our contribution to the SDGs
        </SectionHeading>
        <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5">
          <SDGSCard />
          <SDGSCard />
          <SDGSCard />
          <SDGSCard />
          <SDGSCard />
          <SDGSCard />
          <SDGSCard />
          <SDGSCard />
          <SDGSCard />
          <SDGSCard />
        </div>
      </div>
    </section>
  );
}

export default SDGSContributionSection;
