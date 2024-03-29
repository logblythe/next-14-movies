import { getMovieById } from "@/actions/getMovieById";
import { Movie } from "@/types/movie-type";
import { notFound } from "next/navigation";
import React from "react";

const MoviePage = async ({ searchParams }: PageProps) => {
  const { id, page } = searchParams;
  if (!id) {
    return notFound();
  }
  const movie = await getMovieById<Movie>(Number(id), Number(page));
  return <div>{movie.title}</div>;
};

export default MoviePage;
