import { getPersonMovies } from "@/actions/getPersonMovies";
import { Movie } from "@/types/movie-type";
import { PaginatedResponse } from "@/types/paginated-response";
import { SORT_BY_OPTIONS } from "@/utils/constants/sort-by-options";
import MovieGrid from "../_components/MovieGrid";

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
      <MovieGrid response={personMovies} />
    </div>
  );
};
