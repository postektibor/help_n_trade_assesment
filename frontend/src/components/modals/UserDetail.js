import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';

const UserDetail = (props) => {
  const { user, isOpen, onClose, removeUser } = props;
  const { name, email, address, username } = user;
  if (!address) return null;
  const { street, city, suite, zipcode } = address;

  return (
    <Modal isOpen={isOpen} toggle={onClose} className={props.className}>
      <ModalHeader toggle={onClose}>{name}</ModalHeader>
      <ModalBody>
        <Table>
          <tbody>
          <tr>
            <td><b>Email:</b></td>
            <td>{email}</td>
          </tr>
          <tr>
            <td><b>Username:</b></td>
            <td>{username}</td>
          </tr>
          <tr>
            <td><b>Street:</b></td>
            <td>{street}</td>
          </tr>
          <tr>
            <td><b>Suite:</b></td>
            <td>{suite}</td>
          </tr>
          <tr>
            <td><b>City:</b></td>
            <td>{city}</td>
          </tr>
          <tr>
            <td><b>Zip:</b></td>
            <td>{zipcode}</td>
          </tr>
          </tbody>
        </Table>

      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={removeUser(user)}>Remove user</Button>
      </ModalFooter>
    </Modal>
  );
}

export default UserDetail;