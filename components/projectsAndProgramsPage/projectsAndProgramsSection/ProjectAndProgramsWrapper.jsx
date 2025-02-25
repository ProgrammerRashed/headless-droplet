import { getAllProjects } from '@/graphql/Components/getAllProjects'
import ProjectsAndProgramsSection from './ProjectsAndProgramsSection'
import { getAllProjectsByIDS } from '@/graphql/Components/getAllProjectsByIDS';

const ProjectAndProgramsWrapper = async ({data}) => {
  const enable_custom_selection = data?.data?.enable_custom_selection
  const innerPage = data?.data?.is_inner_page;
  let projects;

  const projectsArray = data?.data?.custom_projects;
  const idsArray = projectsArray?.map(project => project?.id);
  
  // Try to get specific projects first
  
  // If no specific projects found, get all projects and filter by databaseId
  if (!enable_custom_selection) {
    const allProjects = await getAllProjects();
    projects = allProjects.filter(project => 
      idsArray?.includes(project?.databaseId)
    )
  } else {
    const specificProjects = await getAllProjectsByIDS(idsArray);
    projects = specificProjects
  }

  return (
    <div>
      <ProjectsAndProgramsSection 
        innerPage={innerPage} 
        projects={projects}
      />
    </div>
  )
}

export default ProjectAndProgramsWrapper