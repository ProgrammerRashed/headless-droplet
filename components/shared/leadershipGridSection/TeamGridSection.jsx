import { getAllMembers } from "@/graphql/Components/getAllMembers"
import LeadershipGridSection from "./LeadershipGridSection"


const TeamGridSection = async ({data}) => {
  
    const membersArray = data.data.members;
    const idsArray = membersArray.map(member => member.id);
    const sectionClassName = data?.data?.section_classnames
    const sectionGridClass = data?.data?.grid_classnames
    const sectionTitle = data?.data?.section_title
    const cardBackgroundSection = data?.data?.card_background
    const cardImageSize = data?.data?.image_size
    const cardDetailsClass = data?.data?.card_details_class
    const leaders = await getAllMembers(idsArray)
  return (
    <div>
        <LeadershipGridSection sectionTitle={sectionTitle} leaders={leaders} cardBackgroundSection={cardBackgroundSection} cardImageSize={cardImageSize} cardDetailsClass={cardDetailsClass} sectionClassName={sectionClassName} sectionGridClass={sectionGridClass} />
    </div>
  )
}

export default TeamGridSection