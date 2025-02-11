import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function BangladeshContactUspage() {
    const pageData = await getPageData("/bangladesh-contact-us-2");
  return (
    <>
      <RenderBlocksHelper blocks={pageData}/>
     
    </>
  );
}

export default BangladeshContactUspage;
