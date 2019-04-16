import React from 'react';
import { ListGroupItem, Card, CardBody, CardText, CardTitle } from 'reactstrap';

const Message = (props) => {

  return (
    <ListGroupItem>
      <Card body inverse color="danger">
        <CardBody>
          <CardTitle>John Lennon</CardTitle>
          <CardText>This is my message. Hi, how are you?</CardText>
          <CardText>
            <small className="text-muted">Sended 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
    </ListGroupItem>
  )
};

export default Message;