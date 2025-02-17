"use client"
import { useState, useEffect } from "react";
import SectionHeading from "@/components/sectionHeader/SectionHeading";
import PublicationCard from "./PublicationCard";
import PaginationCustom from "@/components/shared/paginationCustom/PaginationCustom";
import FilterAndSearchForm from "./FilterAndSearchForm";

function PopularPublicationsSection({ publications, data }) {
  const [filteredPublications, setFilteredPublications] = useState(publications);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Create unique category and country options for filtering
  const customCategoryArray = [
    ...new Map(
      publications.map(item => [
        item.node.customCategory,
        { label: item.node.customCategory, value: item.node.customCategory }
      ])
    ).values()
  ];

  const customCountryArray = [
    ...new Map(
      publications.map(item => [
        `${item.node.country?.label}-${item.node.country?.value}`,
        { label: item.node.country?.label, value: item.node.country?.value }
      ])
    ).values()
  ];

  useEffect(() => {
    // Filter publications based on category, country, and search query
    let filtered = publications;

    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter(
        (item) => item.node.customCategory === selectedCategory
      );
    }

    if (selectedCountry && selectedCountry !== "all") {
      filtered = filtered.filter(
        (item) => `${item.node.country?.value}` === selectedCountry
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.node.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPublications(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  }, [selectedCategory, selectedCountry, searchQuery, publications]);

  // Pagination logic (e.g., showing 9 publications per page)
  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredPublications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredPublications.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-[50px] lg:py-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading>{data?.section_title}</SectionHeading>
        </div>
        <FilterAndSearchForm
          countries={customCountryArray}
          categories={customCategoryArray}
          setSelectedCategory={setSelectedCategory}
          setSelectedCountry={setSelectedCountry}
          setSearchQuery={setSearchQuery}
        />
        <div className="mt-[30px] grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-10 lg:grid-cols-3 lg:gap-[30px] xl:grid-cols-4 xl:gap-x-[30px] xl:gap-y-[60px]">
          {currentItems.map((popularCard, index) => (
            <PublicationCard key={index} card={popularCard} />
          ))}

          {
            currentItems.length === 0 && (<div>No Publication Found</div>
            )

          }
        </div>
        {
          currentItems.length >= 8 && (
            <PaginationCustom
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          )
        }

      </div>
    </section>
  );
}

export default PopularPublicationsSection;
