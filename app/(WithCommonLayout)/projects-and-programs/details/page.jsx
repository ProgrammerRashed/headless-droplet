import ProjectSection from "@/components/bangladeshPage/projectsSection/ProjectSection";
import RichContentAreaSection from "@/components/detailsPage/richContentAreaSection/RichContentAreaSection";
import ProjectDetailsBanner from "@/components/donationPage/projectDetailsBanner/ProjectDetailsBanner";

function ProjectDetailsPage() {
  return (
    <>
      <ProjectDetailsBanner
        data={{
          sectionHeading:
            "Safe food for everyone – building low-cost 2.3 screenhouses to produce quality perishables",
          donor: "Lionel Brown",
          tenure: "03 Aug 2024 - 10 Sep 24",
          linkDetails: { title: "Download Pdf", link: "/" },
          bannerImgLink: "/projects-programs/project-details-banner.png",
        }}
      />
      <RichContentAreaSection
        data={{
          sectionClassName: "!max-w-[1000px]",
          shareButtons: true,
          content: `
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cursus tellus tellus eget suspendisse aliquet pretium vitae. Tincidunt quis nulla quisque ipsum rhoncus aenean diam eu. Gravida consequat at nullam lacus porttitor leo ipsum. Gravida consequat at nullam lacus porttitor leo ipsum.
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
          <img src="/details-pages/details-image.jpg" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Cursus tellus tellus eget suspendisse aliquet pretium vitae. Tincidunt quis nulla quisque ipsum rhoncus aenean diam eu. Gravida consequat at nullam lacus porttitor leo ipsum. Gravida consequat at nullam lacus porttitor leo ipsum.
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
            Tellus fusce lorem tristique odio. Tristique mauris malesuada blandit orci sed. Pretium gravida eleifend odio condimentum consequat scelerisque risus enim faucibus. Faucib ligula amet ultrices purus curabitur placerat ultrices lacus.
          </blockquote>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cursus tellus tellus eget suspendisse aliquet pretium vitae. Tincidunt quis nulla quisque ipsum rhoncus aenean diam eu. Gravida consequat at nullam lacus porttitor leo ipsum. Gravida consequat at nullam lacus porttitor leo ipsum.
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
            Lorem ipsum dolor sit amet consectetur. Cursus tellus tellus eget suspendisse aliquet pretium vitae. Tincidunt quis nulla quisque ipsum rhoncus aenean diam eu. Gravida consequat at nullam lacus porttitor leo ipsum. Gravida consequat at nullam lacus porttitor leo ipsum.
          </p>
          `,
        }}
      />
      <ProjectSection
        data={{
          SectionTitle: "Projects and Programs",
          titlePositionClassName: "text-left",
          viewAllBtnDetails: {
            title: "View All Project and Program",
            link: "",
          },
          projects: [
            {
              id: crypto.randomUUID(),
              title:
                "Promoting Risk Mitigation Measures for Climate Change Adaptation (Surokkha)",
              donor: "Swiss Agency for Development and Cooperation",
              tenure: "Sep 2018 - Sep 2022",
              details:
                "Surokkha focused to pilot and test various index-based crop insurance products and distribution channels, as well as develop risk mitigation methods tailored for farmers cultivating Rice (Aman and Boro), Potato, and Maize.",
              imageLink: "/projects-programs/project-1.png",
              pdfLink: "/projects-programs/pdfs/project-1.pdf",
            },
            {
              id: crypto.randomUUID(),
              title: "Nutrition in City Ecosystems (NICE)",
              donor: "Swiss Agency for Development and Cooperation",
              tenure: "Aug 2021 - Jun 2025",
              details:
                "The NICE Project facilitates locally led action for improved nutrition in low and middle income countries through agricultural, food and health sector collaborations, and public-private engagements, with strong emphasis on the role of women and youth entrepreneurs.",
              imageLink: "/projects-programs/project-2.jpg",
              pdfLink: "/projects-programs/pdfs/project-1.pdf",
            },
          ],
          duplicatedProjects: [
            {
              id: crypto.randomUUID(),
              title:
                "Promoting Risk Mitigation Measures for Climate Change Adaptation (Surokkha)",
              donor: "Swiss Agency for Development and Cooperation",
              tenure: "Sep 2018 - Sep 2022",
              details:
                "Surokkha focused to pilot and test various index-based crop insurance products and distribution channels, as well as develop risk mitigation methods tailored for farmers cultivating Rice (Aman and Boro), Potato, and Maize.",
              imageLink: "/projects-programs/project-1.png",
              pdfLink: "/projects-programs/pdfs/project-1.pdf",
            },
            {
              id: crypto.randomUUID(),
              title: "Nutrition in City Ecosystems (NICE)",
              donor: ": Swiss Agency for Development and Cooperation",
              tenure: "Aug 2021 - Jun 2025",
              details:
                "The NICE Project facilitates locally led action for improved nutrition in low and middle income countries through agricultural, food and health sector collaborations, and public-private engagements, with strong emphasis on the role of women and youth entrepreneurs.",
              imageLink: "/projects-programs/project-2.jpg",
              pdfLink: "/projects-programs/pdfs/project-1.pdf",
            },
            {
              id: crypto.randomUUID(),
              title:
                "Promoting Risk Mitigation Measures for Climate Change Adaptation (Surokkha)",
              donor: "Swiss Agency for Development and Cooperation",
              tenure: "Sep 2018 - Sep 2022",
              details:
                "Surokkha focused to pilot and test various index-based crop insurance products and distribution channels, as well as develop risk mitigation methods tailored for farmers cultivating Rice (Aman and Boro), Potato, and Maize.",
              imageLink: "/projects-programs/project-1.png",
              pdfLink: "/projects-programs/pdfs/project-1.pdf",
            },
          ],
        }}
      />
    </>
  );
}

export default ProjectDetailsPage;
