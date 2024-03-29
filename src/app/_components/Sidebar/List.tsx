"use client";
import CalendarIcon from "@/icons/CalendarIcon";
import DotCircleIcon from "@/icons/DotCircleIcon";
import HeartIcon from "@/icons/HeartIcon";
import PollIcon from "@/icons/PollIcon";
import { STATIC_MOVIE_CATEGORIES } from "@/utils/constants/static-movie-categories";
import Link from "next/link";
import { IdName } from "./type";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { QUERY_PARAMS } from "@/utils/constants/query-params";

const renderIcon = (title: string) => {
  switch (title) {
    case STATIC_MOVIE_CATEGORIES[0].name:
      return <HeartIcon fill="currentColor" width="1em" />;
    case STATIC_MOVIE_CATEGORIES[1].name:
      return <PollIcon fill="currentColor" width="0.875em" />;
    case STATIC_MOVIE_CATEGORIES[2].name:
      return <CalendarIcon fill="currentColor" width="0.875em" />;
    default:
      return <DotCircleIcon fill="currentColor" width="1em" />;
  }
};

export const List = ({
  title,
  items,
}: {
  title: "Genres" | "Discover";
  items: IdName[];
}) => {
  const searchParams = useSearchParams();
  const category = searchParams.get(QUERY_PARAMS.CATEGORY);
  const genre = searchParams.get(QUERY_PARAMS.GENRE);

  return (
    <div className="space-y-2 text-sm">
      <p className="font-bold ">{title}</p>
      <ul className="ml-4 space-y-3">
        {items.map((item) => {
          return (
            <li
              key={item.id}
              className={`${
                item.name === genre || item.name === category
                  ? "text-[#b80040]"
                  : "text-[#41ead4]"
              }`}
            >
              <Link
                href={{
                  pathname: "/",
                  query:
                    title === "Genres"
                      ? {
                          [QUERY_PARAMS.GENRE]: item.id,
                          [QUERY_PARAMS.PAGE]: 1,
                        }
                      : {
                          [QUERY_PARAMS.CATEGORY]: item.name,
                          [QUERY_PARAMS.PAGE]: 1,
                        },
                }}
                className="flex space-x-2"
              >
                {renderIcon(item.name)}
                <span className="hover:underline">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
