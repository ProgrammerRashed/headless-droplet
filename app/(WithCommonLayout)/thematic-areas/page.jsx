import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function ThematicAreaPage() {
  const pageData = await getPageData("thematic-area");
  return <RenderBlocksHelper blocks={pageData} />;
}

export default ThematicAreaPage;
