import React, { Component } from 'react';
import { navigateTo } from 'gatsby';
import Button from 'react-bulma-components/lib/components/button';
import {
  Field,
  Label,
  Control,
  Input,
  Textarea,
} from 'react-bulma-components/lib/components/form';
import { simpleColorValidation, encode } from '../utils/utils';

class ContactForm extends Component {
  state = {
    name: '',
    subject: '',
    email: '',
    message: '',
  };

  handleInputChange = e => {
    const { target } = e;
    const { name, value } = target;

    this.setState({
      [name]: value,
      [`${name}Valid`]: target.checkValidity(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { email, name, subject, message } = this.state;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        email,
        name,
        subject,
        message,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    const {
      email,
      name,
      subject,
      message,
      emailValid,
      nameValid,
      subjectValid,
    } = this.state;
    return (
      <form
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="contact-form" value="contact-form" />
        <Field>
          <Label>Name</Label>
          <Control>
            <Input
              name="name"
              onChange={this.handleInputChange}
              placeholder="John Doe"
              type="text"
              value={name}
              required
              color={simpleColorValidation(name, nameValid)}
            />
          </Control>
        </Field>
        <Field>
          <Label>E-mail</Label>
          <Control>
            <Input
              name="email"
              onChange={this.handleInputChange}
              placeholder="example@gmail.com"
              type="email"
              value={email}
              color={simpleColorValidation(email, emailValid)}
              required
            />
          </Control>
        </Field>
        <Field>
          <Label>Subject</Label>
          <Control>
            <Input
              name="subject"
              onChange={this.handleInputChange}
              placeholder="Let's work together"
              type="text"
              value={subject}
              required
              color={simpleColorValidation(subject, subjectValid)}
            />
          </Control>
        </Field>
        <Field>
          <Label>Message</Label>
          <Control>
            <Textarea
              name="message"
              onChange={this.handleInputChange}
              placeholder="On an Awesome Project."
              type="text"
              value={message}
              required
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Button type="primary" color="link" size="medium">
              Send Message
            </Button>
          </Control>
        </Field>
      </form>
    );
  }
}

export default ContactForm;
