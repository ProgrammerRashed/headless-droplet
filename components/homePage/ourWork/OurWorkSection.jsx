import Image from "next/image";
import SectionHeading from "../../sectionHeader/SectionHeading";
import OurWorkCard from "./OurWorkCard";

function OurWorkSection({ data }) {
  const  { section_heading, bg_cover_image, cards } = data?.data;

  return (
    <section className="relative">
      <div className="relative bg-[#1A5245]/95 py-[50px] md:py-[100px]">
        <div className="container">
          <div className="w-full">
            <div data-aos="fade-up">
              <SectionHeading className="text-center text-white">
                {section_heading}
              </SectionHeading>
            </div>

            <div className="grid w-full grid-cols-1 gap-5 pt-10 sm:grid-cols-2 xl:grid-cols-3 xl:pt-[50px]">
              {cards.map((card) => (
                <OurWorkCard key={card._id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Image
        src={bg_cover_image || "/thumbnail.png"}
        width={1440}
        height={1098}
        alt="Our work cover"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
      />
    </section>
  );
}

export default OurWorkSection;
