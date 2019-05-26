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

  ${breakpoint('tablet')`
    flex-direction: row;
  `}
`;

const StyledPaginationLink = styled(Link)`
  border: 0.0625rem solid ${props => props.theme.Colors.grayScale.grey};
  border-radius: 0.3125rem;
  color: ${props => props.theme.Colors.grayScale.black};
  margin-bottom: 1rem;
  min-width: 3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  text-align: center;
  white-space: nowrap;
  width: 100%;

  :hover {
    border: 0.0625rem solid ${props => props.theme.Colors.grayScale.black};
  }

  :focus,
  :active {
    border: 0.0625rem solid ${props => props.theme.Colors.blue.blue1};
  }

  ${breakpoint('tablet')`
    width: auto;
  `}
`;

const StyledNewLink = styled(StyledPaginationLink)`
  margin-left: auto;
`;

// TODO: make it more generic, get the base url from props.
const Pagination = ({ previous, next }) => {
  const localPrevious = previous === 1 ? '' : previous;
  return (
    <StyledNav role="navigation" aria-label="pagination">
      {previous && (
        <StyledPaginationLink to={`/${localPrevious}`}>
          ← Newer Posts
        </StyledPaginationLink>
      )}
      {next && <StyledNewLink to={`/${next}`}>Older Posts →</StyledNewLink>}
    </StyledNav>
  );
};

Pagination.propTypes = {
  previous: PropTypes.number,
  next: PropTypes.number,
};

Pagination.defaultProps = {
  previous: null,
  next: null,
};

export default Pagination;
