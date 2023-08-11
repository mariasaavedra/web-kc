import { NextResponse } from "next/server";
import Airtable from "airtable";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
});
const base = Airtable.base("appXn8rWR51YKBwX2");
const table = base("Activities");

export async function GET() {
  const records = await table.select().all();
  return NextResponse.json(records);
}
