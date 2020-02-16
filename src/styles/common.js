import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }

  html, body, #___gatsby {
    height: 100%;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  /* overrides prism theme default margins to maintain vertical rhythm */
  pre[class*="language-"] {
    margin: 0 0 1rem;
  }
`;

const StyledList = styled.ul`
  list-style: none;

  li {
    display: inline;
  }
`;

const StyledBlueH1 = styled.h1`
  color: ${({ theme: { Colors } }) => Colors.blue.light};
  font-size: 2.2rem;
`;

const StyledH2 = styled.h2`
  color: ${({ theme: { Colors } }) => Colors.blue.light};
  font-size: 1.5rem;
`;

export { StyledList, StyledH2, GlobalStyle, StyledBlueH1 };
