import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Columns from 'react-bulma-components/lib/components/columns';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';

import BasicLayout from '../components/BasicLayout';
import { rhythm } from '../utils/typography';

const StyledSection = styled(Section)`
  h1 {
    color: #4c9cdf;
  }

  min-height: calc(100vh - 200px);
  text-align: center;
`;

const StyledList = styled.ul`
  list-style: none;
  text-align: center;
  font-size: ${rhythm(6 / 10)};
`;

const Tags = ({ data, pageContext }) => (
  <BasicLayout
    withFooter
    withNav
    render={() => {
      const { edges } = data.allMarkdownRemark;
      const blogPosts = edges.map(blog => (
        <li key={blog.node.fields.slug}>
          <Link to={blog.node.fields.slug}>{blog.node.frontmatter.title}</Link>
        </li>
      ));
      return (
        <>
          <StyledSection>
            <Container>
              <Columns>
                <Columns.Column size={12}>
                  <h1>{`Posts about ${pageContext.tag.toUpperCase()}`}</h1>
                </Columns.Column>
                <Columns.Column size={12}>
                  <StyledList>{blogPosts}</StyledList>
                </Columns.Column>
              </Columns>
            </Container>
          </StyledSection>
        </>
      );
    }}
  />
);

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
