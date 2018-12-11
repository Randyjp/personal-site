import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import PropTypes from 'prop-types';
import Nav from './Nav';

const BasicLayout = ({ render }) => (
  <Section>
    <Nav />
    <Container>
      <Columns>{render()}</Columns>
    </Container>
  </Section>
);

BasicLayout.propTypes = {
  render: PropTypes.func.isRequired,
};

export default BasicLayout;
