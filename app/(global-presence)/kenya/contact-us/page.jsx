import BangladeshContactUsSection from "@/components/bangladeshContactUsPage/bangladeshContactUsSection/BangladeshContactUsSection";
import TertiaryBanner from "@/components/heroSection/TertiaryBanner";

function BangladeshContactUspage() {
  return (
    <>
      <TertiaryBanner
        data={{
          bannerCover: "/hero-banners/bangladesh-contact-us.jpg",
        }}
      />
      <BangladeshContactUsSection
        data={{
          address: {
            addressHeading: "Bangladesh Office",
            address:
              "Level 7 & 8, 187-188/B, Bir Uttam Mir Shawkat Ali Road Dhaka-1208, Bangladesh.",
            phone: "+88 02 226603282-6",
            email: "syngenta.foundation@syngenta.com",
          },
        }}
      />
    </>
  );
}

export default BangladeshContactUspage;
