import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import theme from '../theme';
import { GlobalStyle } from '../styles/common';
import Nav from './Nav';
import Footer from './Footer';

const StyledContainer = styled.div`
  margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  ${breakpoint('tablet')`
    max-width: 64rem;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  `}
`;

const StyledWideContainer = styled(StyledContainer)`
  ${breakpoint('desktop')`
    max-width: 84rem;
  `}
`;

const StyledContent = styled.div`
  flex: 1 0 auto;
`;

const CONTAINER_TYPE = Object.freeze({
  WIDE: 'wide',
  STANDARD: 'standard',
  NOTHING: 'nothing',
});

const BasicLayout = ({ children, withNav, withFooter, containerType }) => {
  function getContainer() {
    switch (containerType) {
      case CONTAINER_TYPE.WIDE:
        return <StyledWideContainer>{children}</StyledWideContainer>;
      case CONTAINER_TYPE.STANDARD:
        return <StyledContainer>{children}</StyledContainer>;
      default:
        return children;
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <StyledContent>
          {withNav && <Nav />}
          {getContainer()}
        </StyledContent>
        {withFooter && <Footer />}
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  );
};

BasicLayout.propTypes = {
  children: PropTypes.element.isRequired,
  withNav: PropTypes.bool,
  withFooter: PropTypes.bool,
  containerType: PropTypes.string,
};

BasicLayout.defaultProps = {
  withNav: true,
  withFooter: true,
  containerType: CONTAINER_TYPE.STANDARD,
};

const WideLayout = ({ children, withNav, withFooter, containerType }) => {
  return (
    <BasicLayout
      withNav={withNav}
      withFooter={withFooter}
      containerType={containerType}
    >
      {children}
    </BasicLayout>
  );
};

WideLayout.propTypes = {
  children: PropTypes.element.isRequired,
  withNav: PropTypes.bool,
  withFooter: PropTypes.bool,
  containerType: PropTypes.string,
};

WideLayout.defaultProps = {
  withNav: true,
  withFooter: true,
  containerType: CONTAINER_TYPE.WIDE,
};

export default BasicLayout;
export { WideLayout, CONTAINER_TYPE };
