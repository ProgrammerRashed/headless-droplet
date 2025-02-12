import SectionHeading from "@/components/sectionHeader/SectionHeading";
import Image from "next/image";

function LocalMapSection({ data }) {
  const {section_title, map_image} = data.data
  return (
    <section className="my-[50px] md:my-[100px]">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading className="text-center">
            {section_title}
          </SectionHeading>
        </div>
        <div className="mt-10 flex items-center justify-center px-5 md:mt-20">
          <Image
            data-aos="fade-up"
            src={map_image || "https://staging.notionhive.com/wordpress/saf/wp-content/uploads/2025/02/Blog-Thrumbnai-2.png"}
            alt="Map Image"
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
