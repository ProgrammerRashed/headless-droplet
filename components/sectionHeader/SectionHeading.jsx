import { cn } from "@/lib/utils";

function SectionHeading({ className, children }) {
  return (
    <h2
      className={cn(
        "text-dark text-[30px] font-bold capitalize leading-[40px] tracking-[1%] md:text-5xl md:leading-[60px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
