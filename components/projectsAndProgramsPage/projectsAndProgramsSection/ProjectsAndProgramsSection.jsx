"use client";
import { useState, useEffect } from "react";
import ProjectCard from "../../bangladeshPage/projectsSection/ProjectCard";
import PaginationCustom from "../../shared/paginationCustom/PaginationCustom";
import SelectFrom from "../selectForm/SelectFrom";
import TabItems from "../tabItems/TabItems";

function ProjectsAndProgramsSection({ projects, innerPage }) {
  const [tabItems, setTabItems] = useState("all");
  const [currentStatus, setCurrentStatus] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  // Create unique categories array from projects
  const uniqueCategories = [
    { value: "All", slug: "all" },
    ...new Set(projects?.flatMap(project => 
      project.categories?.nodes
        ?.filter(category => category.slug !== 'all-projects')
        ?.map(category => 
          JSON.stringify({ value: category.name, slug: category.slug })
        )
    ))
  ].map(cat => typeof cat === 'string' ? JSON.parse(cat) : cat);

  useEffect(() => {

    setFilteredProjects(() => {
      let filtered = projects;

      // Filter by country
      if (tabItems !== "all") {
        filtered = filtered.filter((project) =>
          project.categories.nodes.some((cat) => cat.slug === tabItems)
        );
      }

      // Filter by project status only if not "all"
      if (currentStatus !== "all") {
        filtered = filtered.filter((project) => project.projectStatus.value === currentStatus);
      }

      return filtered;
    });

    setCurrentPage(1);
  }, [tabItems, currentStatus, projects]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        {!innerPage && (
          <TabItems
          setTabItems={(slug) => setTabItems(() => slug)}
            items={uniqueCategories}
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
