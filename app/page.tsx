import Image from "next/image";
import { useEffect } from "react";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/airtable");
  const data = await response.json();

  return (
    <main className="grid grid-cols-1 md:grid-cols-4 gap-4 p-8 bg-slate-200">
      {data &&
        data.length > 0 &&
        data.map((activity: any, i: any) => {
          return (
            <div
              className="bg-white border rounded shadow border p-8 overflow-hidden"
              key={i}
            >
              {Boolean(activity.fields.Attachments) &&
                activity.fields.Attachments.length > 0 && (
                  <img className="object-cover h-[250px] rounded" src={activity.fields.Attachments[0].url} />
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
            </div>
          );
        })}
    </main>
  );
}
