import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
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

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <BasicLayout
    withFooter
    withNav
    render={() => (
      <StyledSection>
        <h1>Tags</h1>
        <StyledList>
          {group.map(({ fieldValue, totalCount }) => (
            <li key={fieldValue}>
              <Link to={`/tags/${kebabCase(fieldValue)}`}>
                {fieldValue} ({totalCount})
              </Link>
            </li>
          ))}
        </StyledList>
      </StyledSection>
    )}
  />
);

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }).isRequired,
};
export const tagsQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsPage;
