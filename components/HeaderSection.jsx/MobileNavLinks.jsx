import { Accordion } from "@/components/ui/accordion";
import PrimaryButton from "../shared/buttons/PrimaryButton";
import MobileNavLinkItem from "./MobileNavLinkItem";

function MobileNavLinks({ navigations, buttonDetails, setIsMobileNavOpen }) {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="500"
      className="fixed bottom-0 left-0 flex min-h-[calc(100vh-68px)] w-full flex-col border-t border-gray-50 bg-white px-5 py-7 0.5xl:hidden"
    >
      <div className="no-scrollbar h-[0px] w-full flex-grow flex-col overflow-y-auto overflow-x-hidden">
        <Accordion type="single" collapsible>
          {navigations?.map((navigation, index) => (
            <MobileNavLinkItem
              key={index}
              index={index}
              navigation={navigation}
              setIsMobileNavOpen={setIsMobileNavOpen}
            />
          ))}
        </Accordion>
      </div>
      <PrimaryButton
        href={buttonDetails[0]?.link}
        className="mt-4 w-full justify-center border-0 bg-green-800 stroke-white text-white hover:bg-green-900"
      >
        {buttonDetails[0]?.title}
      </PrimaryButton>
    </div>
  );
}

export default MobileNavLinks;
