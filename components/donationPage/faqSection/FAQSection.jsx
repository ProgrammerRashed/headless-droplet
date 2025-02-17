import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import SectionHeading from "@/components/sectionHeader/SectionHeading";

function FAQSection({ data }) {
  const { section_title, faqs } = data.data;
  return (
    <section className="py-[50px] md:py-[100px]">
      <div className="container !max-w-[1190px]">
        <div data-aos="fade-up">
          <SectionHeading>{section_title}</SectionHeading>
        </div>
        <Accordion
          data-aos="fade-up"
          iconclassname="!h-9 !w-9 md:!h-10 md:!w-10 rounded-full bg-surface p-1.5 md:p-1"
          type="single"
          collapsible
          className="mt-10 w-full border-t border-gray-50"
        >
          {faqs?.map((faq) => (
            <AccordionItem key={faq?._id} value={faq?._id}>
              <AccordionTrigger className="border-gray-50 py-[25px] text-lg font-medium leading-[28px] text-gray-800 hover:no-underline data-[state=open]:py-[15px] md:text-[22px] md:leading-[32px]">
                {faq?.question}
              </AccordionTrigger>
              <AccordionContent className="pb-[25px] pt-0 text-base font-normal leading-[26px] text-gray-600">
                {faq?.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQSection;
