import Link from "next/link";

function FooterBottom() {
  return (
    <div className="mt-5 flex flex-col gap-3 text-sm font-normal leading-[22px] text-white md:my-6 md:mt-6 md:flex-row md:items-center md:justify-between">
      <p>© 2024 Sustainable Agriculture Foundation</p>
      <div className="flex flex-row gap-5 text-white/80 md:gap-6">
        <Link href="/" className="hover:underline">
          Privacy Notice
        </Link>
        <Link href="/" className="hover:underline">
          Terms of Use
        </Link>
      </div>
    </div>
  );
}

export default FooterBottom;
