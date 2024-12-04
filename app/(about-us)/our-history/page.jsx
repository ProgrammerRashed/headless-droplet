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
        secondaryHeading="The Sustainable Agriculture Foundation (SAF), formerly known as the Syngenta Foundation for Sustainable Agriculture (SFSA)"
        details="The Sustainable Agriculture Foundation (SAF), formerly known organization. SAF delivers demand-led innovations in agriculture, carbon offset, nutrition, and rural economic development. These initiatives have positively impacted over millions of smallholder farmers through strategic collaborations with local, regional, and international partners."
        bannerImg="/our-history/banner.jpg"
      />
      <DownloadBooksSection
        sectionHeadig="Download our Legacy Books"
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
        sectionHeading="Timeline"
        cards={[
          {
            id: crypto.randomUUID(),
            timeLine: "2024",
            title: "Title Here",
            description:
              "I am excited to share Quest Asia's mission and future goals as we revolutionize the recruitment industry. Our focus goes beyond connecting talent with opportunities; it’s about fostering understanding, innovation, and bridging divides.",
            imageLink: "/timeline/timeline-1.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2020",
            title: "Title Here",
            description:
              "I am excited to share Quest Asia's mission and future goals as we revolutionize the recruitment industry. Our focus goes beyond connecting talent with opportunities; it’s about fostering understanding, innovation, and bridging divides.",
            imageLink: "/timeline/timeline-2.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2016",
            title: "Title Here",
            description:
              "I am excited to share Quest Asia's mission and future goals as we revolutionize the recruitment industry. Our focus goes beyond connecting talent with opportunities; it’s about fostering understanding, innovation, and bridging divides.",
            imageLink: "/timeline/timeline-3.jpg",
          },
          {
            id: crypto.randomUUID(),
            timeLine: "2010",
            title: "Title Here",
            description:
              "I am excited to share Quest Asia's mission and future goals as we revolutionize the recruitment industry. Our focus goes beyond connecting talent with opportunities; it’s about fostering understanding, innovation, and bridging divides.",
            imageLink: "/timeline/timeline-1.jpg",
          },
        ]}
      />
    </>
  );
}

export default OurHistoryPage;
