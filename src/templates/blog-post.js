import React from 'react';
import { graphql } from 'gatsby';

const BlogPost = ({ data }) => {
  const {
    html,
    frontmatter: { title },
  } = data.markdownRemark;
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
      }
    }
  }
`;

export default BlogPost;
