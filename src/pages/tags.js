import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';

import BasicLayout from '../components/BasicLayout';
import { StyledBlueH1 } from '../styles/common';

const StyledSection = styled.section`
  text-align: center;
`;

const StyledList = styled.ul`
  display: grid;
  font-size: 1.08rem;
  grid-template-columns: repeat(auto-fill, minmax(15.75rem, 1fr));
  list-style: none;
`;

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <BasicLayout>
    <StyledSection>
      <StyledBlueH1>Tags</StyledBlueH1>
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
  </BasicLayout>
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
