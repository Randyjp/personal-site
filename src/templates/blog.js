import React from 'react';
import { graphql } from 'gatsby';

const Blog = ({ data }) => 
  // const wpPost = data.wordpressPost;
   (
    <div>
      <h1>{wpPost.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: wpPost.content }} />
    </div>
  )
;

// export const query = graphql`
//   query($id: String!) {
//     wordpressPost(id: { eq: $id }) {
//       title
//       content
//       slug
//     }
//   }
// `;

export default Blog;
