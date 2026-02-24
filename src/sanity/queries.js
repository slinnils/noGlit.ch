import { client } from "./client";

export async function fetchExperiments() {
  return await client.fetch(`*[_type == "experiment"]{
    title,
    "slug": slug.current,
    componentKey,
    description
  }`);
}

export async function fetchExperimentBySlug(slug) {
  return await client.fetch(`*[_type == "experiment" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    componentKey,
    description
  }`, { slug });
}