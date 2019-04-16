import React from 'react';
import { Button, Modal, Container, Row, Col, ModalHeader, ModalBody, Label, Input, ListGroup, FormGroup } from 'reactstrap';
import Message from "components/chat/Message";
import { writeMessage } from "service/chatService";


class ChatMessage extends React.Component {
  state = {
    messages: [],
    messageInput: '',
  }

  writeMessageToUser = (user) => event => {
    writeMessage(user.id, this.state.messageInput);
  }

  handleChangeInput = (event) => {
    this.setState({ messageInput: event.target.value });
  }


  render() {
    const { selectedUser, isOpen, onClose } = this.props;
    const { messageInput } = this.state;
    return (
      <Modal isOpen={isOpen} toggle={onClose} className={this.props.className}>
        <ModalHeader toggle={onClose}>Instant messaging</ModalHeader>
        <ModalBody cssModule={{ height: 500 }}>
          <ListGroup>
            <Message/>
          </ListGroup>
          <FormGroup className="chat_form">
            <Container>
              <Row>
                <Col>
                  <Input type="email" name="email" id="exampleEmail" value={messageInput} onChange={this.handleChangeInput} placeholder="Enter new message..."/>
                </Col>
                <Button onClick={this.writeMessageToUser(selectedUser)}>Send</Button>
              </Row>
            </Container>
          </FormGroup>
        </ModalBody>
      </Modal>
    )
  }
};

export default ChatMessage;