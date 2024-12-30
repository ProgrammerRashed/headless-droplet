import TabItems from "@/components/projectsAndProgramsPage/tabItems/TabItems";
import SectionHeading from "@/components/sectionHeader/SectionHeading";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import EoiCard from "./EoiCard";

function EoiSection({ data }) {
  const { sectionTitle, eoiItems, buttonDetails } = data;
  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading>{sectionTitle}</SectionHeading>
        </div>
        <div className="mt-[30px] md:mt-10">
          <TabItems
            items={[
              { id: crypto.randomUUID(), country: "All" },
              { id: crypto.randomUUID(), country: "Switzerland (HQ)" },
              { id: crypto.randomUUID(), country: "Bangladesh" },
              { id: crypto.randomUUID(), country: "India" },
              { id: crypto.randomUUID(), country: "Kenya" },
            ]}
          />
        </div>
        <div className="mt-[30px] grid grid-cols-1 gap-[30px] md:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {eoiItems.map((card) => (
            <EoiCard key={card.id} card={card} />
          ))}
        </div>
        <div
          data-aos="fade-up"
          className="mt-[30px] flex justify-center md:mt-10"
        >
          <PrimaryButton>{buttonDetails.title}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

export default EoiSection;
