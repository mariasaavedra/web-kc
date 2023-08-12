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
    <main className="grid grid-cols-1 md:grid-cols-4 gap-4 p-8 bg-[#9ED2BE]">
      {data &&
        data.length > 0 &&
        data.map((activity: any, i: any) => {
          return (
            <div
              className="bg-[#f5f5f5] rounded-xl shadow-xl  p-4 overflow-hidden"
              key={i}
            >
              {Boolean(activity.fields.Attachments) &&
                activity.fields.Attachments.length > 0 && (
                  <img
                    className="shadow object-cover w-full h-[150px] rounded"
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
                target="_blank"
                href={`${activity.fields.Website}`}
                className="whitespace-nowrap block font-bold overflow-hidden text-ellipsis text-xs my-2 max-w-[500px]"
              >
                {activity.fields.Website}
              </a>
              {Boolean(activity.fields["Social Media"]) && (
                <>
                  <span className="my-2 uppercase text-xs text-gray-600">
                    Social
                  </span>
                  <a
                    target="_blank"
                    href={`${activity.fields["Social Media"]}`}
                    className="whitespace-nowrap block font-bold overflow-hidden text-ellipsis text-xs my-2 max-w-[500px]"
                  >
                    {activity.fields["Social Media"]}
                  </a>
                </>
              )}

              {activity.fields["Kind of Activity"] &&
                activity.fields["Kind of Activity"].length > 0 &&
                activity.fields["Kind of Activity"].map((type, i) => {
                  return (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-xs font-medium my-2 mr-2 px-2.5 py-0.5 rounded-full 0"
                    >
                      {type}
                    </span>
                  );
                })}
            </div>
          );
        })}
    </main>
  );
}
