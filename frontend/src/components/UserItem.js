import React from 'react';
import 'css/components/UserItem.css';
import { ListGroupItem } from 'reactstrap';




const UserItem = (props) => {
  const { user, handleSelectUser } = props;
  const { name, email } = user;

  const handleClick = (event) => {
    handleSelectUser(user);
  }

  return (
    <div onClick={handleClick}>
      <ListGroupItem tag="a" action>
        {name}
      </ListGroupItem>
    </div>
  )
};

export default UserItem;