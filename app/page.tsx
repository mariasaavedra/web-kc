import Airtable from "airtable";
import ActivityCard from "@/components/ActivityCard";
import Link from "next/link";
import Dialog from "@/components/Dialog";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
});
const base = Airtable.base("appXn8rWR51YKBwX2");
const table = base("Activities");

async function getData() {
  const records = await table.select().all();
  return records;
}

type Props = {
  searchParams: Record<string, string | null | undefined>;
};

export default async function Home({ searchParams }: Props) {
  const data = await getData();
  const showModal = searchParams?.modal;

  return (
    <main className="grid grid-cols-1 md:grid-cols-4 gap-4 p-8 bg-[#9ED2BE]">
      {data?.map((activity: any) => {
        return <ActivityCard key={activity} activity={activity} />;
      })}

      <Link
        href="/?modal=true"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        OPEN THY MODAL
      </Link>

      {showModal && <Dialog />}
    </main>
  );
}
