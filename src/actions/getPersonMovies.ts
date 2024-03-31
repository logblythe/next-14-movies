import { TMDB_API_VERSION } from "@/config/tmbd";
import tmdbAPI from "@/services/tmdbApi";
import { SORT_BY_OPTIONS } from "@/utils/constants/sort-by-options";

export async function getPersonMovies<T>(
  id: number,
  page: number,
  sort: string
) {
  try {
    return await tmdbAPI
      .get<T>(`/${TMDB_API_VERSION}/discover/movie`, {
        params: {
          with_cast: id,
          page,
          sort_by: sort,
        },
      })
      .then((res) => res.data);
  } catch (error) {
    console.error("🚀 ~ getPersonMovies error:", error);
    throw error;
  }
}
