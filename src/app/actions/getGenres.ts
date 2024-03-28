import { TMDB_API_VERSION } from "@/config/tmbd";
import tmdbAPI from "@/services/tmdbApi";

export function getGenres<T>(): Promise<T> {
  try {
    return tmdbAPI
      .get<T>(`/${TMDB_API_VERSION}/genre/movie/list`)
      .then((response) => response.data);
  } catch (error) {
    console.log("[getGenres] error => ", error);
    throw error;
  }
}
