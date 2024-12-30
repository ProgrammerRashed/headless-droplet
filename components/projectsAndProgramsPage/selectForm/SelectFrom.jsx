import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function SelectFrom() {
  return (
    <form data-aos="fade-up" className="mt-[25px] max-w-[490px] md:mt-[30px]">
      <RadioGroup
        defaultValue="ongoing"
        className="flex w-full flex-row items-center justify-center"
      >
        <label
          htmlFor="ongoing"
          className="flex w-full flex-grow items-center space-x-2 rounded-[40px] border border-gray-50 bg-white px-4 py-3 transition-all duration-300 hover:border-green-500"
        >
          <RadioGroupItem value="ongoing" id="ongoing" />
          <p className="text-gray-800x` flex-grow text-sm font-normal leading-[22px]">
            Ongoing
          </p>
        </label>
        <label
          htmlFor="completed"
          className="flex w-full flex-grow items-center space-x-2 rounded-[40px] border border-gray-50 bg-white px-4 py-3 transition-all duration-300 hover:border-green-500"
        >
          <RadioGroupItem value="completed" id="completed" />
          <p className="text-gray-800x` flex-grow text-sm font-normal leading-[22px]">
            Completed
          </p>
        </label>
      </RadioGroup>
    </form>
  );
}

export default SelectFrom;
