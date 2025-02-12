// import DetailsBannerSection from "@/components/detailsPage/detailsBannerSection/DetailsBannerSection";
// import RealatedStoriesSliderSection from "@/components/detailsPage/realatedStoriesSliderSection/RealatedStoriesSliderSection";
// import RichContentAreaSection from "@/components/detailsPage/richContentAreaSection/RichContentAreaSection";

function DetailsPage() {
  return (
    <>
      {/* <DetailsBannerSection
        data={{
          sectionTitle:
            "Magic Herbs to not miss in Your Garden Medicinal plants",
          publishedDate: "06 September, 2024",
          category: "Agriculture",
        }}
      />
      <RichContentAreaSection
        data={{
          sectionClassName: "!max-w-[1000px]",
          shareButtons: true,
          content: `
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cursus tellus tellus eget
            suspendisse aliquet pretium vitae. Tincidunt quis nulla quisque
            ipsum rhoncus aenean diam eu. Gravida consequat at nullam lacus
            porttitor leo ipsum. Gravida consequat at nullam lacus porttitor leo
            ipsum.
          </p>
          <img src="/details-pages/details-image.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Cursus tellus tellus eget
            suspendisse aliquet pretium vitae. Tincidunt quis nulla quisque
            ipsum rhoncus aenean diam eu. Gravida consequat at nullam lacus
            porttitor leo ipsum. Gravida consequat at nullam lacus porttitor leo
            ipsum.
          </p>
          <ul>
            <li>
              Lectus gravida sed cras tempus pretium dolor tempor hendrerit.
            </li>
            <li>
              Lobortis in mi ac leo ullamcorper commodo quis diam quis. Tempus
              ut ultricies nunc a gravida. Arcu eu vitae interdum aenean blandit
              odio justo in. Semper purus mauris tempus auctor sed tincidunt
              ornare. Scelerisque sit euismod netus mattis.
            </li>
            <li>
              Sem orci dictum interdum eget mi semper ornare pretium vitae.
              Blandit sed facilisi vel semper pellentesque libero ut.
            </li>
          </ul>
          <blockquote>
            Tellus fusce lorem tristique odio. Tristique mauris malesuada
            blandit orci sed. Pretium gravida eleifend odio condimentum
            consequat scelerisque risus enim faucibus. Faucib ligula amet
            ultrices purus curabitur placerat ultrices lacus.
          </blockquote>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cursus tellus tellus eget
            suspendisse aliquet pretium vitae. Tincidunt quis nulla quisque
            ipsum rhoncus aenean diam eu. Gravida consequat at nullam lacus
            porttitor leo ipsum. Gravida consequat at nullam lacus porttitor leo
            ipsum.
          </p>
          <ul>
            <li>
              Lectus gravida sed cras tempus pretium dolor tempor hendrerit.
            </li>
            <li>
              Lobortis in mi ac leo ullamcorper commodo quis diam quis. Tempus
              ut ultricies nunc a gravida. Arcu eu vitae interdum aenean blandit
              odio justo in. Semper purus mauris tempus auctor sed tincidunt
              ornare. Scelerisque sit euismod netus mattis.
            </li>
            <li>
              Sem orci dictum interdum eget mi semper ornare pretium vitae.
              Blandit sed facilisi vel semper pellentesque libero ut.
            </li>
          </ul>
          <feagure>
            <video
              src="/videos/hero-banner.mp4"
              controls
              poster="/video-thumbnails/happy-farmer.jpg"
            >
              Your browser does not support the video tag.
            </video>
            <figcaption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, exercitationem.
            </figcaption>
          </feagure>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cursus tellus tellus eget
            suspendisse aliquet pretium vitae. Tincidunt quis nulla quisque
            ipsum rhoncus aenean diam eu. Gravida consequat at nullam lacus
            porttitor leo ipsum. Gravida consequat at nullam lacus porttitor leo
            ipsum.
          </p>
          `,
        }}
      />
      <RealatedStoriesSliderSection
        data={{
          sectionHeading: "Related  Stories",
          btnDetails: {
            title: "View all",
            link: "/",
          },
          blogs: [
            {
              id: crypto.randomUUID(),
              imageLink: "/reports-and-publications-page/feature-image-1.jpg",
              category: "Agriculture",
              title: "Foster science & technology in the service of humanity",
              details:
                "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis.",
              buttonDetails: { title: "Read More", link: "/" },
            },
            {
              id: crypto.randomUUID(),
              imageLink: "/reports-and-publications-page/feature-image-1.jpg",
              category: "Agriculture",
              title: "Foster science & technology in the service of humanity",
              details:
                "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis.",
              buttonDetails: { title: "Read More", link: "/" },
            },
            {
              id: crypto.randomUUID(),
              imageLink: "/reports-and-publications-page/feature-image-1.jpg",
              category: "Agriculture",
              title: "Foster science & technology in the service of humanity",
              details:
                "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis.",
              buttonDetails: { title: "Read More", link: "/" },
            },
            {
              id: crypto.randomUUID(),
              imageLink: "/reports-and-publications-page/feature-image-1.jpg",
              category: "Agriculture",
              title: "Foster science & technology in the service of humanity",
              details:
                "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis.",
              buttonDetails: { title: "Read More", link: "/" },
            },
            {
              id: crypto.randomUUID(),
              imageLink: "/reports-and-publications-page/feature-image-1.jpg",
              category: "Agriculture",
              title: "Foster science & technology in the service of humanity",
              details:
                "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis.",
              buttonDetails: { title: "Read More", link: "/" },
            },
            {
              id: crypto.randomUUID(),
              imageLink: "/reports-and-publications-page/feature-image-1.jpg",
              category: "Agriculture",
              title: "Foster science & technology in the service of humanity",
              details:
                "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis.",
              buttonDetails: { title: "Read More", link: "/" },
            },
          ],
        }}
      /> */}
    </>
  );
}

export default DetailsPage;
