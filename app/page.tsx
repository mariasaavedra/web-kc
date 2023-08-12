import Airtable from "airtable";
import ActivityCard from "@/components/ActivityCard";

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

export default async function Home() {
  const data = await getData();

  return (
    <main className="grid grid-cols-1 md:grid-cols-4 gap-4 p-8 bg-[#9ED2BE]">
      {data?.map((activity, i) => {
        return <ActivityCard key={i} activity={activity} />;
      })}
    </main>
  );
}
