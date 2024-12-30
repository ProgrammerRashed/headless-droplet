import ProjectCard from "../../bangladeshPage/projectsSection/ProjectCard";
import PaginationCustom from "../paginationCustom/PaginationCustom";
import SelectFrom from "../selectForm/SelectFrom";
import TabItems from "../tabItems/TabItems";

function ProjectsAndProgramsSection({ data }) {
  const { projects } = data;
  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        <TabItems
          items={[
            { id: crypto.randomUUID(), country: "All" },
            { id: crypto.randomUUID(), country: "Switzerland (HQ)" },
            { id: crypto.randomUUID(), country: "Bangladesh" },
            { id: crypto.randomUUID(), country: "India" },
            { id: crypto.randomUUID(), country: "Kenya" },
          ]}
        />
        <div className="flex w-full flex-col gap-5">
          <SelectFrom />
          <div className="grid w-full grid-cols-1 gap-[30px] md:grid-cols-2 md:gap-x-[20px] md:gap-y-[60px] lg:gap-x-[30px]">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <PaginationCustom />
        </div>
      </div>
    </section>
  );
}

export default ProjectsAndProgramsSection;
