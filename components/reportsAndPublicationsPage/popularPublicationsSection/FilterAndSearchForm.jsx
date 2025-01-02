import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

function FilterAndSearchForm() {
  return (
    <form className="mt-[30px] flex flex-col gap-5 lg:flex-row lg:justify-between">
      <div className="flex w-full flex-row justify-between gap-[10px] sm:max-w-[600px] md:gap-[30px]">
        <div data-aos="fade-up" className="w-full">
          <Select className="w-full">
            <SelectTrigger
              id="topics"
              className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus:ring-green-500"
            >
              <SelectValue placeholder="Topics" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  value="item-1"
                  className="text-gray-700 hover:bg-surface focus:bg-surface"
                >
                  Item 1
                </SelectItem>
                <SelectItem
                  value="item-2"
                  className="text-gray-700 hover:bg-surface focus:bg-surface"
                >
                  Item 2
                </SelectItem>
                <SelectItem
                  value="item-3"
                  className="text-gray-700 hover:bg-surface focus:bg-surface"
                >
                  Item 3
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div data-aos="fade-up" className="w-full">
          <Select className="w-full">
            <SelectTrigger
              id="country"
              className="m-0 h-auto w-full rounded-[40px] border border-gray-50 bg-surface px-4 py-3 text-sm leading-[22px] text-gray-700 shadow-none placeholder:text-gray-400 focus:ring-green-500"
            >
              <SelectValue placeholder="Country" />
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
      </div>
      <div
        className="flex sm:max-w-[320px] lg:max-w-[285px]"
        data-aos="fade-up"
      >
        <div className="flex w-full flex-row items-center gap-4 border-b border-gray-50 px-2 py-3">
          <Input
            type="text"
            id="search"
            placeholder="Search"
            className="m-0 h-auto rounded-none border-0 p-0 text-sm font-normal leading-[22px] text-gray-400 shadow-none outline-none focus-visible:ring-0"
          />
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
              stroke="#5B5755"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.7508 15.7498L12.4883 12.4873"
              stroke="#5B5755"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </form>
  );
}

export default FilterAndSearchForm;
