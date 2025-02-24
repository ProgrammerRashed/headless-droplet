import CurrentOpeningWrapper from "@/components/careerPage/currentOpeningSection.jsx/CurrentOpeningWrapper";
import { getPageData } from "@/graphql/Components";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";
async function VolunteerPage() {
  const pageData = await getPageData("volunteer-page");
  return (
    <>
      <RenderBlocksHelper blocks={pageData} />
      <CurrentOpeningWrapper />
    </>
  );
}

export default VolunteerPage;
