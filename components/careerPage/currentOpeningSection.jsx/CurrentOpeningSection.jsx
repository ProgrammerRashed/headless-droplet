import SectionHeading from "@/components/sectionHeader/SectionHeading";
import CurrentOpeningFilter from "./CurrentOpeningFilter";
import CurrentOpeningCard from "./CurrentOpeningCard";
import ApplyNowForm from "@/components/applyNowPage/applyNowSection/ApplyNowForm";
import { getAllJob } from "@/graphql/Components/getAllJob";

async function CurrentOpeningSection() {
  const sectionTitle = "Current openings"
  const jobs = await getAllJob();

  // Get current date and time
const currentDate = new Date();

// Filter out expired jobs
const activeJobs = jobs.filter((job) => {
  const deadlineDate = new Date(job.node.deadline);
  return deadlineDate > currentDate; 
});

  const countryArray = activeJobs?.map((job) => ({
    label: job.node.location.label,
    value: job.node.location.value
  }));
  countryArray.unshift({label: "All Location", value: "all-location"})

// Remove duplicates based on the "value" property
  const uniqueCountryArray = Array.from(
  new Map(countryArray.map((item) => [item.value, item])).values()
);
const departmentArray = activeJobs?.map((job) => ({
  label: job.node.department.label,
  value: job.node.department.value
}));
departmentArray.unshift({label: "All Department", value: "all-department"})
// Remove duplicates based on the "value" property
const uniqueDepartmentArray = Array.from(
  new Map(departmentArray.map((item) => [item.value, item])).values()
);

  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      {activeJobs && activeJobs.length ? (
        <div className="container">
          <div className="flex flex-col gap-5 md:gap-[30px] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[640px]" data-aos="fade-up">
              <SectionHeading>{sectionTitle}</SectionHeading>
            </div>
            {
              activeJobs.length > 0 &&  <CurrentOpeningFilter departments={uniqueDepartmentArray} country={uniqueCountryArray} />
            }
           
          </div>
          <div className="col-span-1 mt-[30px] grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-1 lg:gap-0">
            {activeJobs?.map((job, index) => (
              <CurrentOpeningCard key={index} card={job} />
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="mb-5 flex flex-col items-center justify-center gap-[10px] md:mb-10">
            <div data-aos="fade-up">
              <SectionHeading>{sectionTitle}</SectionHeading>
            </div>
            <p
              data-aos="fade-up"
              className="text-center text-base font-normal leading-[26px] text-gray-600"
            >
             We currently don’t have any job openings at the moment. However, if you don’t see a suitable position available, feel free to send us your updated resume—we’d love to keep it on file for future opportunities!
            </p>
          </div>
          <ApplyNowForm />
        </div>
      )}
    </section>
  );
}

export default CurrentOpeningSection;
