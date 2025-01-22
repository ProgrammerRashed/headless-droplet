import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function ContactFromSection() {
  return (
    <section className="bg-white py-10 md:py-[100px]">
      <div className="container !max-w-[1168px]">
        <form className="grid grid-cols-1 gap-5 border border-gray-50/10 px-[15px] py-[30px] shadow-md shadow-gray-200 md:grid-cols-2 md:p-[30px] lg:p-[60px]">
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
          <div data-aos="fade-up" className="w-full flex-col gap-1">
            <Label
              htmlFor="country"
              className="text-base font-normal capitalize leading-[26px] text-gray-800"
            >
              Country <span className="text-red-500">*</span>
            </Label>
            <Select className="w-full">
              <SelectTrigger
                id="country"
                className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus:ring-green-500"
              >
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    value="switzerland"
                    className="text-gray-700 hover:bg-surface focus:bg-surface"
                  >
                    Switzerland
                  </SelectItem>
                  <SelectItem
                    value="bangladesh"
                    className="text-gray-700 hover:bg-surface focus:bg-surface"
                  >
                    Bangladesh
                  </SelectItem>
                  <SelectItem
                    value="india"
                    className="text-gray-700 hover:bg-surface focus:bg-surface"
                  >
                    India
                  </SelectItem>
                  <SelectItem
                    value="kenya"
                    className="text-gray-700 hover:bg-surface focus:bg-surface"
                  >
                    Kenya
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div data-aos="fade-up" className="w-full flex-col gap-1">
            <Label
              htmlFor="inquiry-type"
              className="text-base font-normal capitalize leading-[26px] text-gray-800"
            >
              Inquiry type <span className="text-red-500">*</span>
            </Label>
            <Select className="w-full">
              <SelectTrigger
                id="inquiry-type"
                className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus:ring-green-500"
              >
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    value="type-1"
                    className="text-gray-700 hover:bg-surface focus:bg-surface"
                  >
                    Type placeholder
                  </SelectItem>
                  <SelectItem
                    value="type-2"
                    className="text-gray-700 hover:bg-surface focus:bg-surface"
                  >
                    Type placeholder
                  </SelectItem>
                  <SelectItem
                    value="type-3"
                    className="text-gray-700 hover:bg-surface focus:bg-surface"
                  >
                    Type placeholder
                  </SelectItem>
                  <SelectItem
                    value="type-4"
                    className="text-gray-700 hover:bg-surface focus:bg-surface"
                  >
                    Type placeholder
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div
            data-aos="fade-up"
            className="col-span-1 w-full flex-col gap-1 md:col-span-2"
          >
            <Label
              htmlFor="message"
              className="text-base font-normal capitalize leading-[26px] text-gray-800"
            >
              Message
            </Label>
            <Textarea
              placeholder="Write here..."
              id="message"
              className="scrollbar-thin m-0 h-auto w-full rounded-[10px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-green-500"
            />
          </div>
          <button
            data-aos="fade-up"
            className="-mt-1 flex w-fit flex-row items-center gap-2 rounded-full border border-red-600 bg-red-600 stroke-white px-6 py-[13px] text-sm font-semibold capitalize leading-[22px] text-white transition-all duration-300 hover:bg-red-900 md:col-span-2 md:px-6 md:py-[15px] md:text-base md:leading-[24px]"
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
      </div>
    </section>
  );
}

export default ContactFromSection;
