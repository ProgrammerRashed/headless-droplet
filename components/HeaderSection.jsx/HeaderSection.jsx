import HeaderTop from "./HeaderTop";
import MainHeader from "./MainHeader";

function HeaderSection() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 bg-white">
      <div className="container !max-w-full !px-5 sm:!px-5 md:!px-5 lg:!px-5 xl:!px-[32px]">
        <HeaderTop />
        <MainHeader />
      </div>
    </header>
  );
}

export default HeaderSection;
