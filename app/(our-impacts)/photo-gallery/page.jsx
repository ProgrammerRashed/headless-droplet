import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import PhotoGallerySection from "@/components/photoGalleryPage/photoGallerySection/PhotoGallerySection";

function PhotoGalleryPage() {
  return (
    <>
      <SecondaryBanner
        data={{
          sectionHeading: "Photo Gallery",
          bannerCover: "/hero-banners/photo-gallery.jpg",
        }}
      />
      <PhotoGallerySection />
    </>
  );
}

export default PhotoGalleryPage;
