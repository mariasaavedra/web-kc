import React from "react";

interface Attachment {
  url: string;
}

interface ActivityFields {
  Attachments?: Attachment[];
  Name: string;
  Details: string;
  Website?: string;
  SocialMedia?: string;
  ActivityTypes?: string[];
}

interface Activity {
  fields: ActivityFields;
}

interface ActivityCardProps {
  activity: Activity;
}

function ActivityCard({ activity }: ActivityCardProps) {
  const { fields } = activity;

  return (
    <div className="bg-[#f5f5f5] cursor-pointer rounded-xl shadow-xl p-4 overflow-hidden">
      {fields.Attachments && fields.Attachments.length > 0 && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="shadow object-cover w-full h-[150px] rounded"
          src={fields.Attachments[0].url}
          alt="Activity"
        />
      )}
      <h3 className="font-bold my-2 text-lg">{fields.Name}</h3>

      <span className="my-2 uppercase text-xs text-gray-600">Details</span>
      <p className="text-sm my-2">{fields.Details.substring(0, 150)}</p>

      {fields.Website && (
        <div>
          <span className="my-2 uppercase text-xs text-gray-600">Website</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={fields.Website}
            className="whitespace-nowrap block font-bold overflow-hidden text-ellipsis text-xs my-2 max-w-[500px]"
          >
            {fields.Website}
          </a>
        </div>
      )}

      {fields.SocialMedia && (
        <div>
          <span className="my-2 uppercase text-xs text-gray-600">Social</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={fields.SocialMedia}
            className="whitespace-nowrap block font-bold overflow-hidden text-ellipsis text-xs my-2 max-w-[500px]"
          >
            {fields.SocialMedia}
          </a>
        </div>
      )}

      {fields.ActivityTypes &&
        fields.ActivityTypes.length > 0 &&
        fields.ActivityTypes.map((type) => (
          <span
            key={type}
            className="bg-blue-100 text-blue-800 text-xs font-medium my-2 mr-2 px-2.5 py-0.5 rounded-full"
          >
            {type}
          </span>
        ))}
    </div>
  );
}

export default ActivityCard;
