import { getAllProjects } from "@/graphql/Components/getAllProjects";
import ProjectSection from "./ProjectSection";

const ProjectSectionWrapper = async ({data}) => {
    const projectsArray = data?.data?.projects;
    const idsArray = projectsArray?.map(project => project?.id);
    const specificProjects = await getAllProjects(idsArray);
    const SectionTitle = data?.data?.sectionTitle;
    const viewAllBtnDetails = {
        title: data?.data?.view_all_btn_details?.[0]?.title,
        link: data?.data?.view_all_btn_details?.[0]?.link
    }
    const projects = specificProjects
    const titlePositionClassName = data?.data?.project_title_classname
  return (<ProjectSection SectionTitle={SectionTitle}  viewAllBtnDetails={viewAllBtnDetails} projects={projects} titlePositionClassName={titlePositionClassName}/>
  )
}

export default ProjectSectionWrapper