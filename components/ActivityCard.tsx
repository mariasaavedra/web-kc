import React from "react";
import Button from "./Button";
import Dialog from "./Dialog";
import ActivityCardDetails from "./ActivityCardDetails";

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
  searchParams: Record<string, string | null | undefined>;
}

function ActivityCard({ activity, searchParams }: ActivityCardProps) {
  const { fields } = activity;
  const showModal = searchParams?.modal;

  return (
    <div className="bg-[#f5f5f5] cursor-pointer rounded-xl shadow-xl p-4 overflow-hidden">
      <ActivityCardDetails fields={fields} />
    </div>
  );
}

export default ActivityCard;
