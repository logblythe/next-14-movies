import { STATIC_MOVIE_CATEGORIES } from "@/utils/constants/static-movie-categories";
import { Suspense } from "react";
import { List } from "./List";
import GenreList from "./GenreList";

const Sidebar = async () => {
  return (
    <aside className="space-y-8 px-8 py-12">
      <List title="Discover" items={STATIC_MOVIE_CATEGORIES} />
      <Suspense>
        <GenreList />
      </Suspense>
    </aside>
  );
};

export default Sidebar;
