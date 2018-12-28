import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import BasicLayout from '../components/BasicLayout';
import ContactForm from '../components/ContactForm';

export default () => (
  <BasicLayout
    render={() => (
      <Columns.Column size="three-fifths" offset="one-fifth">
        <h1>Let&apos;s get in touch</h1>
        <ContactForm />
      </Columns.Column>
    )}
  />
);
