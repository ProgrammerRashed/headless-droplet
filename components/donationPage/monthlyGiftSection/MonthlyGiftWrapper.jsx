import { getAllProjects } from "@/graphql/Components/getAllProjects"
import MonthlyGiftSection from "./MonthlyGiftSection"
import { getAllProjectsByIDS } from "@/graphql/Components/getAllProjectsByIDS";

const MonthlyGiftWrapper = async ({data}) => {
    const projectsArray = data?.data?.projects;
    const idsArray = projectsArray?.map(project => project?.id);
    let projects;

    // Try to get specific projects first
    const specificProjects = await getAllProjectsByIDS(idsArray);
    
    // If no specific projects found, get all projects and filter by databaseId
    if (!specificProjects?.length && idsArray?.length) {
      const allProjects = await getAllProjects();
      projects = allProjects?.filter(project => 
        idsArray.includes(project?.databaseId)
      );
    } else {
      projects = specificProjects;
    }

    const giftData = {
        sectionTitle: data?.data?.section_title,
        buttonDetails: data?.data?.button_details[0],
        cardItems: projects
    }
    
    return (
        <div>
            <MonthlyGiftSection data={giftData}/>
        </div>
    )
}

export default MonthlyGiftWrapper