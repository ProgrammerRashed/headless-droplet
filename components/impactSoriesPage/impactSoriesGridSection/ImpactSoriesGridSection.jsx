import TabItems from "@/components/projectsAndProgramsPage/tabItems/TabItems";
import MonthlyGiftCard from "@/components/shared/monthlyGiftSection/MonthlyGiftCard";
import PaginationCustom from "@/components/shared/paginationCustom/PaginationCustom";

function ImpactSoriesGridSection({ data }) {
  // Create Unique Country List
const categoryArray = data?.map((blog) => ({
  value: blog.customCategory?.value || "Default Category", // Handle null cases
  slug: blog.customCategory?.value?.toLowerCase() || "default-category", // Handle null cases
}));
  categoryArray.unshift({ value: "All", slug: "all" });

  const uniquecategoryArray = Array.from(
    new Map(categoryArray.map((item) => [item.value, item])).values()
  );

  return (
    <section className="py-[50px] md:py-[100px]">
      <div className="container">
        <div className="mb-5 md:mb-10">
          <TabItems
            items={uniquecategoryArray}
          />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-y-[60px] 0.5xl:grid-cols-3">
          {data?.map((impactCard) => (
            <MonthlyGiftCard key={impactCard.id} card={impactCard} />
          ))}
        </div>
        <PaginationCustom />
      </div>
    </section>
  );
}

export default ImpactSoriesGridSection;
