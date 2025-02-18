import CurrentOpeningSection from './CurrentOpeningSection';
import { getAllJob } from '@/graphql/Components/getAllJob';

const CurrentOpeningWrapper = async () => {
  const jobs = await getAllJob() || [];

  return (
    <div><CurrentOpeningSection jobs={jobs}/></div>
  )
}

export default CurrentOpeningWrapper