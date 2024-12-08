import Image from "next/image";
import Link from "next/link";

function FooterSocialLinks({ socialLinks }) {
  return (
    <div className="flex items-center justify-normal gap-0.5">
      <Link href={socialLinks.facebook} target="_blank">
        <Image
          src="/icons/facebook.svg"
          width={38}
          height={38}
          alt="Facebook icon"
          className="h-auto w-[38px] object-contain"
        />
      </Link>
      <Link href={socialLinks.linkedIn} target="_blank">
        <Image
          src="/icons/linkedin.svg"
          width={38}
          height={38}
          alt="Linkedin icon"
          className="h-auto w-[38px] object-contain"
        />
      </Link>
      <Link href={socialLinks.twitter} target="_blank">
        <Image
          src="/icons/x.svg"
          width={38}
          height={38}
          alt="X icon"
          className="h-auto w-[38px] object-contain"
        />
      </Link>
      <Link href={socialLinks.youtube} target="_blank">
        <Image
          src="/icons/youtube.svg"
          width={38}
          height={38}
          alt="Youtube icon"
          className="h-auto w-[38px] object-contain"
        />
      </Link>
    </div>
  );
}

export default FooterSocialLinks;
