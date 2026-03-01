import { client } from "./client";

export async function fetchExperiments() {
  return await client.fetch(`*[_type == "experiment"]{
    title,
    "slug": slug.current,
    componentKey,
    description
  }| order(_createdAt desc)`);
}

export async function fetchExperimentBySlug(slug) {
  return await client.fetch(
    `*[_type == "experiment" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    componentKey,
    description
  }`,
    { slug },
  );
}

export async function fetchBlogPosts() {
  return await client.fetch(`*[_type == "blogPost"]{
    title,
    "slug": slug.current,
    date,
    description
    }| order(date desc)`);
}
