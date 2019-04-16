import axios from 'axios';

export function load_users() {
  return axios.get('https://jsonplaceholder.typicode.com/users');
}

export function get_my_fake_id(){
  //this is fake data, but it will be parsed from token
  return 3;
}