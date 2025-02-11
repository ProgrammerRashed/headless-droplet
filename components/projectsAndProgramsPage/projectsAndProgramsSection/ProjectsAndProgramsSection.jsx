"use client";
import { useState, useEffect } from "react";
import ProjectCard from "../../bangladeshPage/projectsSection/ProjectCard";
import PaginationCustom from "../../shared/paginationCustom/PaginationCustom";
import SelectFrom from "../selectForm/SelectFrom";
import TabItems from "../tabItems/TabItems";

function ProjectsAndProgramsSection({ projects, category }) {
  const [currentCountry, setCurrentCountry] = useState("all");
  const [currentStatus, setCurrentStatus] = useState("ongoing");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [currentPage, setCurrentPage] = useState(1);
  const [innerPage, setInnerPage] = useState(false);
  const itemsPerPage = 6;

  useEffect(() => {
    let filtered = projects;
    if (category !== "all-projects") {
      setInnerPage(true);
      setCurrentCountry(category);
    } else {
      setInnerPage(false);
    }
    
    // Filter by country
    if (currentCountry !== "all") {
      filtered = filtered.filter((project) =>
        project.categories.nodes.some((category) => category.slug === currentCountry)
      );
    }
  
    // Filter by project status
    filtered = filtered.filter((project) => project.projectStatus.value === currentStatus);
  
    setFilteredProjects(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [currentCountry, currentStatus, projects, category]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        {
          !innerPage && ( <TabItems
            setCurrentCountry={setCurrentCountry}
            items={[
              { slug: "all", country: "All" },
              { slug: "switzerland", country: "Switzerland (HQ)" },
              { slug: "bangladesh", country: "Bangladesh" },
              { slug: "india", country: "India" },
              { slug: "kenya", country: "Kenya" },
            ]}
          />

          )
        }
       
        <div className="flex w-full flex-col gap-5">
          <SelectFrom setCurrentStatus={setCurrentStatus} />
          <div className="grid w-full grid-cols-1 gap-[30px] md:grid-cols-2 md:gap-x-[20px] md:gap-y-[60px] lg:gap-x-[30px]">
            {paginatedProjects?.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          {filteredProjects?.length > itemsPerPage && (
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
