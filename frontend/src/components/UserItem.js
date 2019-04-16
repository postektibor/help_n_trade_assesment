import React from 'react';
import 'css/components/UserItem.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const UserItem = (props) => {
  const { name, email } = props;
  return (
    <div>
      <div>{name}</div>
      <Card>
        <CardBody>
          {email}
        </CardBody>
      </Card>
    </div>
  )
};

export default UserItem;