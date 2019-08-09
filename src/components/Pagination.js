import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;

  ${breakpoint('desktop')`
    flex-direction: row;
    font-size: 1.125rem;
  `}
`;

const StyledPaginationLink = styled(Link)`
  border: 0.0625rem solid ${props => props.theme.Colors.grayScale.grey};
  border-radius: 0.3125rem;
  color: ${props => props.theme.Colors.grayScale.black};
  margin-bottom: 1rem;
  margin-right: 1.5rem;
  min-width: 3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  text-align: center;
  width: 100%;

  :hover {
    border: 0.0625rem solid ${props => props.theme.Colors.grayScale.black};
  }

  :focus,
  :active {
    border: 0.0625rem solid ${props => props.theme.Colors.blue.blue1};
  }

  ${breakpoint('desktop')`
    width: auto;
  `}
`;

const StyledNewLink = styled(StyledPaginationLink)`
  margin-left: auto;
  margin-right: 0;
`;

const Pagination = ({ previous, next }) => {
  return (
    <StyledNav role="navigation" aria-label="pagination">
      {previous && (
        <StyledPaginationLink to={previous.url}>
          ← {previous.text || `Newer Posts`}
        </StyledPaginationLink>
      )}
      {next && (
        <StyledNewLink to={next.url}>
          {next.text || `Older Posts`} →
        </StyledNewLink>
      )}
    </StyledNav>
  );
};

Pagination.propTypes = {
  previous: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string,
  }),
  next: PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string,
  }),
};

Pagination.defaultProps = {
  previous: null,
  next: null,
};

export default Pagination;
