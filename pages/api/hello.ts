import { NextApiRequest, NextApiResponse } from "next";

const Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "YOUR_SECRET_API_TOKEN",
});
const base = Airtable.base("appXn8rWR51YKBwX2");

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json({ message: "hello" });
}
