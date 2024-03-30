import { getCredits } from "@/actions/getCredits";
import Avatar from "@/components/Avatar";
import { TMDB_IMAGE_BASE_URL } from "@/config/tmbd";
import { QUERY_PARAMS } from "@/utils/constants/query-params";
import Link from "next/link";

const MovieCast = async ({ movieId }: { movieId: string }) => {
  const credits = await getCredits<CreditsType>(movieId);
  return (
    <ul className="flex space-x-8 overflow-auto pb-4">
      {credits.cast.slice(0).map((cast) => {
        return (
          <li key={cast.id}>
            <Link
              href={{
                pathname: "/person",
                query: {
                  [QUERY_PARAMS.ID]: cast.id,
                  [QUERY_PARAMS.PAGE]: "1",
                },
              }}
            >
              <Avatar
                src={`${TMDB_IMAGE_BASE_URL}/w185/${cast.profile_path}`}
                alt={cast.name}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCast;
