import client from "@/lib/sanity";
import { HomepageTypes } from "@/types/data";

const query = `{
    "heading": *[_type == "homepage"][0].heading,
    "description": *[_type == "homepage"][0].description,
    "image": *[_type == "homepage"][0].image {
      asset->{
        _id,
        url
      }
    },
    "services": *[_type == "homepage"][0].services
  }`

export default async function getHomepageData () {
    const res: HomepageTypes = await client.fetch(query);
    return res;
} 