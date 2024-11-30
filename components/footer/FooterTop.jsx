import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../buttons/PrimaryButton";
import FooterSocialLinks from "./FooterSocialLinks";

function FooterTop() {
  return (
    <div className="flex flex-col border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between md:pb-[25px]">
      <Link href="/">
        <Image
          src="/saf-logo.svg"
          width={283}
          height={60}
          alt="SAF logo"
          className="mb-5 h-auto w-[200px] object-contain md:mb-0 md:w-[283px]"
        />
      </Link>
      <div className="mb-[30px] md:hidden">
        <FooterSocialLinks />
      </div>
      <div className="flex flex-col gap-[10px] md:items-end">
        <p className="text-base font-normal leading-[26px] tracking-[3%] text-white md:font-medium">
          You Can Help—Contribute Today!
        </p>
        <PrimaryButton className="border-none bg-red stroke-white text-white hover:bg-red-dark">
          Donate
        </PrimaryButton>
      </div>
    </div>
  );
}

export default FooterTop;
