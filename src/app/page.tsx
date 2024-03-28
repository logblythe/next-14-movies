import { redirect } from "next/navigation";

export default function HomePage({
  searchParams,
}: {
  searchParams: { category: string; page: string; genres: string };
}) {
  const { category, genres } = searchParams;
  console.log("🚀 ~ searchParams:", searchParams);

  if (!category && !genres) {
    const searchParams = new URLSearchParams();
    searchParams.set("category", "Top Rated");
    redirect(`/?${searchParams}`);
  }

  return (
    <main className="flex flex-col items-center justify-between">
      {searchParams.page}-{searchParams.category}-{searchParams.genres}
    </main>
  );
}
