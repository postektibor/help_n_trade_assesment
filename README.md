Before you get started please be sure, that you have installed nodejs https://nodejs.org/en/

Solution consists from 2 main parts(folders): frontend and backend

#Backenf - NodeJS application
go to this folder
`cd backend`
install dependencies
`npm install`
and run app `node index.js`

server is listening for sockets at port 4000


Open in browser at url: `http://localhost:4000`


**At this site you will see recived messages via sockets.**


#Frontend - React application
go to this folder
`cd frontend`

install dependencies
`npm install`


and run app `npm start`

Open in browser at url: `http://localhost:3000`

###App overview:
The main view
App containts of map of the world. Users, that are loaded from page `https://jsonplaceholder.typicode.com/users` 
are flaged with marker in the map.

If you click on the marker, you can see modal window with detailed informations of user.

If you want to remove user from the map, you can click on the `Remove user` button. Now is map rerendered.
You can scroll or free moving by mouse on the map.

If you click on button `Write message...`, Chat modal window will be diplayed.

At down of this modal is input, where you can write new message. 
When you send it after clicking on the button `Send`, this message is instantly sended to to backend server
and is presented at  `http://localhost:4000`



