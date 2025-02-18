import CurrentOpeningSection from "@/components/careerPage/currentOpeningSection.jsx/CurrentOpeningSection";
import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function CareerPage() {
  const pageData = await getPageData("career-page");
  return (<div>
    <RenderBlocksHelper blocks={pageData} />
    <CurrentOpeningSection/>
  </div>
);
}

export default CareerPage;