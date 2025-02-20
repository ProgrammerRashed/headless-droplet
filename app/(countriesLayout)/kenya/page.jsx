
import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function KenyaPage() {
  const pageData = await getPageData("/kenya-main-page");
  return (<RenderBlocksHelper blocks={pageData}/>);
}

export default KenyaPage;
