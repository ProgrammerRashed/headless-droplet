import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function LeadershipTeamPage() {
  const pageData = await getPageData("/kenya-leadership-team");
  return (<RenderBlocksHelper blocks={pageData}/>);
  
}

export default LeadershipTeamPage;

