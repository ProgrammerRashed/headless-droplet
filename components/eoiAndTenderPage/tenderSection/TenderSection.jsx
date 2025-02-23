import SectionHeading from "@/components/sectionHeader/SectionHeading";
import TenderCard from "./TenderCard";

function TenderSection({ data }) {
  const { section_title, items } = data;
  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading>{section_title}</SectionHeading>
        </div>
        <div className="mt-[30px] flex w-full flex-col items-start justify-start md:mt-10">
          {items?.map((card) => (
            <TenderCard key={card._id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TenderSection;
