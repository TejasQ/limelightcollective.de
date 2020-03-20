import airtable from "airtable";

export const getFromAirTable = new airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
  endpointUrl: "https://api.airtable.com/",
}).base(process.env.AIRTABLE_BASE_ID);
