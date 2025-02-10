import ProjectsAndProgramsSection from "@/components/projectsAndProgramsPage/projectsAndProgramsSection/ProjectsAndProgramsSection";
import { getPageData } from "@/graphql/Components";
import { getAllProjects } from "@/graphql/Components/getAllProjects";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function ProjectsAndProgramsPage() {
  // const allProjects = await getAllProjects()
  const pageData = await getPageData("kenya-project-and-programs");
  return (<div> <RenderBlocksHelper blocks={pageData} />  </div>
  );

}

export default ProjectsAndProgramsPage;
{/* <ProjectsAndProgramsSection projects={allProjects}/> */}
