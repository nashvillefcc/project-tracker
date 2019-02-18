import React, { useState } from 'react';
import {
  Container,
  Tab,
  Header,
  List,
  Modal,
  Form,
  Input,
  Button,
  Divider
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = e => setUsername(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  function submitHandler(e) {
    e.preventDefault();
    console.log('signup', username, password, email);
  }
  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Header size="large">Sign Up</Header>
        <Input
          label="Username"
          value={username}
          onChange={handleUsernameChange}
          icon="user"
          placeholder="enter username"
          width={6}
          name="username"
          type="text"
          required
        />
        <Input
          label="Email"
          value={email}
          onChange={handleEmailChange}
          icon="envelope"
          placeholder="enter email"
          width={6}
          name="email"
          type="email"
          required
        />
        <Input
          label="Password"
          value={password}
          onChange={handlePasswordChange}
          icon="lock"
          placeholder="enter password"
          width={6}
          name="password"
          type="password"
          required
        />
        <Divider />
        <Button
          circular
          icon="sign-in"
          labelPosition="right"
          onClick={() => {}}
          content="Sign Up"
        />
      </Form>
    </Container>
  );
}

export default SignUp;
