import { TMDB_API_VERSION } from "@/config/tmbd";
import tmdbAPI from "@/services/tmdbApi";
import { STATIC_MOVIE_CATEGORIES } from "@/utils/constants/static-movie-categories";

export async function getStaticCategoryMovies<T>(
  name: string,
  page: string
): Promise<T> {
  const categoryId = STATIC_MOVIE_CATEGORIES.find(
    (category) => category.name === name
  )?.id;
  return await tmdbAPI
    .get<T>(`/${TMDB_API_VERSION}/movie/${categoryId}`, {
      params: { page },
    })
    .then((res) => res.data);
}
