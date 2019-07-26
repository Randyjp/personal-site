import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby';
import styled from 'styled-components';
import { encode } from '../utils/utils';

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 0.3rem;
  margin-right: 0.8rem;
  text-transform: capitalize;
`;

const StyledInput = styled.input`
  border: 1px solid ${props => props.theme.Colors.grayScale.grey2};
  border-radius: 0.25rem;
  display: block;
  margin-bottom: 2rem;
  outline: none;
  padding: 0.5rem;
  width: 100%;

  :active,
  :hover {
    border-color: ${props => props.theme.Colors.blue.blue1};
    box-shadow: ${props => props.theme.Shadows.box.validInput};
  }

  :focus:invalid {
    border-color: ${props => props.theme.Colors.red.red1};
    box-shadow: ${props => props.theme.Shadows.box.invalidInput};
  }
`;

const StyledButton = styled.button`
  background-color: ${props => props.theme.Colors.blue.blue3};
  border-radius: 0.5rem;
  color: ${props => props.theme.Colors.grayScale.white};
  cursor: pointer;
  font-size: 1.1rem;
  min-width: 12rem;
  padding: 0.5rem;
  text-transform: capitalize;

  @media (max-width: 48rem) {
    padding: 1rem 0.5rem;
    width: 100%;
  }

  :hover {
    background-color: ${props => props.theme.Colors.blue.blue2};
  }
`;

const StyledError = styled.span`
  color: #ff3860;
  font-weight: 600;
  font-size: 0.8rem;
`;

function ValidationError({ message }) {
  return <StyledError>{message}</StyledError>;
}

ValidationError.propTypes = {
  message: PropTypes.string.isRequired,
};

function ContactForm() {
  const defaultState = {
    name: '',
    subject: '',
    email: '',
    message: '',
  };

  const [state, setState] = useState(defaultState);

  function handleInputChange(e) {
    const { target } = e;
    const { name, value } = target;

    setState({
      ...state,
      [name]: value,
      [`${name}Valid`]: target.checkValidity(),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const { email, name, subject, message } = state;
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
      .catch(error => console.log(error));
  }

  const {
    email,
    name,
    subject,
    message,
    emailValid = true,
    nameValid = true,
    subjectValid = true,
    messageValid = true,
  } = state;

  return (
    <form
      name="contact-form"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="contact-form" value="contact-form" />
      <StyledLabel htmlFor="name">name</StyledLabel>
      {!nameValid && <ValidationError message="Name is required" />}
      <StyledInput
        aria-required="true"
        aria-invalid={!nameValid}
        id="name"
        name="name"
        onChange={handleInputChange}
        placeholder="John Doe"
        type="text"
        value={name}
        required
      />
      <StyledLabel htmlFor="email">e-mail</StyledLabel>
      {!emailValid && <ValidationError message="Use a valid email format" />}
      <StyledInput
        aria-required="true"
        aria-invalid={!emailValid}
        id="email"
        name="email"
        onChange={handleInputChange}
        placeholder="example@gmail.com"
        type="email"
        value={email}
        required
      />
      <StyledLabel htmlFor="subject">subject</StyledLabel>
      {!subjectValid && <ValidationError message="Subject is required" />}
      <StyledInput
        aria-required="true"
        aria-invalid={!subjectValid}
        id="subject"
        name="subject"
        onChange={handleInputChange}
        placeholder="Let's work together"
        type="text"
        value={subject}
        required
      />
      <StyledLabel htmlFor="message">message</StyledLabel>
      {!messageValid && <ValidationError message="Message is required" />}
      <StyledInput
        aria-required="true"
        aria-invalid={!messageValid}
        as="textarea"
        id="message"
        name="message"
        rows="8"
        onChange={handleInputChange}
        placeholder="On an Awesome Project."
        type="text"
        value={message}
        required
      />
      <StyledButton type="submit" color="link" size="medium">
        send message
      </StyledButton>
    </form>
  );
}

export default ContactForm;
