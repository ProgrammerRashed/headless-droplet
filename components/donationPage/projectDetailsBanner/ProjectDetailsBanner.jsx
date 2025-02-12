import BreadCrumb from "@/components/shared/BreadCrumb";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { cn } from "@/lib/utils";
import Image from "next/image";

function ProjectDetailsBanner({ data }) {
  const { sectionHeading, donor, tenure, linkDetails, bannerImageLink } = data;
  return (
    <section>
      <div
        className={cn(
          "mt-[80px] w-full border-b border-gray-50 0.5xl:mt-[150px]",
        )}
      >
        <div className="">
          <div className="container absolute top-[10px] md:top-[15px]">
            <BreadCrumb colorScheme="dark" />
          </div>
          <div className="container">
            <div className="flex flex-col items-center justify-center px-2 py-10 pt-[60px] 0.5xl:pt-[100px]">
              <h1
                className={cn(
                  "mb-5 text-center text-2xl font-semibold leading-normal tracking-[-1%] text-gray-800 md:text-5xl md:font-bold md:leading-[60px]",
                )}
              >
                {sectionHeading}
              </h1>
              <div className="mx-auto flex flex-col items-center justify-center gap-2 text-center">
                <p className="text-sm font-normal leading-normal text-gray-600 md:text-[22px] md:leading-[32px]">
                  Donor:
                  <span className="ml-[10px] font-medium text-gray-800">
                    {donor}
                  </span>
                </p>
                <p className="text-sm font-normal leading-normal text-gray-600 md:text-[22px] md:leading-[32px]">
                  Tenure:
                  <span className="ml-[10px] font-medium text-gray-800">
                    {tenure}
                  </span>
                </p>
              </div>
              <PrimaryButton className="mx-auto mt-[30px]">
                {linkDetails.title}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={bannerImageLink || "https://staging.notionhive.com/wordpress/saf/wp-content/uploads/2025/02/Blog-Thrumbnai-2.png"}
        width={1440}
        height={508}
        alt=""
        className="aspect-video w-full object-cover md:aspect-[1440/508]"
      />
    </section>
  );
}

export default ProjectDetailsBanner;
