import SectionHeading from "@/components/sectionHeader/SectionHeading";
import FindLocationCard from "./FindLocationCard";

function FindLocationCardSection({ data }) {
  const { sectionHeading, countries } = data;
  return (
    <section className="bg-surface py-[50px] md:py-20">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading>{sectionHeading}</SectionHeading>
        </div>
        <div className="mt-[30px] grid w-full grid-cols-1 gap-5 md:mt-[50px] md:grid-cols-2 md:gap-[30px]">
          {countries.map((country) => (
            <FindLocationCard key={country.id} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FindLocationCardSection;
