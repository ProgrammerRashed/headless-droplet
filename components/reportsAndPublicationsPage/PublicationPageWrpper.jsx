import { getAllResource } from "@/graphql/Components"
import AnnualReportSection from "./annualReportsSection/AnnualReportSection"
import FeaturedPublicationsSection from "./featuredPublicationsSection/FeaturedPublicationsSection"
import PopularPublicationsSection from "./popularPublicationsSection/PopularPublicationsSection"

const PublicationPageWrpper = async ({data}) => {
    const resources = await getAllResource()
    const {publication_type} = data.data
    const idArray = data?.data?.resources.map((item) => item.id)
    const featuredPublication =  await getAllResource(idArray)
    const popularPublications = resources.filter((item) => item?.node?.publicationType?.value == "popular")
    const annualPublications = resources.filter((item) => item?.node?.publicationType?.value == "annual")

    if(publication_type == "feature") return <FeaturedPublicationsSection publications={featuredPublication}  data={data.data}/>
    if(publication_type == "popular") return <PopularPublicationsSection publications={popularPublications} data={data?.data}/>
    if(publication_type == "annual") return <AnnualReportSection publications={annualPublications} data={data?.data}/>
  return (
    <div>

    </div>
  )
}

export default PublicationPageWrpper