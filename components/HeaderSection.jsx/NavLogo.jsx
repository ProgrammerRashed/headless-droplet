"use client"
import { usePathname } from 'next/navigation'
import Image from "next/image";

const NavLogo = ({logos}) => {

    function getLogoByCountry(country) {
        const result = logos.filter(logo => logo.logo_country.value === country);
        return result.length > 0 ? result[0].logo_link : null; 
    }
    const pathname = usePathname()

    const logo = pathname.includes("kenya") ? getLogoByCountry("kenya") : getLogoByCountry("global");


  return (
    <div>
        <Image
          src={logo || "/thumbnail.png"}
          width={253}
          height={55}
          alt="SAF logo"
          className="h-auto w-[147px] object-contain lg:w-[200px] 0.5xl:w-[253px]"
        />
    </div>
  )
}







export default NavLogo