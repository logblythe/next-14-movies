"use client";

import React from "react";
import Image from "next/image";
import { TMDB_IMAGE_BASE_URL } from "@/config/tmbd";
import { W342H513 } from "@/config/image-size";
import Link from "next/link";
import { Movie } from "@/types/movie-type";

export const MovieCard = (movie: Movie) => {
  const searchParams = new URLSearchParams();
  searchParams.set("id", String(movie.id));
  searchParams.set("page", "1");

  return (
    <Link href={`movie?${searchParams}`}>
      <div className="flex flex-col justify-center items-center hover:shadow-2xl rounded-lg pb-4 hover:cursor-pointer">
        <div className="relative">
          <Image
            src={`${TMDB_IMAGE_BASE_URL}/w342/${movie.poster_path}`}
            alt={movie.title}
            width={W342H513.WIDTH}
            height={W342H513.HEIGHT}
          />
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black z-10 flex items-end justify-center" />
        </div>
        <p className="mt-2 text-sm">{movie.title}</p>
      </div>
    </Link>
  );
};
