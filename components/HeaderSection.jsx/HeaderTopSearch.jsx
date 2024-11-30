"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { XIcon } from "lucide-react";

function HeaderTopSearch() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {isSearchOpen ? (
        <div className="flex flex-row items-center justify-end gap-3 rounded-full bg-surface px-4">
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
          <Input
            type="text"
            placeholder="Seach Now ..."
            className="h-auto w-[300px] border-0 py-1 text-sm text-dark shadow-none placeholder:text-dark focus-visible:ring-0"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="transition-all duration-300 hover:scale-105"
          >
            <XIcon className="h-4 w-auto" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsSearchOpen(true)}
          className="flex flex-row items-center justify-end gap-[10px] text-sm font-normal leading-[22px] text-gray-light transition-all duration-300 hover:text-gray-dark"
        >
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
          <span>Search</span>
        </button>
      )}
    </>
  );
}

export default HeaderTopSearch;
