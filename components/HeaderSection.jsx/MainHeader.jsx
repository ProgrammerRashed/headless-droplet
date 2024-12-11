import Image from "next/image";
import PrimaryButton from "../shared/buttons/PrimaryButton";
import MainNavigationLinks from "./MainNavigationLinks";
import Link from "next/link";

function MainHeader({
  navigations,
  buttonDetails,
  logoLink,
  isMobileNavOpen,
  setIsMobileNavOpen,
}) {
  return (
    <div className="flex items-center justify-between gap-3 py-[10px] 0.5xl:py-0 3xl:gap-5">
      <Link href="/" onClick={() => setIsMobileNavOpen(false)}>
        <Image
          src={logoLink}
          width={253}
          height={55}
          alt="SAF logo"
          className="h-auto w-[147px] object-contain lg:w-[200px] 0.5xl:w-[253px]"
        />
      </Link>
      <div className="flex items-center justify-between gap-4 3xl:gap-[35px]">
        <MainNavigationLinks navigations={navigations} />
        <PrimaryButton className="hidden border-none bg-[#236C5A] stroke-white text-white hover:bg-[#236C5A]/80 md:px-6 md:py-3 0.5xl:flex">
          {buttonDetails.title}
        </PrimaryButton>
        <button
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
          className="bg-green-800 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:bg-green-900 0.5xl:hidden"
        >
          {isMobileNavOpen ? (
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4.41431"
                y="18.1426"
                width={20}
                height={2}
                rx={1}
                transform="rotate(-45 4.41431 18.1426)"
                fill="white"
              />
              <rect
                x="5.41431"
                y="4.14258"
                width={20}
                height={2}
                rx={1}
                transform="rotate(45 5.41431 4.14258)"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width={20}
              height={10}
              viewBox="0 0 20 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={20} height={2} rx={1} fill="white" />
              <rect y={8} width={20} height={2} rx={1} fill="white" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default MainHeader;
