import { SORT_BY_OPTIONS } from "@/utils/constants/sort-by-options";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { getMoviesByGenre } from "../actions/getMoviesByGenre";
import { MovieCard } from "./_components/MovieCard";
import { Movie } from "@/types/movie-type";
import { PaginatedResponse } from "@/types/paginated-response";
import { getStaticCategoryMovies } from "@/actions/getStaticCategoryMovies";

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata | null> {
  const { category, genres, name } = searchParams;
  if (category) {
    return { title: `${category as string} movies` };
  }
  if (genres) {
    return { title: `${name as string} movies` };
  }
  return null;
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: { category: string; page: string; genres: string };
}) {
  const { category, genres, page } = searchParams;

  if (!category && !genres) {
    const searchParams = new URLSearchParams();
    searchParams.set("category", "Top Rated");
    redirect(`/?${searchParams}`);
  }

  let response: PaginatedResponse<Movie>;

  if (genres) {
    response = await getMoviesByGenre<PaginatedResponse<Movie>>(
      genres,
      page,
      SORT_BY_OPTIONS[0].value
    );
  } else {
    response = await getStaticCategoryMovies<PaginatedResponse<Movie>>(
      category,
      page
    );
  }

  if (!response) {
    return notFound();
  }

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 lg:gap-12">
        {response.results.map((result) => {
          return <MovieCard key={result.id} {...result} />;
        })}
      </div>
    </main>
  );
}
