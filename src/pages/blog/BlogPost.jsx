import { useState } from "react";
import { fetchBlogPosts } from "../../sanity/queries.js";
import { useEffect } from "react";
import { PortableText } from "@portabletext/react";

export default function BlogPost() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts().then(setBlogPosts);
  }, []);

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const portableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-lab-accent pl-4 italic">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    "strike-through": ({ children }) => <s>{children}</s>,
  },
};

  return (
    <>
      {blogPosts.map((post) => (
        <div key={post._id} className="card flex flex-col gap-2 w-[50%]">
          <p className="text-lab-text-bright text-2xl font-semibold">{post.title}</p>
          <p className="text-lab-text-muted">
            {new Intl.DateTimeFormat("de-CH", options).format(
              new Date(post.date),
            )}
          </p>
          <div className="text-lab-text-main">
            <PortableText value={post.description} components={portableTextComponents} />
          </div>
        </div>
      ))}
    </>
  );
}


