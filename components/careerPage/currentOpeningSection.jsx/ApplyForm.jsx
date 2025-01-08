import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Dropzone from "@/components/shared/DropZone";

function ApplyForm() {
  return (
    <form className="mx-auto mt-[40px] grid max-w-[1000px] grid-cols-1 gap-5 overflow-y-hidden rounded-[8px] border border-gray-50/10 bg-white px-[15px] py-[30px] shadow-sm shadow-gray-50 md:grid-cols-2 md:p-[30px] lg:p-[60px]">
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
      <div data-aos="fade-up" className="mt-2 md:col-span-2">
        <Dropzone className="group flex cursor-pointer items-center justify-center rounded-[10px] border border-dashed border-gray-50 bg-surface px-4 py-3 transition-all duration-300 hover:border-green-500" />
        <p className="mt-2 text-sm font-normal leading-[22px] text-gray-600">
          Upload file size max 5MB. Accept file (.pdf)
        </p>
      </div>
      <button
        data-aos="fade-up"
        className="mx-auto mt-[30px] flex w-fit flex-row items-center gap-2 rounded-full border border-red-600 bg-red-600 stroke-white px-6 py-[13px] text-sm font-semibold leading-[22px] text-white transition-all duration-300 hover:bg-red-900 md:col-span-2 md:px-6 md:py-[15px] md:text-base md:leading-[24px]"
      >
        <span>Submit now</span>
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
  );
}

export default ApplyForm;
