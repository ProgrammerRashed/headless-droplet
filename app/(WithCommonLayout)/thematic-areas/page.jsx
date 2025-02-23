import SecondaryBanner from "@/components/heroSection/SecondaryBanner";
import FullWidthSlider from "@/components/shared/FullWidthSlider";

async function ThematicAreaPage() {
  return (
    <>
      <SecondaryBanner
        data={{
          data: {
            section_heading: "Thematic Areas",
          },
        }}
      />
      <FullWidthSlider
        images={[
          "/about-country/bangladesh-banner.jpg",
          "/about-country/bangladesh-banner.jpg",
          "/about-country/bangladesh-banner.jpg",
        ]}
      />
    </>
  );
}

export default ThematicAreaPage;
