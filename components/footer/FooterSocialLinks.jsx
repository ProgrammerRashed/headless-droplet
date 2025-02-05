import Image from "next/image";
import Link from "next/link";

function FooterSocialLinks({ socialLinks }) {
  return (
    <div className="flex items-center justify-normal gap-1">
      <Link href={socialLinks[0].link} target="_blank">
        <Image
          src="/icons/facebook.svg"
          width={38}
          height={38}
          alt="Facebook icon"
          className="h-[38px] w-[38px] rounded-full bg-transparent object-contain transition-all duration-300 hover:bg-[#FFFFFF1A]"
        />
      </Link>
      <Link href={socialLinks[1].link} target="_blank">
        <Image
          src="/icons/linkedin.svg"
          width={38}
          height={38}
          alt="Linkedin icon"
          className="h-[38px] w-[38px] rounded-full bg-transparent object-contain transition-all duration-300 hover:bg-[#FFFFFF1A]"
        />
      </Link>
      <Link href={socialLinks[2].link} target="_blank">
        <Image
          src="/icons/x.svg"
          width={38}
          height={38}
          alt="X icon"
          className="h-[38px] w-[38px] rounded-full bg-transparent object-contain transition-all duration-300 hover:bg-[#FFFFFF1A]"
        />
      </Link>
      <Link href={socialLinks[3].link} target="_blank">
        <Image
          src="/icons/youtube.svg"
          width={38}
          height={38}
          alt="Youtube icon"
          className="h-[38px] w-[38px] rounded-full bg-transparent object-contain transition-all duration-300 hover:bg-[#FFFFFF1A]"
        />
      </Link>
    </div>
  );
}

export default FooterSocialLinks;
