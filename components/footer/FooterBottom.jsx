import Link from "next/link";

function FooterBottom({
  navigations = [
    { title: "Privacy Policy", link: "/" },
    { title: "Tearms & Condition", link: "/" },
  ],
}) {
  return (
    <div className="mt-5 flex flex-col gap-3 text-sm font-normal leading-[22px] text-white md:my-6 md:mt-6 md:flex-row md:items-center md:justify-between">
      <p>
        &copy; {new Date().getFullYear()} Sustainable Agriculture Foundation
      </p>
      <div className="flex flex-row gap-5 text-white/80 md:gap-6">
        {navigations.map((navItem, index) => (
          <Link href={navItem.link} key={index} className="hover:underline">
            {navItem.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FooterBottom;
