import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

export default async function HomePage() {
  const pageData = await getPageData("/");
  return (<RenderBlocksHelper blocks={pageData}/>);
}