import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import BasicLayout from '../components/BasicLayout';
import ContactForm from '../components/ContactForm';

export default () => (
  <BasicLayout
    withNav
    withFooter
    render={() => (
      <Section>
        <Container>
          <Columns>
            <Columns.Column size="three-fifths" offset="one-fifth">
              <h1>Let&apos;s get in touch</h1>
              <ContactForm />
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    )}
  />
);
