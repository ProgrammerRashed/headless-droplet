import RenderBlocksHelper from "@/utils/RenderBlocksHelper";
import { getPageData } from "@/graphql/Components";

async function WhoWeArePage() {
  const pageData = await getPageData("/who-we-are-2");
  return (
    <>
      <RenderBlocksHelper blocks={pageData}/>
    </>
  );
}

export default WhoWeArePage;
