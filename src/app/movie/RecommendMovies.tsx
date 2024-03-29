import { getRecommendedMovies } from "@/actions/getRecommendedMovies";
import { Movie } from "@/types/movie-type";
import { PaginatedResponse } from "@/types/paginated-response";
import React from "react";
import { MovieCard } from "../_components/MovieCard";

export const RecommendedMovies = async ({
  id,
  page,
}: {
  id: string;
  page: string;
}) => {
  if (!id) {
    return <>no id</>;
  }

  const recommendedMovies = await getRecommendedMovies<
    PaginatedResponse<Movie>
  >(id, page);

  return (
    <div>
      <h1 className="mb-8 text-2xl font-medium">
        <div>RECOMMENDED</div>
        <div className="text-sm font-light">Movies</div>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-12">
        {recommendedMovies.results.map((result) => {
          return <MovieCard key={result.id} {...result} />;
        })}
      </div>
    </div>
  );
};
