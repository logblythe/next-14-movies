import { getGenres } from "@/app/actions/getGenres";
import React from "react";
import { IdName } from "./type";
import { List } from "./List";

const GenreList = async () => {
  const { genres } = await getGenres<{ genres: IdName[] }>();
  return <List title="Genres" items={genres} />;
};

export default GenreList;
