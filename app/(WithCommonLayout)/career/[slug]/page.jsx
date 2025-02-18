import JobDetailsHeroSection from "@/components/detailsPage/jobDetailsHeroSection/JobDetailsHeroSection";
import RichContentAreaSection from "@/components/detailsPage/richContentAreaSection/RichContentAreaSection";
import { getSingleJob } from "@/graphql/Components/getSingleBlog copy";

async function JobDetailsPage({params}) {
  const JobSlug = (await params).slug
  const singleJob = await getSingleJob(JobSlug)
  return (
    <>
     <JobDetailsHeroSection
        data={{
          sectionHeading: singleJob?.title,
          linkDetails: { title: "Apply Now", link: "/" },
        }}
      /> 
      <RichContentAreaSection
        data={{
          sectionClassName: "!max-w-[1108px]",
          shareButtons: false,
          buttonDetails: { title: "Apply Now", link: "/" },
          content:singleJob?.content ,
        }}
      /> 
    </>
  );
}

export default JobDetailsPage;
