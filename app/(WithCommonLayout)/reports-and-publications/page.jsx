import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function ReportsAndPublicationsPage() {
  const pageData = await getPageData("reports-and-publications-2");
  return (<RenderBlocksHelper blocks={pageData}/>);
}

export default ReportsAndPublicationsPage;
