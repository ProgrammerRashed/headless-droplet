import SectionHeading from "@/components/sectionHeader/SectionHeading";
import OurValuesCard from "./OurValuesCard";

function OurValuesSection({ sectionHeading, sectionSubHeading, values }) {
  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading className="mb-5 capitalize">
            {sectionHeading}
          </SectionHeading>
        </div>
        {sectionSubHeading && (
          <p
            data-aos="fade-up"
            className="max-w-[740px] text-base font-normal leading-[26px] text-gray-600"
          >
            {sectionSubHeading}
          </p>
        )}
      </div>
      <div className="container">
        <div className="mt-[30px] grid w-full grid-cols-1 sm:grid-cols-2 sm:gap-4 md:mt-10 lg:grid-cols-3 xl:gap-0">
          {values.map((value, i) => (
            <OurValuesCard index={i} key={value.id} card={value} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurValuesSection;
