import { getRecommendedMovies } from "@/actions/getRecommendedMovies";
import { Movie } from "@/types/movie-type";
import { PaginatedResponse } from "@/types/paginated-response";
import React from "react";
import { MovieCard } from "../_components/MovieCard";
import { getPersonMovies } from "@/actions/getPersonMovies";
import { SORT_BY_OPTIONS } from "@/utils/constants/sort-by-options";

export const PersonMovies = async ({
  id,
  page,
}: {
  id: number;
  page: number;
}) => {
  if (!id) {
    return <>no id</>;
  }

  const personMovies = await getPersonMovies<PaginatedResponse<Movie>>(
    id,
    page,
    SORT_BY_OPTIONS[0].value
  );

  if (personMovies?.results.length === 0) {
    return <>no related movies</>;
  }

  return (
    <div>
      <h1 className="mb-8 text-2xl font-medium">
        <div>ALSO ENTERS IN</div>
        <div className="text-sm font-light">Movies</div>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-12">
        {personMovies?.results.map((result) => {
          return <MovieCard key={result.id} {...result} />;
        })}
      </div>
    </div>
  );
};
