import CurrentOpeningWrapper from "@/components/careerPage/currentOpeningSection.jsx/CurrentOpeningWrapper";
import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function CareerPage() {
  const pageData = await getPageData("career-page");
  return (<div>
    <RenderBlocksHelper blocks={pageData} />
    <CurrentOpeningWrapper/>
  </div>
);
}

export default CareerPage;