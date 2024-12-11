import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import Image from "next/image";

function CtaSection({ sectionTitle, btnDetails }) {
  return (
    <section className="relative">
      <div className="bg-green-800/90 relative flex flex-col items-center justify-center gap-[30px] px-[15px] py-[50px] text-center md:py-[100px]">
        <h2
          data-aos="fade-up"
          className="max-w-[600px] text-[26px] font-semibold leading-[34px] text-surface md:text-[32px] md:font-bold md:leading-[42px]"
        >
          {sectionTitle}
        </h2>
        <div data-aos="fade-up">
          <PrimaryButton className="border-none bg-red-600 stroke-white text-white">
            {btnDetails.title}
          </PrimaryButton>
        </div>
      </div>
      <Image
        src="/cta-banner/cta-banner.jpg"
        width={1440}
        height={378}
        alt="Cta Banner"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
    </section>
  );
}

export default CtaSection;
