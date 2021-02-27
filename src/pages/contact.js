import React from 'react';
import BasicLayout from '../components/BasicLayout';
import ContactForm from '../components/ContactForm';

const Contact = () => (
  <BasicLayout>
    <React.Fragment>
      <h1>Let&apos;s get in touch</h1>
      <ContactForm />
    </React.Fragment>
  </BasicLayout>
);

export default Contact;
