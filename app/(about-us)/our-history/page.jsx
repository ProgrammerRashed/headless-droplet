import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import DownloadBooksSection from "@/components/ourHistoryPage/downloadBooksSection/DownloadBooksSection";
import SideBySideSection from "@/components/ourHistoryPage/sideBySideSection/SideBySideSection";
import TimelineSection from "@/components/ourHistoryPage/timelineSection/TimelineSection";

function OurHistoryPage() {
  return (
    <>
      <SecondaryBanner
        sectionHeading="Our History"
        bannerCover="/hero-banners/who-we-are.jpg"
      />
      <SideBySideSection
        heading="Our History"
        secondaryHeading="The Sustainable Agriculture Foundation (SAF) has its roots in a 40-year legacy of agricultural innovation and corporate philanthropy. Its journey began with the Ciba-Geigy Foundation in 1981, which focused on smallholder farming, starting with a groundbreaking initiative to improve millet yields in Mali. From the beginning, SAF prioritized local expertise, an approach that was revolutionary for its time.
"
        details="Renamed the Syngenta Foundation for Sustainable Agriculture (SFSA) in 2001, it became a global leader in supporting pre-commercial smallholders, improving farmer incomes, and enhancing food security through innovation and market access. SAF continues this legacy, empowering rural communities and addressing critical agricultural challenges in Asia and Africa."
        bannerImg="/our-history/banner.jpg"
      />
      <DownloadBooksSection
        sectionHeadig="Download the legacy book"
        books={[
          {
            id: crypto.randomUUID(),
            title: "Our Legacy Book",
            image: "/books-download/book-1.png",
            downloadLink: "/",
          },
          {
            id: crypto.randomUUID(),
            title: "Our Legacy Book",
            image: "/books-download/book-1.png",
            downloadLink: "/",
          },
        ]}
      />
      <TimelineSection
        sectionHeading="Download our last annual report"
        cards={[
          {
            id: crypto.randomUUID(),
            timeLine: "2024",
            title: "Title Here",
            description:
              "New legacy organizations are created in Bangladesh, India, Kenya (Sustainable Agriculture Foundation) as well as in Mali, Nigeria and Senegal",
            imageLink: "/timeline/timeline-1.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2022",
            title: "Title Here",
            description:
              "The Syngenta Group Board decides to phase out its financial support of the Foundation",
            imageLink: "/timeline/timeline-2.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2019",
            title: "Title Here",
            description:
              "Syngenta Foundation India co-created AEGF to scale up its agri-entrepreneur program.",
            imageLink: "/timeline/timeline-3.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2017",
            title: "Title Here",
            description: "SFSA spins out its Farmforce tool.",
            imageLink: "/timeline/timeline-1.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2014",
            title: "Title Here",
            description:
              "SFSA co-created ACRE Africa Ltd to scale up its Kilimo Salama insurance program.",
            imageLink: "/timeline/timeline-1.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2008",
            title: "Title Here",
            description:
              "Policy and R&D become integral parts of the SFSA program.",
            imageLink: "/timeline/timeline-2.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2005",
            title: "Title Here",
            description:
              "Work begins in India, followed by Kenya (2009), Indonesia (2010, independent as YASI from 2020), Bangladesh (2011), Senegal (2014), Nigeria and China (both 2018).",
            imageLink: "/timeline/timeline-3.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2001",
            title: "Title Here",
            description:
              "After the company merger to create Syngenta, the Syngenta Foundation for Sustainable Agriculture (SFSA) takes forward the agricultural projects, with Klaus Leisinger as acting Director. ",
            imageLink: "/timeline/timeline-1.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "1996",
            title: "Title Here",
            description:
              "The Foundation adopts the name of the newly merged company Novartis and operated as The Novartis Foundation.",
            imageLink: "/timeline/timeline-3.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "1981",
            title: "Title Here",
            description: "The Ciba-Geigy Foundation starts work in Mali.",
            imageLink: "/timeline/timeline-1.jpg",
          },
        ]}
      />
    </>
  );
}

export default OurHistoryPage;
