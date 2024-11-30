import { Accordion } from "@/components/ui/accordion";
import PrimaryButton from "../buttons/PrimaryButton";
import MobileNavLinkItem from "./MobileNavLinkItem";

function MobileNavLinks() {
  return (
    <div className="fixed bottom-0 left-0 flex min-h-[calc(100vh-68px)] w-full flex-col border-t border-gray bg-white px-5 py-7 xl:hidden">
      <div className="h-[0px] w-full flex-grow flex-col overflow-y-auto overflow-x-hidden">
        <Accordion type="single" collapsible>
          <MobileNavLinkItem />
        </Accordion>
      </div>
      <PrimaryButton className="bg-green-light w-full justify-center border-0 stroke-white text-white hover:bg-green-dark">
        Contact Us
      </PrimaryButton>
    </div>
  );
}

export default MobileNavLinks;
