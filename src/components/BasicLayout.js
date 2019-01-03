import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';

const BasicLayout = ({ render, withNav, withFooter }) => (
  <>
    {withNav && <Nav />}
    {render()}
    {withFooter && <Footer />}
  </>
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
