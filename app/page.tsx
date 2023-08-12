import { NextResponse } from "next/server";
import Airtable from "airtable";

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
    <main className="grid grid-cols-1 md:grid-cols-4 gap-4 p-8 bg-[#cb997e]">
      {data &&
        data.length > 0 &&
        data.map((activity: any, i: any) => {
          return (
            <div
              className="bg-[#f7ede2] rounded shadow  p-4 overflow-hidden"
              key={i}
            >
              {Boolean(activity.fields.Attachments) &&
                activity.fields.Attachments.length > 0 && (
                  <img
                    className="object-cover w-full h-[150px] rounded"
                    src={activity.fields.Attachments[0].url}
                  />
                )}
              <h3 className="font-bold my-2 text-lg">{activity.fields.Name}</h3>
              <span className="my-2 uppercase text-xs text-gray-600">
                Details
              </span>
              <p className="text-sm my-2">
                {activity.fields.Details.substring(0, 150)}
              </p>
              {Boolean(activity.fields.Website) && (
                <span className="my-2 uppercase text-xs text-gray-600">
                  Website
                </span>
              )}
              <a
                href={`${activity.fields.Website}`}
                className="whitespace-nowrap block font-bold overflow-hidden text-ellipsis text-blue-700 text-sm my-2 max-w-[500px]"
              >
                {activity.fields.Website}
              </a>
              {Boolean(activity.fields.Website) && (
                <span className="my-2 uppercase text-xs text-gray-600">
                  Social
                </span>
              )}
              <a
                href={`${activity.fields["Social Media"]}`}
                className="whitespace-nowrap block font-bold overflow-hidden text-ellipsis text-blue-700 text-sm my-2 max-w-[500px]"
              >
                {activity.fields["Social Media"]}
              </a>
            </div>
          );
        })}
    </main>
  );
}
