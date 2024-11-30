import Image from "next/image";
import SectionHeading from "../sectionHeader/SectionHeading";
import OurWorkCard from "./OurWorkCard";

function OurWorkSection() {
  return (
    <section className="relative">
      <div className="relative bg-[#1A5245]/95 py-[50px] md:py-[100px]">
        <div className="container">
          <div className="w-full">
            <SectionHeading className="text-center text-white">
              Our work
            </SectionHeading>

            <div className="grid w-full grid-cols-1 gap-5 pt-10 sm:grid-cols-2 md:grid-cols-3 md:gap-[30px] md:pt-[50px]">
              <OurWorkCard />
              <OurWorkCard />
              <OurWorkCard />
              <OurWorkCard />
              <OurWorkCard />
              <OurWorkCard />
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/our-work/bacground-cover.jpg"
        width={1440}
        height={1098}
        alt="Our work cover"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
    </section>
  );
}

export default OurWorkSection;
