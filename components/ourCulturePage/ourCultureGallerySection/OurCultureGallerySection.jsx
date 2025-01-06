import SectionHeading from "@/components/sectionHeader/SectionHeading";
import Image from "next/image";
import OurCultureGalleryCard from "./OurCultureGalleryCard";

function OurCultureGallerySection({ data }) {
  const { sectionTitle, details, photos } = data;
  return (
    <section className="py-[50px] md:py-[100px]">
      <div className="container">
        <SectionHeading>{sectionTitle}</SectionHeading>
        <p className="mt-[30px] text-base font-normal leading-[26px] text-gray-600">
          {details}
        </p>
        <div className="mt-[30px] grid grid-cols-1 grid-rows-[320px_320px_320px_320px_320px_320px_320px] gap-[10px] sm:grid-cols-2 sm:grid-rows-[400px_400px_400px_400px] md:mt-[60px] md:gap-5 0.5xl:grid-cols-3 0.5xl:grid-rows-[480px_480px_480px]">
          {photos.map((photo) => (
            <OurCultureGalleryCard key={photo.id} card={photo} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurCultureGallerySection;
