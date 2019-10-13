import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import BasicLayout from '../components/BasicLayout';
import { StyledBlueH1 } from '../styles/common';

const StyledSection = styled.section`
  text-align: center;
`;

const StyledList = styled.ul`
  list-style: none;
  text-align: center;
  font-size: 1.08rem;
`;

const Tags = ({ data, pageContext }) => {
  const { edges } = data.allMarkdownRemark;
  const blogPosts = edges.map(blog => (
    <li key={blog.node.fields.slug}>
      <Link to={blog.node.fields.slug}>{blog.node.frontmatter.title}</Link>
    </li>
  ));
  return (
    <BasicLayout withFooter withNav>
      <StyledSection>
        <StyledBlueH1>{`Posts about ${pageContext.tag.toUpperCase()}`}</StyledBlueH1>
        <StyledList>{blogPosts}</StyledList>
      </StyledSection>
    </BasicLayout>
  );
};

Tags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
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
