"use client";
import { useState, useEffect } from "react";
import ProjectCard from "../../bangladeshPage/projectsSection/ProjectCard";
import PaginationCustom from "../../shared/paginationCustom/PaginationCustom";
import SelectFrom from "../selectForm/SelectFrom";
import TabItems from "../tabItems/TabItems";

function ProjectsAndProgramsSection({ projects, category }) {
  const [tabItems, setTabItems] = useState(category || "all");
  const [currentStatus, setCurrentStatus] = useState("ongoing");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [innerPage, setInnerPage] = useState(category !== "all-projects");
  const itemsPerPage = 6;

  useEffect(() => {
    let filtered = projects;

    if (category !== "all-projects") {
      setInnerPage(true);
      setTabItems(category);
    } else {
      setInnerPage(false);
    }

    setFilteredProjects(() => {
      let filtered = projects;

      // Filter by country
      if (tabItems !== "all") {
        filtered = filtered.filter((project) =>
          project.categories.nodes.some((cat) => cat.slug === tabItems)
        );
      }

      // Filter by project status
      filtered = filtered.filter((project) => project.projectStatus.value === currentStatus);

      return filtered;
    });

    setCurrentPage(1); // Reset pagination when filters change
  }, [tabItems, currentStatus, projects, category]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        {!innerPage && (
          <TabItems
          setTabItems={(slug) => setTabItems(() => slug)}
            items={[
              { slug: "all", value: "All" },
              { slug: "switzerland", value: "Switzerland (HQ)" },
              { slug: "bangladesh", value: "Bangladesh" },
              { slug: "india", value: "India" },
              { slug: "africas-project", value: "Africa" },
            ]}
          />
        )}
        <div className="flex w-full flex-col gap-5">
          <SelectFrom setCurrentStatus={(status) => setCurrentStatus(() => status)} />
          <div className="grid w-full grid-cols-1 gap-[30px] md:grid-cols-2 md:gap-x-[20px] md:gap-y-[60px] lg:gap-x-[30px]">
            {filteredProjects.length < 1 && (
              <div className="min-h-[50vh] flex justify-center items-center col-span-2">
                <p className="lg:text-3xl lg:max-w-[700px] text-center max-w-[300px] text-lg">
                  There are currently no projects to display. Stay tuned for exciting updates coming soon!
                </p>
              </div>
            )}
            {paginatedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          {filteredProjects.length > itemsPerPage && (
            <PaginationCustom
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectsAndProgramsSection;
