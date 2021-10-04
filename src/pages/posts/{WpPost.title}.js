import React from "react";
import { graphql } from "gatsby";

export default function BlogPost({ data }) {
  // const post = ;
  // console.log(post);
  return (
    <div>
      {/* <div>
        <h1>{data.WpPost.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.WpPost.excerpt }} />
      </div> */}
      
    </div>
  );
}

export const query = graphql`
  query ($slug: String) {
    wpPost(slug: { eq: $slug }) {
      title
      excerpt
    }
  }
`;
