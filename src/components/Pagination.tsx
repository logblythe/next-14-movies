"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import ArrowLeftIcon from "@/icons/ArrowLeftIcon";
import { QUERY_PARAMS } from "@/utils/constants/query-params";
import ArrowRightIcon from "@/icons/ArrowRightIcon";

const Pagination = ({ totalPage }: { totalPage: number }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const page = Number(searchParams.get(QUERY_PARAMS.PAGE)) ?? 1;

  const prevPage = page - 1;

  const nextPage = page + 1;

  const handlePageChange = (newPage: number) => {
    const newSearchParams = new URLSearchParams(
      Array.from(searchParams.entries())
    );
    newSearchParams.set("page", String(newPage));
    router.push(`${pathname}?${newSearchParams}`);
  };

  return (
    <div className="grid grid-cols-2">
      <div className="justify-self-start">
        {page > 1 ? (
          <button
            onClick={() => handlePageChange(prevPage)}
            className="flex flex-row text-sm bg-[#41ead4] px-5 py-3 rounded text-black space-x-2 items-center hover:bg-[#2da394] transition ease-in-out hover:-translate-y-[0.5px] duration-300 "
          >
            <ArrowLeftIcon fill="currentColor" width={"1em"} height={"1em"} />
            <span>Previous</span>
          </button>
        ) : (
          <></>
        )}
      </div>

      <div className="justify-self-end">
        {page < totalPage ? (
          <button
            onClick={() => handlePageChange(nextPage)}
            className="flex flex-row text-sm bg-[#41ead4] px-5 py-3 rounded text-black space-x-2 items-center hover:bg-[#2da394] transition ease-in-out hover:-translate-y-[0.5px] duration-300"
          >
            <span>Next</span>
            <ArrowRightIcon fill="currentColor" width={"1em"} height={"1em"} />
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Pagination;
