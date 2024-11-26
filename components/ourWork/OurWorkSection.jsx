import SectionHeading from "../sectionHeader/SectionHeading";
import OurWorkCard from "./OurWorkCard";

function OurWorkSection() {
  return (
    <section className="bg-[#1A5245] py-[50px] md:pb-[100px] md:pt-20">
      <div className="container">
        <SectionHeading className="text-center text-white">
          Our work
        </SectionHeading>
      </div>
      <div className="container">
        <div className="grid w-full grid-cols-1 gap-5 pt-10 sm:grid-cols-2 md:grid-cols-3">
          <OurWorkCard />
          <OurWorkCard />
          <OurWorkCard />
          <OurWorkCard />
          <OurWorkCard />
          <OurWorkCard />
        </div>
      </div>
    </section>
  );
}

export default OurWorkSection;
