import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }
`;

const StyledList = styled.ul`
  list-style: none;

  li {
    display: inline;
  }
`;

const StyledH2 = styled.h2`
  color: ${({ theme: { Colors } }) => Colors.blue.light};
  font-size: 1.5rem;
`;

export { StyledList, StyledH2, GlobalStyle };
