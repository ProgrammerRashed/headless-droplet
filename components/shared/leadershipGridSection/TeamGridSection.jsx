import { getMembersByCategory } from "@/graphql/Components/getMembersByCategory"
import LeadershipGridSection from "./LeadershipGridSection"


const TeamGridSection = async ({data}) => {
    const {category} = data.data
    const sectionClassName = data?.data?.section_classnames
    const sectionGridClass = data?.data?.grid_classnames
    const sectionTitle = data?.data?.section_title
    const cardBackgroundSection = data?.data?.card_background
    const cardImageSize = data?.data?.image_size
    const cardDetailsClass = data?.data?.card_details_class
    const leaders = await getMembersByCategory(category)
  return (
    <div>
        <LeadershipGridSection sectionTitle={sectionTitle} leaders={leaders} cardBackgroundSection={cardBackgroundSection} cardImageSize={cardImageSize} cardDetailsClass={cardDetailsClass} sectionClassName={sectionClassName} sectionGridClass={sectionGridClass} />
    </div>
  )
}

export default TeamGridSection