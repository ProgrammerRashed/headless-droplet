import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import SocialMediaShare from "../socialMediaShare/SocialMediaShare";
import { cn } from "@/lib/utils";

function RichContentAreaSection({ data }) {
  const { sectionClassName, shareButtons, buttonDetails, content } = data;
  return (
    <section data-aos="fade-up" className="my-10 md:my-16 0.5xl:my-20">
      <div className={cn("container", sectionClassName)}>
        <div
          className="rich-content-container"
          dangerouslySetInnerHTML={{
            __html: typeof content === "string" ? content : "",
          }}
        />
        {buttonDetails && (
          <PrimaryButton href={buttonDetails?.link} className="mt-[30px] border-none bg-red-600 stroke-white text-white hover:bg-red-900 md:mt-[50px]">
            Apply Now
          </PrimaryButton>
        )}
        {shareButtons && <SocialMediaShare />}
      </div>
    </section>
  );
}

export default RichContentAreaSection;
