import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function FAQPage() {
  const pageData = await getPageData("/faq-page");
  return (<RenderBlocksHelper blocks={pageData}/>);
}

export default FAQPage;
