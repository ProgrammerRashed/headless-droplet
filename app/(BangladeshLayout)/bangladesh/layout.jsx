import FooterSection from "@/components/footer/FooterSection";
import HeaderSection from "@/components/HeaderSection.jsx/HeaderSection";
import DonationButton from "@/components/shared/donationButton/DonationButton";
import { getBangladeshMenuData } from "@/graphql/Components/getMenuData";

export default async function BangladeshLayout({ children }) {
  const menuData = await getBangladeshMenuData()
  const donationDetails = menuData?.customNavigationBy?.donationDetails[0];
  return (
    <div>
    <HeaderSection data={menuData}/>
    <DonationButton data={donationDetails}/>
    {children}
    <FooterSection data={menuData}/>
    </div>
  );
}
