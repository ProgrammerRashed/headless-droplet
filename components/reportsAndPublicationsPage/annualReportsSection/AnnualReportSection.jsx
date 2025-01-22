import TabItems from "@/components/projectsAndProgramsPage/tabItems/TabItems";
import SectionHeading from "@/components/sectionHeader/SectionHeading";
import Link from "next/link";
import AnnualReportCard from "./AnnualReportCard";

function AnnualReportSection({ data }) {
  const { sectionTitle, reports } = data;
  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading>{sectionTitle}</SectionHeading>
        </div>
        <div className="mb-5 mt-[30px] md:mb-10">
          <TabItems
            items={[
              { id: crypto.randomUUID(), country: "2023" },
              { id: crypto.randomUUID(), country: "2022" },
              { id: crypto.randomUUID(), country: "2021" },
              { id: crypto.randomUUID(), country: "2020" },
              { id: crypto.randomUUID(), country: "2019" },
              { id: crypto.randomUUID(), country: "2018" },
              { id: crypto.randomUUID(), country: "2017" },
              { id: crypto.randomUUID(), country: "2016" },
              { id: crypto.randomUUID(), country: "2015" },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2 md:gap-[30px]">
          {reports.map((report) => (
            <AnnualReportCard key={report.id} card={report} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AnnualReportSection;
