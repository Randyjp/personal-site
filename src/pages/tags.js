import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

const Tags = ({ data, pageContext }) => <h1>iii {console.log(pageContext)}</h1>;

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
