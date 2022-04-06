let express = require('express');
let app = express();
app.use('/', express.static('public'));
app.use('/input', express.static('public'));
app.use('/output', express.static('public'));

//Initialize the actual HTTP server
let http = require('http');
let server = http.createServer(app);

//Initialize socket.io
let io = require('socket.io');
io = new io.Server(server);

//
let inputSockets = io.of('/input');
let outputSockets = io.of('/output');

// namespace

inputSockets.on('connect', (socket) => {
    console.log("we have a new client: ", socket.id, "in input name space");
    socket.on('disconnect', () => {
        console.log("client: ", socket.id, "is disconnected from input name space");
    })
})
outputSockets.on('connect', (socket) => {
    console.log("we have a new client: ", socket.id, "in output name space");
    socket.on('disconnect', () => {
        console.log("client: ", socket.id, "is disconnected from output name space");
    })
})


//run the createServer
let port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log("Server listening at port: " + port);
});