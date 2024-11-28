import { cn } from "@/lib/utils";
import Link from "next/link";

function PrimaryButton({ className, children }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex w-fit flex-row items-center gap-2 rounded-full border border-red px-6 py-[13px] text-sm font-semibold leading-[22px] text-red md:px-6 md:py-[15px] md:text-base md:leading-[24px]",
        className,
      )}
    >
      <span>{children}</span>
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
            stroke="#971512"
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
    </Link>
  );
}

export default PrimaryButton;
