import openSocket from 'socket.io-client';
import { get_my_fake_id } from 'service/usersService';
import { WRITE_CHAT_MESSAGE } from 'service/messagesTypes'

const socket = openSocket('http://localhost:4000');

function writeMessage(destinationUserId, message) {
  const myUserId = get_my_fake_id();
  socket.emit(WRITE_CHAT_MESSAGE, destinationUserId, myUserId, message);
}

function isWitting(destinationUserId, message) {
  const myUserId = get_my_fake_id();
  socket.emit(WRITE_CHAT_MESSAGE, destinationUserId, myUserId, message);
}

export { writeMessage };