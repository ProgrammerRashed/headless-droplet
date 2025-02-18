import { getAllProjects } from "@/graphql/Components/getAllProjects"
import MonthlyGiftSection from "./MonthlyGiftSection"

const MonthlyGiftWrapper = async ({data}) => {
    const projectsArray = data?.data?.projects;
    const idsArray = projectsArray?.map(project => project?.id);
    const allProjects = await getAllProjects(idsArray);
    const giftData ={
        sectionTitle:  data?.data?.section_title,
        buttonDetails: data?.data?.button_details[0],
        cardItems: allProjects
    }
    
  return (
    <div>
        <MonthlyGiftSection data={giftData}/>
    </div>
  )
}

export default MonthlyGiftWrapper