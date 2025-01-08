import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Dropzone from "@/components/shared/DropZone";
import { cn } from "@/lib/utils";

function ApplyNowForm({ title, details, position }) {
  return (
    <div
      data-aos="fade-up"
      className="mx-auto flex max-w-[1000px] flex-col items-center justify-center overflow-hidden rounded-[8px] border border-gray-50 bg-white p-5 shadow-sm shadow-gray-50 md:p-10"
    >
      <div className="flex w-full flex-col items-center justify-center">
        {title && (
          <h2
            data-aos="fade-up"
            className="mb-[10px] text-center text-4xl font-bold leading-[40px] tracking-[-1%] text-gray-800 md:text-5xl md:leading-[60px]"
          >
            {title}
          </h2>
        )}
        {details && (
          <p
            data-aos="fade-up"
            className="text-center text-sm font-normal leading-normal text-gray-600 md:text-base md:leading-[26px]"
          >
            {details}
          </p>
        )}
      </div>
      {position && (
        <p
          data-aos="fade-up"
          className="mb-5 mt-[50px] w-full border-y border-gray-50 py-3 text-left text-base font-medium leading-[26px] text-gray-600"
        >
          Position:
          <span className="ml-[10px] font-normal">{position}</span>
        </p>
      )}
      <form className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
        <div data-aos="fade-up" className="w-full flex-col gap-1">
          <Label
            htmlFor="first-name"
            className="text-base font-normal capitalize leading-[26px] text-gray-800"
          >
            First name <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="first-name"
            placeholder="First name"
            className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
          />
        </div>
        <div data-aos="fade-up" className="w-full flex-col gap-1">
          <Label
            htmlFor="last-name"
            className="text-base font-normal capitalize leading-[26px] text-gray-800"
          >
            Last name <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="last-name"
            placeholder="Last name"
            className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
          />
        </div>
        <div data-aos="fade-up" className="w-full flex-col gap-1">
          <Label
            htmlFor="phone"
            className="text-base font-normal capitalize leading-[26px] text-gray-800"
          >
            Phone <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="phone"
            placeholder="Phone number"
            className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
          />
        </div>
        <div data-aos="fade-up" className="w-full flex-col gap-1">
          <Label
            htmlFor="email"
            className="text-base font-normal capitalize leading-[26px] text-gray-800"
          >
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
          />
        </div>
        <div data-aos="fade-up" className="mt-2 sm:col-span-2">
          <Dropzone
            fileType="Resume"
            className="group flex cursor-pointer items-center justify-center rounded-[10px] border border-dashed border-gray-50 bg-surface px-4 py-3 transition-all duration-300 hover:border-green-500"
          />
          <p className="mt-2 text-sm font-normal leading-[22px] text-gray-600">
            Upload file size max 5MB. Accept file (.pdf**)
          </p>
        </div>
        <div data-aos="fade-up" className="mt-2 sm:col-span-2">
          <Dropzone
            fileType="cover letter"
            className="group flex cursor-pointer items-center justify-center rounded-[10px] border border-dashed border-gray-50 bg-surface px-4 py-3 transition-all duration-300 hover:border-green-500"
          />
          <p className="mt-2 text-sm font-normal leading-[22px] text-gray-600">
            Upload file size max 5MB. Accept file (.pdf**)
          </p>
        </div>
        <button
          data-aos="fade-up"
          className={cn(
            "mx-auto mt-[30px] flex w-fit flex-row items-center gap-2 rounded-full border border-red-600 bg-red-600 stroke-white px-6 py-[13px] text-sm font-semibold leading-[22px] text-white transition-all duration-300 hover:bg-red-900 sm:col-span-2 md:px-6 md:py-[15px] md:text-base md:leading-[24px]",
          )}
        >
          <span>Submit Now</span>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2181_7358)">
              <path
                d="M8 14L12 10L8 6"
                stroke="current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2181_7358">
                <rect width={20} height={20} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default ApplyNowForm;
