import React from "react";
import ActivityCardDetails from "./ActivityCardDetails";
import Modal from "./Modal";
import { ActivityCardProps } from "@/types";


function ActivityCard({ activity, searchParams }: ActivityCardProps) {
  const { id, fields } = activity;
  const showActivity = searchParams?.activity; // get the id from params ex: "?activity=123"

  console.log(showActivity);

  return (
    <div className="bg-[#f5f5f5] cursor-pointer rounded-xl shadow-xl p-4 overflow-hidden">
      <ActivityCardDetails  id={id} fields={fields} />
      <a href={`?activity=${id}`}>View</a>
      {id === showActivity && activity !== undefined && <Modal fields={fields}/>}
    </div>
  );
}

export default ActivityCard;
