import { getAllProjects } from '@/graphql/Components/getAllProjects'
import ProjectsAndProgramsSection from './ProjectsAndProgramsSection'

const ProjectAndProgramsWrapper = async ({data}) => {
  const allProjects = await getAllProjects()
  const category = data?.data?.category
  console.log(allProjects)
  return (
    <div>
           <ProjectsAndProgramsSection category={category} projects={allProjects}/>
    </div>
  )
}

export default ProjectAndProgramsWrapper