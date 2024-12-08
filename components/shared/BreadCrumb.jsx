"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function BreadCrumb({ colorScheme }) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav>
      <ol
        className={cn(
          "flex flex-row gap-1.5 text-xs font-normal capitalize leading-[28px] md:text-sm md:leading-[22px]",
          `${colorScheme === "dark" ? "text-gray-800" : "text-white"}`,
        )}
      >
        <li className="flex items-center gap-1.5 transition-all duration-300 hover:underline">
          <Link href="/">Home</Link>
          <ChevronRight size="16" />
        </li>
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;
          const formattedSegment = segment.replace(/-/g, " ");

          return (
            <li
              key={href}
              className={cn(
                "flex items-center gap-1.5 transition-all duration-300",
                `${isLast ? (colorScheme === "dark" ? "text-gray-400" : "text-white/80") : "text-inherit hover:underline"}`,
              )}
            >
              {!isLast ? (
                <>
                  <Link href={href}>{formattedSegment}</Link>
                  <ChevronRight size="16" />
                </>
              ) : (
                <span>{formattedSegment}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default BreadCrumb;
