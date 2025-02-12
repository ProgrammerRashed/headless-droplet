// import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import PhotoGallerySection from "@/components/photoGalleryPage/photoGallerySection/PhotoGallerySection";

function PhotoGalleryPage() {
  return (
    <>
      {/* <SecondaryBanner
        data={{
          sectionHeading: "Photo Gallery",
          bannerCover: "/hero-banners/photo-gallery.jpg",
        }}
      /> */}
      <PhotoGallerySection
        data={{
          imageGalleries: [
            {
              id: crypto.randomUUID(),
              caption: "India SDG Conference 2023",
              gallery: [
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-1.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-2.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-3.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-4.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-5.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-6.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-7.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-8.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-9.jpg",
                  caption: "Meeting with team",
                },
              ],
            },
            {
              id: crypto.randomUUID(),
              caption: "India SDG Conference 2023",
              gallery: [
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-1.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-2.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-3.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-4.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-5.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-6.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-7.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-8.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-9.jpg",
                  caption: "Meeting with team",
                },
              ],
            },
            {
              id: crypto.randomUUID(),
              caption: "India SDG Conference 2023",
              gallery: [
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-1.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-2.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-3.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-4.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-5.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-6.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-7.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-8.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-9.jpg",
                  caption: "Meeting with team",
                },
              ],
            },
            {
              id: crypto.randomUUID(),
              caption: "India SDG Conference 2023",
              gallery: [
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-1.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-2.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-3.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-4.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-5.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-6.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-7.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-8.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-9.jpg",
                  caption: "Meeting with team",
                },
              ],
            },
            {
              id: crypto.randomUUID(),
              caption: "India SDG Conference 2023",
              gallery: [
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-1.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-2.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-3.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-4.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-5.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-6.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-7.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-8.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-9.jpg",
                  caption: "Meeting with team",
                },
              ],
            },
            {
              id: crypto.randomUUID(),
              caption: "India SDG Conference 2023",
              gallery: [
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-1.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-2.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-3.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-4.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-5.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-6.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-7.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-8.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-9.jpg",
                  caption: "Meeting with team",
                },
              ],
            },
            {
              id: crypto.randomUUID(),
              caption: "India SDG Conference 2023",
              gallery: [
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-1.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-2.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-3.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-4.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-5.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-6.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-7.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-8.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-9.jpg",
                  caption: "Meeting with team",
                },
              ],
            },
            {
              id: crypto.randomUUID(),
              caption: "India SDG Conference 2023",
              gallery: [
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-1.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-2.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-3.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-4.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-5.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-6.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-7.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-8.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-9.jpg",
                  caption: "Meeting with team",
                },
              ],
            },
            {
              id: crypto.randomUUID(),
              caption: "India SDG Conference 2023",
              gallery: [
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-1.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-2.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-3.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-4.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-5.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-6.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-7.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-8.jpg",
                  caption: "Meeting with team",
                },
                {
                  id: crypto.randomUUID(),
                  imageUrl: "/photo-gallery-page/photo-gallery-9.jpg",
                  caption: "Meeting with team",
                },
              ],
            },
          ],
        }}
      />
    </>
  );
}

export default PhotoGalleryPage;
