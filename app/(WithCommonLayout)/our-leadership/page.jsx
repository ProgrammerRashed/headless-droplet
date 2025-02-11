import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";
// our-leadership
async function OurLeadershipPage() {
  const pageData = await getPageData("/main-our-leadership");
  return (<RenderBlocksHelper blocks={pageData}/>);
}

export default OurLeadershipPage;
