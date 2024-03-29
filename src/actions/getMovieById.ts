import { TMDB_API_VERSION } from "@/config/tmbd";
import tmdbAPI from "@/services/tmdbApi";

export async function getMovieById<T>(id: number, page: number): Promise<T> {
  return await tmdbAPI
    .get<T>(`/${TMDB_API_VERSION}/movie/${id}`, {
      params: { append_to_response: "videos" },
    })
    .then((res) => res.data);
}
