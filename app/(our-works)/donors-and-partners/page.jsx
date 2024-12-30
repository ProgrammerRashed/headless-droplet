import SideBySideBulletPoints from "@/components/shared/sideBySideBulletPoints/SideBySideBulletPoints";
import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import OurPartnersSections from "@/components/shared/ourPartnersSection/OurPartnersSections";

function DonorsAndPartnersPage() {
  return (
    <>
      <SecondaryBanner
        data={{
          sectionHeading: "Donors and Partners",
          bannerCover: "/hero-banners/donors-and-partners.jpg",
        }}
      />
      <OurPartnersSections
        data={{
          partners: [
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image11.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image6.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image4.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image1.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image10.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image7.png",
            },

            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image12.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image9.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image2.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image5.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image8.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image3.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image11.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image6.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image4.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image1.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image10.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image7.png",
            },

            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image12.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image9.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image2.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image5.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image8.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image3.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image2.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image5.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image8.png",
            },
            {
              id: crypto.randomUUID(),
              logoLink: "/our-pertners/image3.png",
            },
          ],
        }}
      />
      <SideBySideBulletPoints
        data={{
          bannerImage: "/donation-and-partners-page/side-by-side-banner.jpg",
          title: "Join us as a valued partner in our mission",
          description:
            "Lorem ipsum dolor sit amet consectetur. Turpis malesuada tincidunt fames bibendum id vitae. Pretium laoreet arcu urna mattis mattis lectus massa viverra ut. Vitae in sed arcu augue porta viverra tristique eu. Porta in arcu neque metus sem sed. Pulvinar vulputate tortor et et porttitor at cras. Arcu in parturient a integer nulla. Eget maecenas mi pretium posuere proin ut massa morbi amet. Netus tellus aliquet id eleifend. Fermentum enim quis cursus lacus.",
          buttonDetails: { title: "Join Now", link: "/" },
        }}
      />
    </>
  );
}

export default DonorsAndPartnersPage;
