import { Suspense } from "react";

import { Poppins } from "next/font/google";
import "./globals.css";
import AOSWrapper from "@/utils/AOSWrapper";
import { ReactLenis } from "@/utils/lenis";
import { MaintainanceModal } from "@/components/shared/MaintainanceModal";
import HeaderSection from "@/components/HeaderSection.jsx/HeaderSection";
import FooterSection from "@/components/footer/FooterSection";
import { getMainMenuData } from "@/graphql/Components";
import Loading from "./loading";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "SAF - Sustainable Agricultural Foundation",
  description:
    "A world where smallholders, communities, and nature thrive together",
};

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
          <Suspense fallback={<Loading />}>
            <AOSWrapper>
              <HeaderSection data={menuData} />
              {children}
              <FooterSection data={menuData} />
            </AOSWrapper>
          </Suspense>
        </body>
      </ReactLenis>
    </html>
  );
}
