import JobDetailsHeroSection from "@/components/detailsPage/jobDetailsHeroSection/JobDetailsHeroSection";
import RichContentAreaSection from "@/components/shared/PlainRichTextContainer";
import { getSingleJob } from "@/graphql/Components/getSingleJob";

async function JobDetailsPage({params}) {
  const JobSlug = (await params).slug
  const singleJob = await getSingleJob(JobSlug)
  return (
    <>
     <JobDetailsHeroSection
        data={{
          sectionHeading: singleJob?.title,
          linkDetails: { title: "Apply Now", link: `/career/${JobSlug}/apply-now` },
        }}
      /> 
      <RichContentAreaSection
        data={{
          sectionClassName: "!max-w-[1108px]",
          shareButtons: false,
          buttonDetails: { title: "Apply Now", link: `/career/${JobSlug}/apply-now` },
          content:singleJob?.content ,
        }}
      /> 
    </>
  );
}

export default JobDetailsPage;
