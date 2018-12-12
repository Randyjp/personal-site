import React from "react";
import { graphql } from "gatsby";
import Columns from "react-bulma-components/lib/components/columns";
import PropTypes from "prop-types";
import BlongEntryList from "../components/BlogEntryList";
import BasicLayout from "../components/BasicLayout";

const BlogList = ({ data }) => {
  const blogs = data.allMarkdownRemark.edges;
  console.log(blogs);
  return (
    <BasicLayout
      render={() =>
        blogs.map(blog => (
          <Columns.Column size="one-quarter" key={blog.node.fields.slug}>
            <BlongEntryList blog={blog.node} />
          </Columns.Column>
        ))
      }
    />
  );
};

BlogList.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.shape({
      timeToRead: PropTypes.number.isRequired,
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          author: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          attachments: PropTypes.arrayOf(PropTypes.object).isRequired
        }).isRequired
      }).isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired
      }).isRequired
    })
  }).isRequired
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
            attachments {
              publicURL
            }
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
