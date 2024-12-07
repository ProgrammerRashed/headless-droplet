import { Accordion } from "@/components/ui/accordion";
import PrimaryButton from "../buttons/PrimaryButton";
import MobileNavLinkItem from "./MobileNavLinkItem";

function MobileNavLinks({ navigations, buttonDetails }) {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="500"
      className="fixed bottom-0 left-0 flex min-h-[calc(100vh-68px)] w-full flex-col border-t border-gray bg-white px-5 py-7 xl:hidden"
    >
      <div className="scrollbar-thin h-[0px] w-full flex-grow flex-col overflow-y-auto overflow-x-hidden pr-2">
        <Accordion type="single" collapsible>
          {navigations.map((navigation) => (
            <MobileNavLinkItem key={navigation.id} navigation={navigation} />
          ))}
        </Accordion>
      </div>
      <PrimaryButton className="w-full justify-center border-0 bg-green-light stroke-white text-white hover:bg-green-dark">
        {buttonDetails.title}
      </PrimaryButton>
    </div>
  );
}

export default MobileNavLinks;
