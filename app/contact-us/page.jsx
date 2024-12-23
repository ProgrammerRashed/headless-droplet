import FindLocationCardSection from "@/components/contactUsPage/findLocationCardSection/FindLocationCardSection";
import SecondaryBanner from "@/components/heroSection/SecondaryBanner";

function ContactUsPage() {
  return (
    <>
      <SecondaryBanner
        sectionHeading="Who we are"
        bannerCover="/hero-banners/who-we-are.jpg"
      />
      <FindLocationCardSection />
    </>
  );
}

export default ContactUsPage;
