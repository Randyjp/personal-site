import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import BasicLayout from '../components/BasicLayout';

const Tags = ({ data, pageContext }) => (
  <BasicLayout
    withFooter
    withNav
    render={() => {
      const { edges, totalCount } = data.allMarkdownRemark;
      const blogPosts = edges.map(blog => (
        <li key={blog.node.fields.slug}>
          <Link to={blog.node.fields.slug}>{blog.node.frontmatter.title}</Link>
        </li>
      ));
      return (
        <>
          <h1>Blog Posts by Category</h1>
          <h2>{`${pageContext.tag.toUpperCase()}(${totalCount})`}</h2>
          <ul>{blogPosts}</ul>
        </>
      );
    }}
  />
);

Tags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number,
      edges: PropTypes.array,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    tag: PropTypes.string,
  }).isRequired,
};

export default Tags;

export const tagsQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 200
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
