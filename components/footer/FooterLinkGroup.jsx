import Link from "next/link";

function FooterLinkGroup() {
  return (
    <div className="flex flex-col gap-5 text-white">
      <h6 className="text-base font-semibold leading-[24px] tracking-[3%]">
        About Us
      </h6>
      <div className="flex flex-col gap-3 text-sm font-normal leading-[22px] text-white/80">
        <Link href="/" className="hover:underline">
          Who We Are
        </Link>
        <Link href="/" className="hover:underline">
          Our Leadership
        </Link>
        <Link href="/" className="hover:underline">
          Our History
        </Link>
        <Link href="/" className="hover:underline">
          Our History
        </Link>
        <Link href="/" className="hover:underline">
          Our History
        </Link>
      </div>
    </div>
  );
}

export default FooterLinkGroup;
