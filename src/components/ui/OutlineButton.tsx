import Link from "next/link";
import { PropsWithChildren } from "react";

type Props = {
  href: string;
};

const OutlineButton = ({ children, href }: PropsWithChildren<Props>) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <button className="flex flex-row text-sm text-[#41ead4] font-light border border-[#41ead4] px-5 py-3 rounded  space-x-2 items-center hover:bg-[#2da39420] transition ease-in-out hover:-translate-y-[0.5px] duration-300">
        {children}
      </button>
    </Link>
  );
};

export default OutlineButton;
