

import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function OurCulturePage() {
  const pageData = await getPageData("our-culture-2");
  return <RenderBlocksHelper blocks={pageData} />;
}

export default OurCulturePage;
