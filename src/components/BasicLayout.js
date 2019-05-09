import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { GlobalStyle } from '../styles/common';
import Nav from './Nav';
import Footer from './Footer';

const StyledContainer = styled.div`
  max-width: 64rem;
  margin: auto;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
`;

const BasicLayout = ({ children, withNav, withFooter }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      {withNav && <Nav />}
      <StyledContainer>{children}</StyledContainer>
      {withFooter && <Footer />}
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
);

BasicLayout.propTypes = {
  children: PropTypes.element.isRequired,
  withNav: PropTypes.bool,
  withFooter: PropTypes.bool,
};

BasicLayout.defaultProps = {
  withNav: false,
  withFooter: false,
};

export default BasicLayout;
