import React from "react";
import { MovieCard } from "./MovieCard";
import { PaginatedResponse } from "@/types/paginated-response";
import { Movie } from "@/types/movie-type";
import Pagination from "@/components/Pagination";

const MovieGrid = ({ response }: { response: PaginatedResponse<Movie> }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-12">
        {response.results.map((result) => {
          return <MovieCard key={result.id} {...result} />;
        })}
      </div>
      <Pagination totalPage={response.total_pages} />
    </div>
  );
};

export default MovieGrid;
