import Link from "next/link";

function FooterLinkGroup({ navigation, index }) {
  return (
    <div className="flex flex-col gap-5 text-white">
      <h6 className="text-base font-semibold capitalize leading-[24px] tracking-[3%]">
        {navigation?.group_name}
      </h6>
      <div className="flex flex-col gap-3 text-sm font-normal leading-[22px] text-white/80">
        {navigation?.child_navigations?.map((navitem, index) => (
          <Link
            href={navitem?.link}
            key={index}
            className="capitalize hover:underline"
          >
            {navitem?.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FooterLinkGroup;
