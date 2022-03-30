// requires
const { Socket } = require('dgram');
let express = require('express');
let http = require('http');
const { emit } = require('process');
let io = require('socket.io');

//  Create server
// order !!IMPORTANT
let app = express();
let server = http.createServer(app); // wrap express app with http
io = new io.Server(server); // use socket.io on the http app

// start server comunication?
app.use('/', express.static('public'));

// 
io.sockets.on('connection', (socket) => {
    console.log("we have a new client: ", socket.id);
    io.sockets.emit('addclient', socket.id);
    socket.on('disconnect', () => {
        console.log("client: ", socket.id, "is disconnected");
        io.sockets.emit('deleteClient', socket.id);
    })

    socket.on('mousePosData', (data) => {
        io.sockets.emit('mouseDataFromServer', data);
    })
})

// 
server.listen(5500, () => {
    console.log("server running at localHost:8800");
})