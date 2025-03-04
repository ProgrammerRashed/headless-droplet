import { getPageData } from "@/graphql/Components";
import { getSeoData } from "@/graphql/Components/getSeoData";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export async function generateMetadata() {
  const seo = await getSeoData("/project-and-programs");
  
  return {
    title: seo?.title || "Projects and Programs - Sustainable Agriculture Foundation",
    description: seo?.metaDesc,
    keywords: seo?.metaKeywords,
    canonical: seo?.canonical,
  };
}

async function ProjectsAndProgramsPage() {
  const pageData = await getPageData("/project-and-programs");
  return (
    <div>
      <RenderBlocksHelper blocks={pageData} />
    </div>
  );
}

export default ProjectsAndProgramsPage;
