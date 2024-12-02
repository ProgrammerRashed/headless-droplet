"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

function BreadCrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav>
      <ol className="flex flex-row gap-1.5 text-xs font-normal capitalize leading-[28px] text-white md:text-sm md:leading-[22px]">
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
              className={`flex items-center gap-1.5 transition-all duration-300 ${isLast ? "text-white/80" : "text-inherit hover:underline"}`}
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
