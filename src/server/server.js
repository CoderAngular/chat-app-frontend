// const Express = require('express');
// var cors = require('cors')
// const Mongoose = require('mongoose');
// const Path = require('path');
// //const Http = require('http');
// const app = Express();
// //const socket = require('socket.io');
// const clientPath = '../../dist/chat-app';


// //set static folder
// app.use(Express.static(Path.join(__dirname, clientPath)));
// app.use(cors);
// app.use(Express.json());
// //const server = Http.createServer(app);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// app.post('/userSignup', (req, res) => {
//     console.log(req);
// });

// app.get('/userLogin', (req, res) => {
//     console.log(req);
//     return res.json({
//         statusCode: 200,
//         statusMessage: "User logged in successfully!"
//     })
// });














//===================SOCKET IO CODES========================
//const io = socket(server);

//middleware to authenticate
// io.use( (socket, next) => {
//     if(socket.handshake.headers.username === 'bbb'){
//         next();
//     }
// });

//Run when client connects
// io.on('connection', socket => {
//     console.log('New Connection...');
//     console.log(socket.server.engine.clientsCount);
// })





// Mongoose.connect('mongodb://localhost/chat-app')
//     .then( () => console.log('Connected to mongodb...'))
//     .catch( () => console.log('Could not connect to mongodb...', err));