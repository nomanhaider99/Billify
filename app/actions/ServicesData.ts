import { client } from "@/sanity/lib/client";
import { ServicesData } from "@/types/data";

const query = `*[_type == "service"][0]{
  service
}`;


export default async function getServicesData(): Promise<string[]> {
  const res = await client.fetch(query);
  return res?.service || [];
}
