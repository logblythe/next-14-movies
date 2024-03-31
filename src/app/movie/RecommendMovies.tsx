import { getRecommendedMovies } from "@/actions/getRecommendedMovies";
import { Movie } from "@/types/movie-type";
import { PaginatedResponse } from "@/types/paginated-response";
import MovieGrid from "../_components/MovieGrid";

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
      <MovieGrid response={recommendedMovies} />
    </div>
  );
};
