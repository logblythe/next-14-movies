"use client";

import ArrowLeftIcon from "@/icons/ArrowLeftIcon";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex flex-row text-sm bg-[#41ead4] px-5 py-3 rounded text-black space-x-2 items-center hover:bg-[#2da394] transition ease-in-out hover:-translate-y-[0.5px] duration-300"
    >
      <ArrowLeftIcon fill="currentColor" width="1em" /> <span>Back</span>
    </button>
  );
};

export default BackButton;
