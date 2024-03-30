import BackButton from "@/components/ui/BackButton";
import OutlineButton from "@/components/ui/OutlineButton";
import { IMDB_TITLE_URL } from "@/config/imdb";
import { TMDB_IMAGE_BASE_URL } from "@/config/tmbd";
import DotCircleIcon from "@/icons/DotCircleIcon";
import ImdbIcon from "@/icons/ImdbIcon";
import LinkIcon from "@/icons/LinkIcon";
import PlayIcon from "@/icons/PlayIcon";
import { Movie } from "@/types/movie-type";
import { QUERY_PARAMS } from "@/utils/constants/query-params";
import Image from "next/image";
import Link from "next/link";
import MovieCast from "./MovieCast";

const MovieDetails = (movie: Movie) => {
  console.log("movie.homepage", movie.homepage);
  return (
    <div className="grid grid-cols-5 max-w-[1200px] mx-auto">
      <div className="place-self-end col-span-2 p-10">
        <Image
          src={`${TMDB_IMAGE_BASE_URL}/w780/${movie.poster_path}`}
          alt={movie.title}
          width={400}
          height={600}
        />
      </div>

      <div className="flex flex-col col-span-3 p-10">
        <div className="mb-5">
          <h1 className="font-medium uppercase text-5xl text-white mb-3">
            {movie.title}
          </h1>
          <h2 className="font-medium text-base uppercase text-gray-400">
            {movie.tagline}
          </h2>
        </div>

        <div className="mb-8">
          <h3 className="uppercase text-base mb-3 font-semibold">the genres</h3>
          <ul className="space-x-4 flex">
            {movie.genres?.map((genre) => (
              <li key={genre.id} className="">
                <Link
                  href={{
                    pathname: "/",
                    query: {
                      [QUERY_PARAMS.GENRE]: genre.id,
                      [QUERY_PARAMS.PAGE]: 1,
                    },
                  }}
                  className="flex flex-row space-x-2 text-[#b80040] uppercase text-xs font-bold"
                >
                  <DotCircleIcon
                    key={genre.id}
                    fill="currentColor"
                    width="1rem"
                  />
                  <span className="hover:underline">{genre.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="uppercase text-base font-semibold mb-3">
            the synopsis
          </h3>
          <p className="font-light text-base text-gray-400">{movie.overview}</p>
        </div>

        <div className="mb-8">
          <h3 className="uppercase text-base font-semibold mb-3">the cast</h3>
          <MovieCast movieId={String(movie.id)} />
        </div>

        <div className="flex space-x-8">
          {movie.homepage ? (
            <OutlineButton href={movie.homepage}>
              <span>Website</span>
              <LinkIcon fill="currentColor" width="1em" />
            </OutlineButton>
          ) : null}
          {movie.imdb_id ? (
            <OutlineButton href={`${IMDB_TITLE_URL}/${movie.imdb_id}`}>
              <span>IMDB</span>
              <ImdbIcon fill="currentColor" width="1em" />
            </OutlineButton>
          ) : null}
          <OutlineButton href={"/"}>
            <span>Trailer</span>
            <PlayIcon fill="currentColor" width="1em" />
          </OutlineButton>
          <div className="flex flex-1 justify-end">
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
