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
  const data = await getSeoData("/") || {};
  
  const { seo = {} } = data;
  const {
    title = "Sustainable Agricultural Foundation",
    metaDesc = "The Sustainable Agriculture Foundation (SAF), formerly SFSA, builds on a 40-year legacy of transforming smallholder agriculture in Asia and Africa, focusing on climate-smart innovations, market access, and sustainable practices.",
    metaKeywords = "saf, SAF, Sustainable Agricultural, Sustainable Agricultural Foundation, saf bangladesh, saf kenya",
    canonical = "susagfoundation.org",
    opengraphImage = {},
    featuredImage = {}
  } = seo;

  const defaultImageUrl = "https://dashboard.susagfoundation.org/wp-content/uploads/2025/02/image1-2.png";
  const twitterImageUrl = "https://dashboard.susagfoundation.org/wp-content/uploads/2025/02/Blog-Thrumbnai-2.png";

  // Use defaultImageUrl or fall back to featured or opengraph image
  const ogImageUrl = opengraphImage?.mediaItemUrl || featuredImage?.node?.mediaItemUrl || defaultImageUrl;

  return {
    title,
    description: metaDesc,
    metaDesc,
    metaKeywords,
    canonical,
    openGraph: {
      title,
      description: metaDesc,
      image: ogImageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDesc,
      image: twitterImageUrl,
    },
    searchImage: ogImageUrl,
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
