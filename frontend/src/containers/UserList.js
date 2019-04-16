import React from 'react';
import { load_users } from 'service/usersService';
import UserItem from 'components/UserItem';
import '../css/App.css';

class UserList extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    const self = this;
    load_users().then(res => {
      self.setState({users:res.data});
    }).catch(err => {
      console.log('error with loading users')
    })


  }

  render() {
    const { users } = this.state;
    return (
     users.map(user=>{
       return <UserItem key ={user.id} name={user.name} email={user.email}/>
     })
    );
  }
}

export default UserList;
