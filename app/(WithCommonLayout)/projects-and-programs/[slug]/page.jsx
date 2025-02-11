import ProjectSection from "@/components/bangladeshPage/projectsSection/ProjectSection";
import RichContentAreaSection from "@/components/detailsPage/richContentAreaSection/RichContentAreaSection";
import ProjectDetailsBanner from "@/components/donationPage/projectDetailsBanner/ProjectDetailsBanner";
import { getSingleProject } from "@/graphql/Components/getSingleProject";
import formatDate from "@/utils/formatDate";

async function ProjectDetailsPage({params}) {
  const projectSlug = (await params).slug
  const singleProjectData = await getSingleProject(projectSlug)
  const tenure = `${formatDate(singleProjectData?.tenure?.[0]?.start_date) || "No Date Found"} - ${formatDate(singleProjectData?.tenure?.[0]?.end_date) || "No Date Found"}`;
  const donor = singleProjectData?.donor
  const bannerImageLink = singleProjectData?.featuredImage?.node?.mediaItemUrl
  const linkDetails = {
    title: "Download Pdf",
    link: singleProjectData?.pdfFile || "#"
  }
  const sectionHeading = singleProjectData?.title
  const content = singleProjectData?.content
  const category = singleProjectData?.categories?.nodes?.map(cat => cat.slug)?.filter(slug => slug !== 'all-projects');
  console.log(category)

  //DATA FOR RELATED PROJECT SECTION
    // const projectsArray = data.data.projects;
    //   const idsArray = projectsArray.map(project => project.id);
    //   const specificProjects = await getAllProjects(idsArray);
    //   const SectionTitle = data.data.sectionTitle;
    //   const viewAllBtnDetails = {
    //       title: data.data.view_all_btn_details[0].title,
    //       link: data.data.view_all_btn_details[0].link
    //   }
    //   const projects = specificProjects
    //   const titlePositionClassName = data.data.project_title_classname
  return (
    <>
      <ProjectDetailsBanner
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
          shareButtons: true,
          content: content,
        }}
      />
     {/* <ProjectSection SectionTitle={SectionTitle}  viewAllBtnDetails={viewAllBtnDetails} projects={projects} titlePositionClassName={titlePositionClassName}/> */}
    </>
  );
}

export default ProjectDetailsPage;
