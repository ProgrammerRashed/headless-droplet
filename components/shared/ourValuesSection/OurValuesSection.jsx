import SectionHeading from "@/components/sectionHeader/SectionHeading";
import OurValuesCard from "./OurValuesCard";
import { cn } from "@/lib/utils";

function OurValuesSection({ data }) {
  const { section_heading, section_sub_heading, values, grid_class_name } = data.data;
  return (
    <section className="bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading className="mb-5 capitalize">
            {section_heading}
          </SectionHeading>
        </div>
        {section_sub_heading && (
          <p
            data-aos="fade-up"
            className="max-w-[740px] text-base font-normal leading-[26px] text-gray-600"
          >
            {section_sub_heading}
          </p>
        )}
      </div>
      <div className="container">
        <div
          className={cn(
            "mt-[30px] grid w-full grid-cols-1 sm:grid-cols-2 sm:gap-4 md:mt-10 lg:grid-cols-3 xl:gap-0",
            grid_class_name,
          )}
        >
          {values.map((value, i) => (
            <OurValuesCard index={i} key={value._id} card={value} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurValuesSection;
