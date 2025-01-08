import SectionHeading from "@/components/sectionHeader/SectionHeading";
import CurrentOpeningFilter from "./CurrentOpeningFilter";
import CurrentOpeningCard from "./CurrentOpeningCard";
import ApplyForm from "./ApplyForm";
import ApplyNowForm from "@/components/applyNowPage/applyNowSection/ApplyNowForm";

function CurrentOpeningSection({ data }) {
  const { sectionTitle, jobs } = data;
  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      {jobs && jobs.length ? (
        <div className="container">
          <div className="flex flex-col gap-5 md:gap-[30px] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[640px]" data-aos="fade-up">
              <SectionHeading>{sectionTitle}</SectionHeading>
            </div>
            <CurrentOpeningFilter />
          </div>
          <div className="col-span-1 mt-[30px] grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-1 lg:gap-0">
            {jobs.map((job) => (
              <CurrentOpeningCard key={job.id} card={job} />
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
              We currently have no job openings. Didn’t find a suitable and
              available vacancy? Send your updated Resume.
            </p>
          </div>
          <ApplyNowForm />
        </div>
      )}
    </section>
  );
}

export default CurrentOpeningSection;
