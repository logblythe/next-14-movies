import { TMDB_API_VERSION } from "@/config/tmbd";
import tmdbAPI from "@/services/tmdbApi";

export async function getRecommendedMovies<T>(
  id: string,
  page: string
): Promise<T> {
  return await tmdbAPI
    .get<T>(`/${TMDB_API_VERSION}/movie/${id}/recommendations`, {
      params: { page },
    })
    .then((res) => res.data);
}
