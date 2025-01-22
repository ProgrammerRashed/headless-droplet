import TabItems from "@/components/projectsAndProgramsPage/tabItems/TabItems";
import MonthlyGiftCard from "@/components/shared/monthlyGiftSection/MonthlyGiftCard";
import PaginationCustom from "@/components/shared/paginationCustom/PaginationCustom";

function ImpactSoriesGridSection({ data }) {
  const { impactCards } = data;
  return (
    <section className="py-[50px] md:py-[100px]">
      <div className="container">
        <div className="mb-5 md:mb-10">
          <TabItems
            items={[
              { id: crypto.randomUUID(), country: "Agriculutre" },
              { id: crypto.randomUUID(), country: "Product Development" },
              { id: crypto.randomUUID(), country: "Stakeholder Coordination" },
              { id: crypto.randomUUID(), country: "Policy Advocacy" },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-y-[60px] 0.5xl:grid-cols-3">
          {impactCards.map((impactCard) => (
            <MonthlyGiftCard key={impactCard.id} card={impactCard} />
          ))}
        </div>
        <PaginationCustom />
      </div>
    </section>
  );
}

export default ImpactSoriesGridSection;
