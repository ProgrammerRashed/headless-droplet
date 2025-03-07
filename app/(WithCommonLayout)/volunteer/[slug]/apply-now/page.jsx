import ApplyNowSection from "@/components/applyNowPage/applyNowSection/ApplyNowSection";

import { getSingleJob } from "@/graphql/Components/getSingleJob";

async function ApplyNowPage({params}) {
    const JobSlug = (await params).slug
    const singleJob = await getSingleJob(JobSlug)
  return (
    <>
      <ApplyNowSection data={singleJob} />
    </>
  );
}

export default ApplyNowPage;
