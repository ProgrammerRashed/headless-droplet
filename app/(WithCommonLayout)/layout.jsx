import FooterSection from "@/components/footer/FooterSection";
import HeaderSection from "@/components/HeaderSection.jsx/HeaderSection";
import DonationButton from "@/components/shared/donationButton/DonationButton";
import { getMainMenuData } from "@/graphql/Components";

export default async function CommonLayout({ children }) {
  const menuData = await getMainMenuData()
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
