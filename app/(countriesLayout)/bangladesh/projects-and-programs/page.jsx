import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function ProjectsAndProgramsPage() {
  const pageData = await getPageData("/bangladesh-project-and-programs");
  return (<div>
        <RenderBlocksHelper blocks={pageData} />
  </div>
  );

}

export default ProjectsAndProgramsPage;
