
import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function DonorsAndPartnersPage() {
  const pageData = await getPageData("donors-and-partners-page");
  return (<RenderBlocksHelper blocks={pageData}/>);
 
}

export default DonorsAndPartnersPage;
