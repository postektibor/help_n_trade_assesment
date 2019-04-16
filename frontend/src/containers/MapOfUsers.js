import React from 'react';
import { load_users } from 'service/usersService';
import 'css/App.css';
import UserDetail from 'components/modals/UserDetail';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Button, Container, Row } from 'reactstrap';
import { writeMessage } from 'service/chatService';
import ChatMessage from "../components/modals/ChatMessage";

class UserList extends React.Component {
  state = {
    users: [],
    selectedUser: {},
    isOpenUserDetail: false,
    isOpenChat: false,
    viewport: {
      height: 640,
      latitude: 24.8918,
      longitude: 21.8984,
      zoom: 1
    }
  }

  componentDidMount() {
    const self = this;
    load_users().then(res => {
      self.setState({ users: res.data });
    }).catch(err => {
      console.log('error with loading users')
    })
  }

  handleSelectedUser = (user) => event => {
    this.setState({ selectedUser: user, isOpenUserDetail: true });
  }

  handleCloseModalUserDetail = () => {
    this.setState({ selectedUser: {}, isOpenUserDetail: false });
  }

  handleCloseModalChat = () => {
    this.setState({ selectedUser: {}, isOpenChat: false });
  }

  handleOpenChat = () => {
    this.setState({ isOpenChat: true, isOpenUserDetail: false });
  }

  handleRemoveUser = (user) => event => {
    const { users } = this.state;

    var filtered = users.filter(function (usr) {
      return usr.id !== user.id;
    });
    this.setState({ users: filtered, selectedUser: {}, isOpenUserDetail: false });
  }


  render() {
    const { users, selectedUser, viewport, isOpenChat, isOpenUserDetail } = this.state;
    const self = this;
    return (
      <>
        <ReactMapGL
          {...viewport}
          width={'100%'}
          mapboxApiAccessToken={'pk.eyJ1IjoicG9zdGVrdGlib3IiLCJhIjoiY2p1anE5MXk3MGpzMzQzbnFveW85ZGsxZSJ9.yohQIIiSrPnFp9nIo9uo9g'}
          onViewportChange={(viewport) => this.setState({ viewport })}
        >
          {users.map(user => {
            return (
              <div key={user.id} onClick={self.handleSelectedUser(user)}>

                <Marker
                  latitude={Number(user.address.geo.lat)}
                  longitude={Number(user.address.geo.lng)}
                  offsetLeft={-20}
                  offsetTop={10}
                >
                  <Container>
                    <Row>
                      <div className="dot"></div>
                    </Row>
                    <Row>
                      {user.name}
                    </Row>
                  </Container>
                </Marker>
              </div>
            )
          })}
        </ReactMapGL>
        <UserDetail user={selectedUser} isOpen={isOpenUserDetail} onClose={this.handleCloseModalUserDetail} openChat={this.handleOpenChat} removeUser={this.handleRemoveUser}/>
        <ChatMessage selectedUser={selectedUser} isOpen={isOpenChat} onClose={this.handleCloseModalChat}/>
      </>
    );
  }
}

export default UserList;
