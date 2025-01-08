"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <button
      data-aos="fade-right"
      onClick={goBack}
      className="mb-[34px] flex items-center justify-center gap-1 text-base font-normal leading-[26px] text-gray-600 transition-all duration-300 hover:text-gray-900"
    >
      <ChevronLeft className="h-5 w-5" />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
