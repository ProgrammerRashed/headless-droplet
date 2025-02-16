"use client";
import { useState, useEffect } from "react";
import ProjectCard from "../../bangladeshPage/projectsSection/ProjectCard";
import PaginationCustom from "../../shared/paginationCustom/PaginationCustom";
import SelectFrom from "../selectForm/SelectFrom";
import TabItems from "../tabItems/TabItems";

function ProjectsAndProgramsSection({ projects, category }) {
  const [currentCountry, setCurrentCountry] = useState(category || "all");
  const [currentStatus, setCurrentStatus] = useState("ongoing");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [innerPage, setInnerPage] = useState(category !== "all-projects");
  const itemsPerPage = 6;

  useEffect(() => {
    let filtered = projects;

    if (category !== "all-projects") {
      setInnerPage(true);
      setCurrentCountry(category);
    } else {
      setInnerPage(false);
    }

    setFilteredProjects(() => {
      let filtered = projects;

      // Filter by country
      if (currentCountry !== "all") {
        filtered = filtered.filter((project) =>
          project.categories.nodes.some((cat) => cat.slug === currentCountry)
        );
      }

      // Filter by project status
      filtered = filtered.filter((project) => project.projectStatus.value === currentStatus);

      return filtered;
    });

    setCurrentPage(1); // Reset pagination when filters change
  }, [currentCountry, currentStatus, projects, category]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        {!innerPage && (
          <TabItems
            setCurrentCountry={(slug) => setCurrentCountry(() => slug)}
            items={[
              { slug: "all", country: "All" },
              { slug: "switzerland", country: "Switzerland (HQ)" },
              { slug: "bangladesh", country: "Bangladesh" },
              { slug: "india", country: "India" },
              { slug: "kenya", country: "Kenya" },
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
