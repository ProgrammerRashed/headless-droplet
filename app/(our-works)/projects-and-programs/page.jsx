import ProjectsAndProgramsSection from "@/components/projectsAndProgramsPage/projectsAndProgramsSection/ProjectsAndProgramsSection";
import { getPageData } from "@/graphql/Components";
import { getAllProjects } from "@/graphql/Components/getAllProjects";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function ProjectsAndProgramsPage() {
  const allProjects = await getAllProjects()
  const pageData = await getPageData("/project-and-programs");
  
  return (<div>

    <RenderBlocksHelper blocks={pageData} />
    <ProjectsAndProgramsSection projects={allProjects}/>
  </div>
  );

}

export default ProjectsAndProgramsPage;
