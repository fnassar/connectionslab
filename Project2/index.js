const { Socket } = require('dgram');
let express = require('express');
let app = express();
let io = require('socket.io');

//Initialize the actual HTTP server
let http = require('http');
let server = http.createServer(app);
//Initialize socket.io
io = new io.Server(server);


app.use('/', express.static('public'));
// connect to server
io.sockets.on('connect', (socket) => {
    console.log("we have a new client: ", socket.id);
    socket.on('disconnect', () => {
            console.log("client: ", socket.id, "is disconnected");
        })
        // socket.on('newLeaf', (data) => {
        //     io.sockets.emit('addLeaf', data);
        //     console.log(data);
        // })
    socket.on('newPos', (data) => {
        io.sockets.emit('updateLeaf', data);
        // console.log(data);
    })

})

//run the createServer
let port = process.env.PORT || 7000;
server.listen(port, () => {
    console.log("Server listening at port: " + port);
});