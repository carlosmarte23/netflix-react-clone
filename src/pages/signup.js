import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // handle empty form validation
  const isInvalid = firstName === '' || email === '' || password === '';

  //handle signup
  function handleSignUp(event) {
    event.preventDefault();
    // setError('ERROR!');
  }

  return (
    <>
      <HeaderContainer>
        <Form onSubmit={handleSignUp} method="POST">
          <Form.Title>Sign up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Input
            placeholder="First Name"
            value={firstName}
            onChange={({ target }) => {
              setFirstName(target.value);
            }}
          />
          <Form.Input
            placeholder="Email Address"
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
          <Form.Input
            placeholder="Password"
            type="password"
            autoComplete="off"
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          />
          <Form.Submit disabled={isInvalid} type="submit">
            Create new account
          </Form.Submit>
          <Form.Text>
            Already a user? <Form.Link to={ROUTES.SIGN_IN}> Sign In!</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
