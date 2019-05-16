import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { GlobalStyle } from '../styles/common';
import Nav from './Nav';
import Footer from './Footer';

const BasicLayout = ({ render, withNav, withFooter }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      {withNav && <Nav />}
      {render()}
      {withFooter && <Footer />}
      <GlobalStyle />
    </Fragment>
  </ThemeProvider>
);

BasicLayout.propTypes = {
  render: PropTypes.func.isRequired,
  withNav: PropTypes.bool,
  withFooter: PropTypes.bool,
};

BasicLayout.defaultProps = {
  withNav: false,
  withFooter: false,
};

export default BasicLayout;
