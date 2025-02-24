import { getAllProjects } from "@/graphql/Components/getAllProjects";
import ProjectSection from "./ProjectSection";
import { getAllProjectsByIDS } from "@/graphql/Components/getAllProjectsByIDS";

const ProjectSectionWrapper = async ({data}) => {
    const projectsArray = data?.data?.projects;
    const idsArray = projectsArray?.map(project => project?.id);
    let projects;
    
    // Try to get specific projects first
    const specificProjects = await getAllProjectsByIDS(idsArray);
    
    // If no specific projects found, get all projects and filter by databaseId
    if (!specificProjects?.length && idsArray?.length) {
      const allProjects = await getAllProjects();
      projects = allProjects.filter(project => 
        idsArray.includes(project?.databaseId)
      )?.slice(0, 2);
    } else {
      projects = specificProjects?.slice(0, 2);
    }

    const SectionTitle = data?.data?.section_title;
    const viewAllBtnDetails = {
        title: data?.data?.view_all_btn_details?.[0]?.title,
        link: data?.data?.view_all_btn_details?.[0]?.link
    }
    const titlePositionClassName = data?.data?.project_title_classname;
    return (
      <ProjectSection 
        SectionTitle={SectionTitle}  
        viewAllBtnDetails={viewAllBtnDetails} 
        projects={projects} 
        titlePositionClassName={titlePositionClassName}
      />
    );
}

export default ProjectSectionWrapper;