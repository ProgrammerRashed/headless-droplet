import SocialMediaShare from "../socialMediaShare/SocialMediaShare";

function RichContentAreaSection() {
  return (
    <section data-aos="fade-up" className="my-10 md:my-20">
      <div className="container !max-w-[1000px]">
        <div className="rich-content-container">
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
        </div>
        <SocialMediaShare />
      </div>
    </section>
  );
}

export default RichContentAreaSection;
