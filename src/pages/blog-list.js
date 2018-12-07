import React from 'react';
import { graphql } from 'gatsby';
import BlongEntryList from '../components/BlogEntryList';

const BlogList = ({ data }) => {
  const blogs = data.allMarkdownRemark.edges;

  return blogs.map(blog => (
    <BlongEntryList key={blog.node.fields.slug} blog={blog.node} />
  ));
  //   return <p>Blogs</p>;
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            author
            date
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`;

export default BlogList;
