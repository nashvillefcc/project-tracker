import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';

const ModalController = ({ trigger }) => {
  const modalData = { heading: 'Sign In' };
  return (
    <Modal trigger={<Button>Show Modal</Button>}>
      <Modal.Header>{modalData.heading}</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
export default ModalController;
