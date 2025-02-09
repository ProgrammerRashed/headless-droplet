import { getMembersByCategory } from "@/graphql/Components/getMembersByCategory"


const TeamGridSection = async ({data}) => {
    const {category, section_title} = data.data
    const membersData = await getMembersByCategory(category)
  return (
    <div>TeamGridSection</div>
  )
}

export default TeamGridSection