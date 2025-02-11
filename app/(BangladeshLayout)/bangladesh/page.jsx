
import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function BangladeshPage() {
  const pageData = await getPageData("/bangladesh-page");
  return (<RenderBlocksHelper blocks={pageData}/>);
}

export default BangladeshPage;
