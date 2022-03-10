let express = require('express');
let app = express();

// tell your express app to accept json info & parse it
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


let posts = [];

app.use('/', express.static("public"));

// app.get('/', (req, res) => {
//     res.send("app is listening at localhost:9000");
// });

app.post('/message', (req, res) => {
    console.log(req.body);
    posts.push(req.body);
    res.json({ "message": "ok" });
});

app.get('/message', (req, res) => {
    let dataToSend = {
        "posts": posts
    };
    res.json(dataToSend);
})


app.listen(9000, () => {
    console.log("server up at localhost:9000");
});