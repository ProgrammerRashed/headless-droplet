import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";
async function ImpactStoriesPage() {
  const pageData = await getPageData("impact-stories");
  return (<RenderBlocksHelper blocks={pageData}/>)
}

export default ImpactStoriesPage;
