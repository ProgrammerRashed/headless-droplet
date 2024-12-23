"use client";

import HeaderTop from "./HeaderTop";
import MainHeader from "./MainHeader";
import { useEffect, useState } from "react";
import MobileNavLinks from "./MobileNavLinks";

function HeaderSection({ navigations, buttonDetails, logoLink, socialLinks }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100vh";
    } else {
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
    }
    return () => {
      document.documentElement.style.overflow = "auto";
      document.documentElement.style.height = "100%";
    };
  }, [isMobileNavOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div
        className={`container absolute !max-w-full bg-white !px-5 shadow shadow-slate-100 transition-all duration-300 sm:!px-5 md:!px-5 lg:!px-5 xl:!px-[32px] ${isHeaderVisible ? "xl:top-0 xl:opacity-100" : "xl:top-[-46px] xl:opacity-100"}`}
      >
        <HeaderTop socialLinks={socialLinks} />
        <MainHeader
          isMobileNavOpen={isMobileNavOpen}
          setIsMobileNavOpen={setIsMobileNavOpen}
          navigations={navigations}
          buttonDetails={buttonDetails}
          logoLink={logoLink}
        />
        {isMobileNavOpen && (
          <MobileNavLinks
            setIsMobileNavOpen={setIsMobileNavOpen}
            navigations={navigations}
            buttonDetails={buttonDetails}
          />
        )}
      </div>
    </header>
  );
}

export default HeaderSection;
