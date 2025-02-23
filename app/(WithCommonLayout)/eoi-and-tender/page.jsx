import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";
async function EIOAndInvolvedPage() {
  const pageData = await getPageData("eoi-and-tender-page");
  return <RenderBlocksHelper blocks={pageData} />;
}

export default EIOAndInvolvedPage;