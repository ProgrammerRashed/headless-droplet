import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function OurCultureAccordion({ qsn_and_ans }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border-t border-gray-50"
    >
      {qsn_and_ans?.map((qsnAndAnsItem) => (
        <AccordionItem
          key={qsnAndAnsItem?._id}
          value={qsnAndAnsItem?._id}
          className="border-b border-gray-50"
        >
          <AccordionTrigger
            iconClassName="bg-transparent"
            className="gap-6 py-[25px] text-[22px] font-medium leading-[32px] text-gray-800 hover:no-underline data-[state=open]:pb-[15px]"
          >
            {qsnAndAnsItem?.qsn}
          </AccordionTrigger>
          <AccordionContent className="p-0 pb-[25px] text-base font-normal leading-[26px] text-gray-600">
            {qsnAndAnsItem?.ans}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default OurCultureAccordion;
