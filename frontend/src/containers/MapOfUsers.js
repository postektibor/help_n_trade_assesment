import React from 'react';
import { load_users } from 'service/usersService';
import 'css/App.css';
import UserDetail from 'components/modals/UserDetail';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Container, Row } from 'reactstrap';

class UserList extends React.Component {
  state = {
    users: [],
    selectedUser: {},
    isOpen: false,
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
    this.setState({ selectedUser: user, isOpen: true });
  }

  handleCloseModal = () => {
    this.setState({ selectedUser: {}, isOpen: false });
  }

  handleRemoveUser = (user) => event => {
    const { users } = this.state;

    var filtered = users.filter(function (usr) {
      return usr.id !== user.id;
    });
    this.setState({ users: filtered, selectedUser: {}, isOpen: false });
  }


  render() {
    const { users, isOpen, selectedUser, viewport } = this.state;
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
        <UserDetail user={selectedUser} isOpen={isOpen} onClose={this.handleCloseModal} removeUser={this.handleRemoveUser}/>
      </>
    );
  }
}

export default UserList;
