
import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function DonationPage() {
  const pageData = await getPageData("donation-page");
  return (<RenderBlocksHelper blocks={pageData}/>);
 
}

export default DonationPage;