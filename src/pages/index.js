import React from "react";
import { graphql, Link } from "gatsby";

export default function Home({ data }) {
  return (
    <div>
      <h1>Site sourcing from wordpress </h1>
      <h2> Posts</h2>
      {data.allWpPost.nodes.map((node) => (
        <div>
          <Link to={node.gatsbyPath}>
            <h1>{node.title}</h1>
          </Link>

          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </div>
  );
}

export const pageQuery = graphql`
  {
    allWpPost {
      nodes {
        title
        uri
        slug
        excerpt
        gatsbyPath(filePath: "/posts/{WpPost.title}")
      }
    }
  }
`;
