import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import ProjectsAndProgramsSection from "@/components/projectsAndProgramsPage/projectsAndProgramsSection/ProjectsAndProgramsSection";
import { getPageData } from "@/graphql/Components";
import { getAllProjects } from "@/graphql/Components/getAllProjects";
import RenderBlocksHelper from "@/utils/RenderBlocksHelper";

async function ProjectsAndProgramsPage({ data }) {
  const allProjects = await getAllProjects()

  const pageData = await getPageData("/project-and-programs");
  return (<div>

    <RenderBlocksHelper blocks={pageData} />
    <ProjectsAndProgramsSection
    projects={allProjects}
      data={{
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
      }}
    />
  </div>
  );

}

export default ProjectsAndProgramsPage;


// return (
//   <>
//     {/* <SecondaryBanner
//       data={{
//         sectionHeading: "Projects & programs",
//         bannerCover: "/hero-banners/who-we-are.jpg",
//       }}
//     /> */}
//     <ProjectsAndProgramsSection
//       data={{
//         projects: [
//           {
//             id: crypto.randomUUID(),
//             title:
//               "Promoting Risk Mitigation Measures for Climate Change Adaptation (Surokkha)",
//             donor: "Swiss Agency for Development and Cooperation",
//             tenure: "Sep 2018 - Sep 2022",
//             details:
//               "Surokkha focused to pilot and test various index-based crop insurance products and distribution channels, as well as develop risk mitigation methods tailored for farmers cultivating Rice (Aman and Boro), Potato, and Maize.",
//             imageLink: "/projects-programs/project-1.png",
//             pdfLink: "/projects-programs/pdfs/project-1.pdf",
//           },
//           {
//             id: crypto.randomUUID(),
//             title: "Nutrition in City Ecosystems (NICE)",
//             donor: "Swiss Agency for Development and Cooperation",
//             tenure: "Aug 2021 - Jun 2025",
//             details:
//               "The NICE Project facilitates locally led action for improved nutrition in low and middle income countries through agricultural, food and health sector collaborations, and public-private engagements, with strong emphasis on the role of women and youth entrepreneurs.",
//             imageLink: "/projects-programs/project-2.jpg",
//             pdfLink: "/projects-programs/pdfs/project-1.pdf",
//           },
//           {
//             id: crypto.randomUUID(),
//             title:
//               "Promoting Risk Mitigation Measures for Climate Change Adaptation (Surokkha)",
//             donor: "Swiss Agency for Development and Cooperation",
//             tenure: "Sep 2018 - Sep 2022",
//             details:
//               "Surokkha focused to pilot and test various index-based crop insurance products and distribution channels, as well as develop risk mitigation methods tailored for farmers cultivating Rice (Aman and Boro), Potato, and Maize.",
//             imageLink: "/projects-programs/project-1.png",
//             pdfLink: "/projects-programs/pdfs/project-1.pdf",
//           },
//           {
//             id: crypto.randomUUID(),
//             title: "Nutrition in City Ecosystems (NICE)",
//             donor: "Swiss Agency for Development and Cooperation",
//             tenure: "Aug 2021 - Jun 2025",
//             details:
//               "The NICE Project facilitates locally led action for improved nutrition in low and middle income countries through agricultural, food and health sector collaborations, and public-private engagements, with strong emphasis on the role of women and youth entrepreneurs.",
//             imageLink: "/projects-programs/project-2.jpg",
//             pdfLink: "/projects-programs/pdfs/project-1.pdf",
//           },
//           {
//             id: crypto.randomUUID(),
//             title:
//               "Promoting Risk Mitigation Measures for Climate Change Adaptation (Surokkha)",
//             donor: "Swiss Agency for Development and Cooperation",
//             tenure: "Sep 2018 - Sep 2022",
//             details:
//               "Surokkha focused to pilot and test various index-based crop insurance products and distribution channels, as well as develop risk mitigation methods tailored for farmers cultivating Rice (Aman and Boro), Potato, and Maize.",
//             imageLink: "/projects-programs/project-1.png",
//             pdfLink: "/projects-programs/pdfs/project-1.pdf",
//           },
//           {
//             id: crypto.randomUUID(),
//             title: "Nutrition in City Ecosystems (NICE)",
//             donor: "Swiss Agency for Development and Cooperation",
//             tenure: "Aug 2021 - Jun 2025",
//             details:
//               "The NICE Project facilitates locally led action for improved nutrition in low and middle income countries through agricultural, food and health sector collaborations, and public-private engagements, with strong emphasis on the role of women and youth entrepreneurs.",
//             imageLink: "/projects-programs/project-2.jpg",
//             pdfLink: "/projects-programs/pdfs/project-1.pdf",
//           },
//           {
//             id: crypto.randomUUID(),
//             title:
//               "Promoting Risk Mitigation Measures for Climate Change Adaptation (Surokkha)",
//             donor: "Swiss Agency for Development and Cooperation",
//             tenure: "Sep 2018 - Sep 2022",
//             details:
//               "Surokkha focused to pilot and test various index-based crop insurance products and distribution channels, as well as develop risk mitigation methods tailored for farmers cultivating Rice (Aman and Boro), Potato, and Maize.",
//             imageLink: "/projects-programs/project-1.png",
//             pdfLink: "/projects-programs/pdfs/project-1.pdf",
//           },
//           {
//             id: crypto.randomUUID(),
//             title: "Nutrition in City Ecosystems (NICE)",
//             donor: "Swiss Agency for Development and Cooperation",
//             tenure: "Aug 2021 - Jun 2025",
//             details:
//               "The NICE Project facilitates locally led action for improved nutrition in low and middle income countries through agricultural, food and health sector collaborations, and public-private engagements, with strong emphasis on the role of women and youth entrepreneurs.",
//             imageLink: "/projects-programs/project-2.jpg",
//             pdfLink: "/projects-programs/pdfs/project-1.pdf",
//           },
//         ],
//       }}
//     />
//   </>
// );