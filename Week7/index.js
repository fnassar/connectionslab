let express = require('express');
let DataStor = require('nedb');

// initialise app
let app = express();

// tell your express app to accept json info & parse it
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


// initialise db
let db = new DataStor({
    filename: 'posts.db',
    timestampData: true
});
db.loadDatabase(); // only updates new values does not overwrite

// app variables
let posts = [];

app.use('/', express.static("public"));



app.post('/message', (req, res) => {
    // here we add new stuff to the db
    db.insert(req.body, (err, newDoc) => {
        console.log(newDoc.json);
    });
    res.json({ "message": "ok" });
});

app.get('/message', (req, res) => {
    let dataToSend = {};
    // this is what we see at the front end when we fetch
    db.find({}).sort({ createdAt: -1 }).exec(function(err, docs) {
        // console.log(docs);
        dataToSend = { data: docs };
        console.log(dataToSend);
        res.json({ dataToSend });
    });
})

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.listen(9000, () => {
    console.log("server up at localhost:9000");
});