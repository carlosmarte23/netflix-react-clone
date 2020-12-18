import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';

export default function SignIn() {
  const [error, setError] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const isInvalid = !emailAddress | !password;

  const handleSignin = (event) => {
    event.preventDefault();

    //Call in here to firebase to authenticate user.
    //if there is an error, populate the error state.
  };

  return (
    <HeaderContainer>
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Base onSubmit={handleSignin} method="POST">
          <Form.Input
            placeholder="Email address"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Form.Input
            type="password"
            placeholder="Password"
            value={password}
            autoComplete="off"
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Submit disabled={isInvalid} type="submit">
            Sign In
          </Form.Submit>
          <Form.Text>
            New to Netflix? <Form.Link to="/singup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA.
          </Form.TextSmall>
        </Form.Base>
      </Form>
    </HeaderContainer>
  );
}
