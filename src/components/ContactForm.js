import React, { Component } from 'react';
import Button from 'react-bulma-components/lib/components/button';
import {
  Field,
  Label,
  Control,
  Input,
  Textarea,
} from 'react-bulma-components/lib/components/form';

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
    });
  };

  render() {
    const { email, name, subject, message } = this.state;
    return (
      <form
        name="contact-form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
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
            />
          </Control>
        </Field>
        <Field>
          <Label>Message</Label>
          <Control>
            <Textarea
              name="name"
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
