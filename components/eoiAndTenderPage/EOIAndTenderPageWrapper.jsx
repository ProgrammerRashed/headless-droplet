import EoiSection from "@/components/eoiAndTenderPage/eoiSection/EoiSection";
import TenderSection from "@/components/eoiAndTenderPage/tenderSection/TenderSection";

const EOIAndTenderPageWrapper = ({data}) => {
  if(data?.data?.section_type === 'eoi'){
    return <EoiSection data={data?.data}/>
  }else if(data?.data?.section_type === 'tender'){
    return  <TenderSection data={data?.data}/>
  }else{
    return null
  }
}

export default EOIAndTenderPageWrapper
