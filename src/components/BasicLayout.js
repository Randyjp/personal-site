import React, { Fragment } from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import PropTypes from 'prop-types';
import Nav from './Nav';
import Footer from './Footer';

const BasicLayout = ({ render, withNav, withFooter, StyledContainer }) => (
  <Fragment>
    {withNav && <Nav />}
    <Section>
      {StyledContainer ? (
        <StyledContainer>
          <Columns>{render()}</Columns>
        </StyledContainer>
      ) : (
        <Container>
          <Columns>{render()}</Columns>
        </Container>
      )}
    </Section>
    {withFooter && <Footer />}
  </Fragment>
);

BasicLayout.propTypes = {
  render: PropTypes.func.isRequired,
  withNav: PropTypes.bool,
  withFooter: PropTypes.bool,
  StyledContainer: PropTypes.shape({ render: PropTypes.func.isRequired }),
};

BasicLayout.defaultProps = {
  withNav: false,
  withFooter: false,
  StyledContainer: null,
};

export default BasicLayout;
