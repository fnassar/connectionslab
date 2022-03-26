let express = require('express');
let http = require('http');
let app = express();
let server = http.createServer(app); // create http server

// 
app.use('/', express.static('public'));

server.listen(8800, () => {
    console.log("server running at localHost:8800");
})