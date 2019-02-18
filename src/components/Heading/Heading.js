import React from 'react';
import PropTypes from 'prop-types';
import { Header, Container, Button } from 'semantic-ui-react';

import Style from './Style';

function Heading(props) {
  const { wrapper } = Style;
  return (
    <Container style={wrapper}>
      <Header color="green" as="h1">
        Projects Tracker
      </Header>
    </Container>
  );
}

//may use proptypes later for admin features
Heading.propTypes = {};

export default Heading;
