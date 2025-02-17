import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function OurHistoryPage() {
    const pageData = await getPageData("our-history");
  
  return <RenderBlocksHelper blocks={pageData}/>
}

export default OurHistoryPage;
