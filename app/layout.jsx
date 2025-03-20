import { Suspense } from "react";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Poppins } from "next/font/google";
import "./globals.css";
import AOSWrapper from "@/utils/AOSWrapper";
import { ReactLenis } from "@/utils/lenis";
import HeaderSection from "@/components/HeaderSection.jsx/HeaderSection";
import FooterSection from "@/components/footer/FooterSection";
import { getMainMenuData } from "@/graphql/Components";
import Loading from "./loading";
import DonationButton from "@/components/shared/donationButton/DonationButton";
import { getSeoData } from "@/graphql/Components/getSeoData";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

export async function generateMetadata() {
  const data = (await getSeoData("/")) || {};
  const seo = data || {};
  return {
    title: seo.title,
    description: seo.metaDesc,
    metaDesc: seo.metaDesc,
    metaKeywords: seo.metaKeywords,
    canonical: seo.canonical,
  };
}

export default async function RootLayout({ children }) {
  let menuData;
  try {
    menuData = await getMainMenuData();
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }

  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${poppins.variable} relative font-poppins antialiased`}
        >
           <GoogleAnalytics gaId="G-GWTY8FL5CL" />
          <AOSWrapper>
            <Suspense fallback={<Loading />}>
              <HeaderSection data={menuData} />
              {children}
              <FooterSection data={menuData} />
              <DonationButton
                data={{ btn_link: "/donation", btn_text: "Donate" }}
              />
            </Suspense>
          </AOSWrapper>
        </body>
      </ReactLenis>
    </html>
  );
}
