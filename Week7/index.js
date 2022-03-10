let express = require('express');
let app = express();

// tell your express app to accept json info & parse it
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));



app.use('/', express.static("public"));

app.get('/', (req, res) => {
    res.send("app is listening at localhost:9000");
});

app.get('/message', (req, res) => {
    console.log(req.body)
    res.json({ "message": "ok" });
});


app.listen(9000, () => {
    console.log("app is listening at localhost:9000");
});