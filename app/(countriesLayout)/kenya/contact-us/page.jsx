import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function KenyaContactUspage() {
    const pageData = await getPageData("/kenya-contact-us");
  return (
    <>
      <RenderBlocksHelper blocks={pageData}/>
     
    </>
  );
}

export default KenyaContactUspage;
