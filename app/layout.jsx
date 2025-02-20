import { Poppins } from "next/font/google";
import "./globals.css";
import AOSWrapper from "@/utils/AOSWrapper";
import { ReactLenis } from "@/utils/lenis";
import { MaintainanceModal } from "@/components/shared/MaintainanceModal";
import HeaderSection from "@/components/HeaderSection.jsx/HeaderSection";
import FooterSection from "@/components/footer/FooterSection";
import { getMainMenuData } from "@/graphql/Components";
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
  const menuData = await getMainMenuData();
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${poppins.variable} relative font-poppins antialiased`}
        >
          <AOSWrapper>
            <HeaderSection data={menuData} />
            {children}
            <FooterSection data={menuData} />
          </AOSWrapper>
          <MaintainanceModal />
        </body>
      </ReactLenis>
    </html>
  );
}
