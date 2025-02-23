import ProjectSection from "@/components/bangladeshPage/projectsSection/ProjectSection";
import RichContentAreaSection from "@/components/detailsPage/richContentAreaSection/RichContentAreaSection";
import ProjectDetailsBanner from "@/components/donationPage/projectDetailsBanner/ProjectDetailsBanner";

async function ThematicAreaPage() {

  return (
    <>
     {/* <ProjectDetailsBanner
        data={{
          sectionHeading,
          donor,
          tenure,
          linkDetails,
          bannerImageLink,
        }}
      />
     
      <RichContentAreaSection
        data={{
          sectionClassName: "!max-w-[1000px]",
          shareButtons: false,
          content: content,
        }}
      />
      
     {/* <ProjectSection SectionTitle={SectionTitle}  viewAllBtnDetails={viewAllBtnDetails} projects={projects} titlePositionClassName={titlePositionClassName}/> */}
    </>
  );
}

export default ThematicAreaPage;
