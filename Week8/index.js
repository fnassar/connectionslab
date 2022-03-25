let express = require('express');
let http = require('http');

let app = express();
let server = http.createServer(app);

app.use('/', express.static('public'));

server.listen(8800, () => {
    console.log("server is up and running")
});




Codeshare logo

Sign UpLog In

1

STEPS:

    2

1) go to folder - > npm init

3

2) add script in package.json - > "start": "nodemon index.js"

4

3) create index.js in the root folder

5

4) install npm packages express and socket.io

6

    ''
'

7

npm install - s express

8

npm install - s socket.io

9

    ''
'

10

5) Created a public folder with index.html

11

6) Set up the server so that it can server the public folder

12

//in index.js

13

let express = require('express');

14

let app = express();

15

app.use('/', express.static('public'));

16

​

17

7) Make sure to include http server

18

    ''
'

19

let express = require('express');

20

let http = require('http');

21

​

22

let app = express();

23

let server = http.createServer(app);

24

​

25

app.use('/', express.static('public'));

26

​

27

server.listen(8800, () => {

    28

    console.log("server is up and running")

    29

})

30

    ''
'

31

​

32

8) In the client side - include the p5.js libraries, and include an app.js file.

33

    ''
'

34

    <
    script src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js" > < /script>

35

    <
    script src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js" > < /script>

36

    ''
'

37

​

38

​

39

-- -- - INCLUDE SOCKETS-- -- -

40

1) Require the socket package

41

let io = require('socket.io');

42

​

43

2) Wrap sockets around the http server

44

io = new io.Server(server); // use socket.io on the http app

45

​

46

3) in the server check
for socket connection

47

//sockets

48

io.sockets.on('connection', (socket) => {

49

console.log("we have a new client: ", socket.id);

50

})

51

​

52

4) in client, tell it to connect to the server via sockets

53

a) add the library to index.html

54

    <
    script type = "text/javascript"
src = "/socket.io/socket.io.js" > < /script>

// opens and connect to socket
let socket = io();
//listen for confirmation
socket.on('connect', () => {
    console.log("client connected via sockets");
})
db.find({}).sort({ planet: -1 }).exec(function(err, docs) {
    console.log(docs);
    dataToSend = { data: docs };
    res.json(dataToSend);
});