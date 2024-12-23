import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import DownloadBooksSection from "@/components/ourHistoryPage/downloadBooksSection/DownloadBooksSection";
import SideBySideSection from "@/components/ourHistoryPage/sideBySideSection/SideBySideSection";
import TimelineSection from "@/components/ourHistoryPage/timelineSection/TimelineSection";

function OurHistoryPage() {
  return (
    <>
      <SecondaryBanner
        data={{
          sectionHeading: "Our History",
          bannerCover: "/hero-banners/who-we-are.jpg",
        }}
      />
      <SideBySideSection
        heading="Our History"
        secondaryHeading="The Sustainable Agriculture Foundation (SAF) has its roots in a 40-year legacy of agricultural innovation and corporate philanthropy."
        details="Its journey began with the Ciba-Geigy Foundation in 1981, which focused on smallholder farming, starting with a groundbreaking initiative to improve millet yields in Mali. From the beginning, it prioritized local expertise, an approach that was revolutionary for its time. Renamed the Syngenta Foundation for Sustainable Agriculture (SFSA) in 2001, it became a global leader in supporting smallholders, enhancing incomes, and improving food security through innovation and market access. SAF now continues this legacy, empowering rural communities and tackling key agricultural challenges in Asia and Africa."
        bannerImg="/our-history/banner.jpg"
      />
      <DownloadBooksSection
        sectionHeadig="Download Our Materials"
        books={[
          {
            id: crypto.randomUUID(),
            title: "Our Legacy Book",
            image: "/books-download/book-2.png",
            downloadLink: "/books-download/legacy-book.pdf",
          },
          {
            id: crypto.randomUUID(),
            title: "Last Annual Report",
            image: "/books-download/book-1.png",
            downloadLink: "/books-download/last-annual-report.pdf",
          },
        ]}
      />
      <TimelineSection
        sectionHeading="Timeline"
        cards={[
          {
            id: crypto.randomUUID(),
            timeLine: "2024",
            title: "Establishment of Legacy Organizations",
            description:
              "Created Sustainable Agriculture Foundations International Association as a legacy with country chapters in Bangladesh, India, Kenya, and local independent entities in Mali, Nigeria, and Senegal to carry forward the mission of sustainable agricultural development.",
            imageLink: "/timeline/2024.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2022",
            title: "Transition of Financial Support",
            description:
              "The Syngenta Group Board decides to phase out its financial support, setting the stage for independent growth.",
            imageLink: "/timeline/2022.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2019",
            title: "Creation of AEGF",
            description:
              "The Agri-Entrepreneur Growth Foundation (AEGF) is co-created in India to amplify the agri-entrepreneurship movement.",
            imageLink: "/timeline/2019.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2017",
            title: "Spin-off of Farmforce",
            description:
              "The innovative Farmforce tool is a spin-off designed to streamline agricultural value chains and improve traceability.",
            imageLink: "/timeline/2017.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2014",
            title: "Launch of ACRE Africa",
            description:
              "SFSA co-creates ACRE Africa Ltd, scaling its Kilimo Salama agricultural insurance program for smallholder farmers.",
            imageLink: "/timeline/2014.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2008-9",
            title: "Policy and R&D Integration",
            description:
              "Policy integration and research & development become central to SFSA’s strategic approach, enhancing innovation and influence.",
            imageLink: "/timeline/2008-2009.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2005",
            title: "Global Expansion Begins",
            description:
              "The Foundation starts operations in India and later expands to Kenya, Indonesia, Bangladesh, Senegal, Nigeria, and China to address local agricultural challenges.",
            imageLink: "/timeline/2005.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2001",
            title: "Formation of SFSA",
            description:
              "With the creation of Syngenta, the Syngenta Foundation for Sustainable Agriculture (SFSA) emerges to focus on sustainable agriculture, led by Klaus Leisinger.",
            imageLink: "/timeline/2001.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "1996",
            title: "Rebranding to Novartis Foundation",
            description:
              "Following the merger forming Novartis, the Foundation is rebranded as The Novartis Foundation, expanding its reach and impact.",
            imageLink: "/timeline/1996.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "1981",
            title: "Foundation Begins in Mali",
            description:
              "The Ciba-Geigy Foundation initiates its first development efforts in Mali, focusing on community-driven agricultural projects.",
            imageLink: "/timeline/1981.jpg",
          },
        ]}
      />
    </>
  );
}

export default OurHistoryPage;
