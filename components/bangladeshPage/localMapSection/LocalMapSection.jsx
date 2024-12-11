import SectionHeading from "@/components/sectionHeader/SectionHeading";
import Image from "next/image";

function LocalMapSection({ sectionTitle, mapImage }) {
  return (
    <section className="my-[50px] md:my-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading className="text-center">
            {sectionTitle}
          </SectionHeading>
        </div>
        <div className="mt-10 flex items-center justify-center px-5 md:mt-20">
          <Image
            data-aos="fade-up"
            src={mapImage}
            alt=""
            width={700}
            height={700}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default LocalMapSection;
