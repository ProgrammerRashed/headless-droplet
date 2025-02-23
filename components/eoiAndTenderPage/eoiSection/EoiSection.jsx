"use client"
import TabItems from "@/components/projectsAndProgramsPage/tabItems/TabItems";
import SectionHeading from "@/components/sectionHeader/SectionHeading";
import EoiCard from "./EoiCard";
import { useState } from "react";

function EoiSection({ data }) {
  const { section_title, items } = data;
  const [selectedCountry, setSelectedCountry] = useState("all");

  // Create unique array of countries
  const countries = [
    { slug: "all", value: "All" },
    ...[...new Set(items.map(item => item.country?.toLowerCase()))]
      .filter(Boolean) 
      .sort() 
      .map(country => ({
        slug: country.trim().toLowerCase(),
        value: country.trim().charAt(0).toUpperCase() + country.trim().slice(1)
      }))
  ];

  // Filter items based on selected country
  const filteredItems = items?.filter(item => 
    selectedCountry === "all" || 
    item.country?.toLowerCase().trim() === selectedCountry
  );

  return (
    <section className="py-10 md:py-20">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading>{section_title}</SectionHeading>
        </div>
        <div className="mt-[30px] md:mt-10">
          <TabItems 
            items={countries} 
            tabItems={selectedCountry}
            setTabItems={setSelectedCountry}
          />
        </div>
        <div className="mt-[30px] grid grid-cols-1 gap-[30px] md:mt-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems?.map((card) => (
            <EoiCard key={card._id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EoiSection;
