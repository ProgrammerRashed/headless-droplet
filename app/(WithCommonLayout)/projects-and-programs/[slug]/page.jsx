import ProjectSection from "@/components/bangladeshPage/projectsSection/ProjectSection";
import RichContentAreaSection from "@/components/shared/PlainRichTextContainer";
import ProjectDetailsBanner from "@/components/donationPage/projectDetailsBanner/ProjectDetailsBanner";
import { getProjectsByCategory } from "@/graphql/Components/getProjectsByCategory";
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
  const category = singleProjectData?.categories?.nodes?.map(cat => cat.slug)?.filter(slug => slug !== 'all-projects')[0];
  const specificProjects = await getProjectsByCategory(category);

  // DATA FOR RELATED PROJECT SECTION
      const SectionTitle = "Related Projects & Programs";
      const viewAllBtnDetails = {
          title: "View All",
          link:"/projects-and-programs"
      }
      const projects = specificProjects.slice(0, 2)
      const titlePositionClassName =  "text-left"
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
     <ProjectSection SectionTitle={SectionTitle}  viewAllBtnDetails={viewAllBtnDetails} projects={projects} titlePositionClassName={titlePositionClassName}/>
    </>
  );
}

export default ProjectDetailsPage;
