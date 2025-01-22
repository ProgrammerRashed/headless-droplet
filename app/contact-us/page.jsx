import ContactFromSection from "@/components/contactUsPage/contactFromSection/ContactFromSection";
import FindLocationCardSection from "@/components/contactUsPage/findLocationCardSection/FindLocationCardSection";
import SecondaryBanner from "@/components/heroSection/SecondaryBanner";

function ContactUsPage() {
  return (
    <>
      <SecondaryBanner
        data={{
          sectionHeading: "Contact Us",
          bannerCover: "/hero-banners/who-we-are.jpg",
        }}
      />
      <FindLocationCardSection
        data={{
          sectionHeading: "Find our Locations",
          countries: [
            {
              id: crypto.randomUUID(),
              imageLink: "/contact-us-page/location-cards/location-1.jpg",
              country: "Switzerland (HQ)",
              address: "B5.5, Rosentalstrasse 67 CH-4058 Basel Switzerland",
              phone: "+41 61 323 5634",
              email: "syngenta.foundation@syngenta.com",
            },
            {
              id: crypto.randomUUID(),
              imageLink: "/contact-us-page/location-cards/location-2.jpg",
              country: "Bangladesh",
              address:
                "Level 7 & 8, 187-188/B, Bir Uttam Mir Shawkat Ali Road Dhaka-1208, Bangladesh.",
              phone: "+88 02 226603282-6",
              email: "syngenta.foundation@syngenta.com",
            },
            {
              id: crypto.randomUUID(),
              imageLink: "/contact-us-page/location-cards/location-3.jpg",
              country: "India",
              address:
                "Swiss Power-to-X Collaborative Innovation Network SPIN Pfingstweidstrasse 102, 8005 Zürich",
              phone: "+41 79 628 61 26",
              email: "syngenta.foundation@syngenta.com",
            },
            {
              id: crypto.randomUUID(),
              imageLink: "/contact-us-page/location-cards/location-4.jpg",
              country: "Kenya",
              address:
                "Swiss Power-to-X Collaborative Innovation Network SPIN Pfingstweidstrasse 102, 8005 Zürich",
              phone: "+41 79 628 61 26",
              email: "syngenta.foundation@syngenta.com",
            },
          ],
        }}
      />
      <ContactFromSection />
    </>
  );
}

export default ContactUsPage;
