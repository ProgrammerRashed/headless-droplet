import SectionHeading from "@/components/sectionHeader/SectionHeading";
import LeadershipCard from "./LeadershipCard";

function LeadershipGridSection({ sectionTitle, leaders }) {
  return (
    <section className="my-[50px] md:my-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading>{sectionTitle}</SectionHeading>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-[50px] md:gap-[30px] lg:grid-cols-3">
          {leaders.map((leader) => (
            <LeadershipCard key={leader.id} people={leader} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipGridSection;
