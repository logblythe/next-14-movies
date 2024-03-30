import { getPersonById } from "@/actions/getPersonById";
import { PersonType } from "@/types/person-type";
import { notFound } from "next/navigation";
import React from "react";
import { PersonalDetails } from "./PersonalDetails";
import { PersonMovies } from "./PersonMovies";
import { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata | null> {
  const { id, page } = searchParams;
  if (!id) {
    return null;
  }
  const person = await getPersonById<PersonType>(Number(id), Number(page));
  return {
    title: person.name,
    description: person.biography,
  };
}

const PersonPage = async ({ searchParams }: PageProps) => {
  const { id, page } = searchParams;

  if (!id) {
    return notFound();
  }

  const person = await getPersonById<PersonType>(Number(id), Number(page));

  return (
    <div>
      <PersonalDetails person={person} />
      <PersonMovies id={Number(id)} page={Number(page)} />
    </div>
  );
};

export default PersonPage;
