import BackButton from "@/components/ui/BackButton";
import { TMDB_IMAGE_BASE_URL } from "@/config/tmbd";
import { PersonType } from "@/types/person-type";
import Image from "next/image";

export const PersonalDetails = ({ person }: { person: PersonType }) => {
  return (
    <div className="grid grid-cols-5 max-w-[1200px] mx-auto">
      <div className="place-self-end col-span-2 p-10">
        <Image
          src={`${TMDB_IMAGE_BASE_URL}/w780/${person.profile_path}`}
          alt={person.name}
          width={400}
          height={600}
        />
      </div>

      <div className="flex flex-col col-span-3 p-10">
        <div className="mb-[50px]">
          <h1 className="font-medium uppercase text-4xl text-white mb-3">
            {person.name}
          </h1>
          <h2 className="font-medium text-base uppercase text-gray-400">
            {person.birthday}
          </h2>
        </div>

        <div className="mb-8">
          <h3 className="uppercase text-base font-semibold mb-3">
            the biography
          </h3>
          <p className="font-light text-base text-gray-400">
            {person.biography}
          </p>
        </div>
        <div className="flex justify-end">
          <BackButton />
        </div>
      </div>
    </div>
  );
};
