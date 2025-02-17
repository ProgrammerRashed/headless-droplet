"use client";
import { useState } from "react";
import TabItems from "@/components/projectsAndProgramsPage/tabItems/TabItems";
import SectionHeading from "@/components/sectionHeader/SectionHeading";
import AnnualReportCard from "./AnnualReportCard";

function AnnualReportSection({ data, publications }) {
  const { section_title } = data;
  
  // Extract unique years
  const yearArray = [
    ...new Map(
      publications.map(item => [
        item.node.year,
        { value: item.node.year, slug: item.node.year }
      ])
    ).values()
  ];

  // Set initial state with first tab value
  const [currentCountry, setCurrentCountry] = useState(null);
  const [tabItems, setTabItems] = useState(yearArray.length > 0 ? yearArray[0].slug : null);



  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading>{section_title}</SectionHeading>
        </div>
        <div className="mb-5 mt-[30px] md:mb-10">
          <TabItems
            items={yearArray}
            setTabItems={setTabItems}
            tabItems={tabItems}
       
          />
        </div>

        {/* Render content based on selected year */}
        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2 md:gap-[30px]">
          {publications
            .filter(report => report.node.year === tabItems)
            .map((report, index) => (
              <AnnualReportCard key={index} card={report} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default AnnualReportSection;
