import { TMDB_API_VERSION } from "@/config/tmbd";
import tmdbAPI from "@/services/tmdbApi";

export async function getMoviesByGenre<T>(
  genreId: string,
  page: string,
  sort: string
): Promise<T> {
  return await tmdbAPI
    .get<T>(`/${TMDB_API_VERSION}/discover/movie`, {
      params: {
        with_genres: genreId,
        page,
        sort_by: sort,
      },
    })
    .then((res) => res.data);
}
