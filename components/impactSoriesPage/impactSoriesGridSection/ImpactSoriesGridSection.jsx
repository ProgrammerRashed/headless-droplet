"use client";

import { useState, useRef, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImpactStoryCard from "@/components/shared/monthlyGiftSection/ImpactStoryCard";
import PaginationCustom from "@/components/shared/paginationCustom/PaginationCustom";
import TabItems from "@/components/projectsAndProgramsPage/tabItems/TabItems";

function ImpactStoriesGridSection({ data }) {
  // Create Unique Category List
  const categoryArray = data?.map((blog) => ({
    value: blog.customCategory?.label || "Default Category",
    slug: blog.customCategory?.value?.toLowerCase() || "default-category",
  }));

  categoryArray.unshift({ value: "All", slug: "all" });

  const uniqueCategoryArray = Array.from(
    new Map(categoryArray.map((item) => [item.value, item])).values()
  );

  const [tabItems, setTabItems] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter data based on selected category
  const filteredData =
    tabItems === "all"
      ? data
      : data.filter((item) => item.customCategory?.value?.toLowerCase() === tabItems);

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [tabItems]);

  return (
    <section className="py-[50px] md:py-[100px]">
      <div className="container">
        <div className="mb-5 md:mb-10">
          <TabItems items={uniqueCategoryArray} tabItems={tabItems} setTabItems={setTabItems} />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-y-[60px] 0.5xl:grid-cols-3">
          {paginatedData.map((impactCard) => (
            <ImpactStoryCard key={impactCard?.id} card={impactCard} />
          ))}
        </div>
        {totalPages > 1 && (
          <PaginationCustom
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
}

export default ImpactStoriesGridSection;