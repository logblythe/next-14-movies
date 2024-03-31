import { TMDB_API_VERSION } from "@/config/tmbd";
import tmdbAPI from "@/services/tmdbApi";

export async function getCredits<T>(movieId: string): Promise<T> {
  try {
    return await tmdbAPI
      .get<T>(`/${TMDB_API_VERSION}/movie/${movieId}/credits`)
      .then((res) => res.data);
  } catch (error) {
    console.error("[getCredits] error => ", error);
    throw error;
  }
}
