import { getMovieById } from "@/actions/getMovieById";
import { Movie } from "@/types/movie-type";
import { notFound } from "next/navigation";
import React from "react";
import MovieDetails from "./MovieDetails";
import { Metadata } from "next";
import { RecommendedMovies } from "./RecommendMovies";

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata | null> {
  const { id, page } = searchParams;
  if (!id) {
    return null;
  }
  const movie = await getMovieById<Movie>(Number(id), Number(page));
  return {
    title: movie.title,
    description: movie.overview,
  };
}

const MoviePage = async ({ searchParams }: PageProps) => {
  const { id, page } = searchParams;

  if (!id) {
    return notFound();
  }

  const movie = await getMovieById<Movie>(Number(id), Number(page));

  return (
    <main className="space-y-12">
      <MovieDetails {...movie} />
      <RecommendedMovies id={String(id)} page={String(page)} />
    </main>
  );
};

export default MoviePage;
