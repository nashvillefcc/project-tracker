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

function SignIn() {
  const [state, setState] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  return (
    <Container>
      <Form onSubmit={() => {}} widths="equal">
        <Header size="large">Sign In</Header>
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
          label="Passord"
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
          content="Sign In"
        />
      </Form>
    </Container>
  );
}

export default SignIn;
