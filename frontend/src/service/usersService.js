import axios from 'axios';

export function load_users() {
  return axios.get('https://jsonplaceholder.typicode.com/users');
}
