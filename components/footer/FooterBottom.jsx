import Link from "next/link";

function FooterBottom({ footerBottom }) {
  return (
    <div className="mt-5 flex flex-col gap-3 text-sm font-normal leading-[22px] text-white md:my-6 md:mt-6 md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} Sustainable Agriculture Foundation</p>
      <div className="flex flex-row gap-5 text-white/80 md:gap-6">
        {footerBottom.navigations.map((navItem) => (
          <Link
            href={navItem.link}
            key={navItem.id}
            className="hover:underline"
          >
            {navItem.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FooterBottom;
