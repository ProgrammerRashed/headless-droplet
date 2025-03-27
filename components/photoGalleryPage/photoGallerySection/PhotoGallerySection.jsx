import PhotoGalleryCard from "./PhotoGalleryCard";

function PhotoGallerySection({ data }) {
 const {image_galleries} =data?.data;
  return (
    <section className="py-[50px] md:py-[100px]">
      <div className="container">
      
        <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {image_galleries?.map((gallery) => (
            <PhotoGalleryCard key={gallery._id} gallery={gallery} />
          ))}
        </div>
        <p className="mt-10 italic">All images, videos, and assets are the property of SAF. Usage requires proper attribution to SAF. </p>
      </div>
    </section>
  );
}

export default PhotoGallerySection;
