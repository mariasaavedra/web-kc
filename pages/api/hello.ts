import { NextApiRequest, NextApiResponse } from "next";

const Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
});
const base = Airtable.base("appXn8rWR51YKBwX2");
const table = base('Activities');

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const records = await table.select({}).all();
  return res.status(200).json(records);
}
