import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import VideoGallerySection from "@/components/videoGalleryPage/videoGallerySection/VideoGallerySection";

function VideoGalleryPage() {
  return (
    <>
      <SecondaryBanner
        data={{
          sectionHeading: "Video Gallery",
          bannerCover: "/hero-banners/video-gallery.jpg",
        }}
      />
      <VideoGallerySection
        data={{
          videos: [
            {
              id: crypto.randomUUID(),
              videoLink:
                "https://www.youtube.com/embed/f3H1KPn9v_0?autoplay=1&modestbranding=1&controls=1&cc_load_policy=0&showinfo=0",
              videoThumbNail:
                "/videos/farming-transform/thumbnails/video-thumbnail-1.png",
              videoTitle: "Bangladesh: An Experience of Crop Insurance",
            },
            {
              id: crypto.randomUUID(),
              videoLink:
                "https://www.youtube.com/embed/f3H1KPn9v_0?autoplay=1&modestbranding=1&controls=1&cc_load_policy=0&showinfo=0",
              videoThumbNail:
                "/videos/farming-transform/thumbnails/video-thumbnail-1.png",
              videoTitle: "Bangladesh: An Experience of Crop Insurance",
            },
            {
              id: crypto.randomUUID(),
              videoLink:
                "https://www.youtube.com/embed/f3H1KPn9v_0?autoplay=1&modestbranding=1&controls=1&cc_load_policy=0&showinfo=0",
              videoThumbNail:
                "/videos/farming-transform/thumbnails/video-thumbnail-1.png",
              videoTitle: "Bangladesh: An Experience of Crop Insurance",
            },
            {
              id: crypto.randomUUID(),
              videoLink:
                "https://www.youtube.com/embed/f3H1KPn9v_0?autoplay=1&modestbranding=1&controls=1&cc_load_policy=0&showinfo=0",
              videoThumbNail:
                "/videos/farming-transform/thumbnails/video-thumbnail-1.png",
              videoTitle: "Bangladesh: An Experience of Crop Insurance",
            },
            {
              id: crypto.randomUUID(),
              videoLink:
                "https://www.youtube.com/embed/f3H1KPn9v_0?autoplay=1&modestbranding=1&controls=1&cc_load_policy=0&showinfo=0",
              videoThumbNail:
                "/videos/farming-transform/thumbnails/video-thumbnail-1.png",
              videoTitle: "Bangladesh: An Experience of Crop Insurance",
            },
            {
              id: crypto.randomUUID(),
              videoLink:
                "https://www.youtube.com/embed/f3H1KPn9v_0?autoplay=1&modestbranding=1&controls=1&cc_load_policy=0&showinfo=0",
              videoThumbNail:
                "/videos/farming-transform/thumbnails/video-thumbnail-1.png",
              videoTitle: "Bangladesh: An Experience of Crop Insurance",
            },
          ],
        }}
      />
    </>
  );
}

export default VideoGalleryPage;
