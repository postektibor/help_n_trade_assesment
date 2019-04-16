import React from 'react';
import { load_users } from 'service/usersService';
import UserItem from 'components/UserItem';
import 'css/App.css';
import { ListGroup } from 'reactstrap';

class UserList extends React.Component {
  state = {
    users: [],
    selectedUser: {},
    openPopup: false,
  }

  componentDidMount() {
    const self = this;
    load_users().then(res => {
      self.setState({ users: res.data });
    }).catch(err => {
      console.log('error with loading users')
    })
  }

  handleSelectedUser = (user) => {
    this.setState({ selectedUser: user });
  }

  render() {
    const { users } = this.state;
    const self = this;
    return (
      <ListGroup>
        {users.map(user => {
          return <UserItem key={user.id} user={user} handleSelectUser={self.handleSelectedUser}/>
        })}
      </ListGroup>
    );
  }
}

export default UserList;
