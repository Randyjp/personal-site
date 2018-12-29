import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import BulmaFooter from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';

const StyledFooter = styled(BulmaFooter)`
  a {
    color: #3bb3a1;
  }
  p {
    margin-bottom: 0;
    margin-left: 2rem;
  }

  color: whitesmoke;
  padding: 1rem 0.5rem;
`;
const Footer = () => (
  <StyledFooter>
    <p>
      {`© Randy Perez 20018-${format(new Date(), 'YYYY')}.  Powered by `}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noreferrer noopener"
      >
        Gatsby.js
      </a>
    </p>
  </StyledFooter>
);

export default Footer;
