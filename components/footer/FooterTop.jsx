import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../shared/buttons/PrimaryButton";
import FooterSocialLinks from "./FooterSocialLinks";

function FooterTop({ footerLogo, footerDonation, socialLinks }) {
  return (
    <div className="flex flex-col border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between md:pb-[25px]">
      <Link href="/">
        <Image
          src={footerLogo || "https://staging.notionhive.com/wordpress/saf/wp-content/uploads/2025/02/Blog-Thrumbnai-2.png"}
          width={283}
          height={60}
          alt="SAF logo"
          className="mb-5 h-auto w-[200px] object-contain md:mb-0 md:w-[283px]"
        />
      </Link>
      <div className="mb-[30px] md:hidden">
        <FooterSocialLinks socialLinks={socialLinks} />
      </div>
      <div className="flex flex-col gap-[10px] md:items-end">
        <p className="text-base font-normal leading-[26px] tracking-[3%] text-white md:font-medium">
          {footerDonation?.label}
        </p>
        <PrimaryButton href={footerDonation?.btn_link} className="hover:bg-red-900 border-none bg-red-600 stroke-white text-white">
          {footerDonation?.btn_text}
        </PrimaryButton>
      </div>
    </div>
  );
}

export default FooterTop;
