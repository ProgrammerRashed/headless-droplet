import Link from "next/link";

function FooterLinkGroup({ navigation }) {
  return (
    <div className="flex flex-col gap-5 text-white">
      <h6 className="text-base font-semibold leading-[24px] tracking-[3%]">
        {navigation.groupName}
      </h6>
      <div className="flex flex-col gap-3 text-sm font-normal leading-[22px] text-white/80">
        {navigation.childNavigations.map((navitem) => (
          <Link
            href={navitem.link}
            key={navitem.id}
            className="hover:underline"
          >
            {navitem.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FooterLinkGroup;
