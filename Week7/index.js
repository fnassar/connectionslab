let express = require('express');
let app = express();

app.use('/', express.static("public"));

app.get('/', (req, res) => {
    res.send("app is listening at localhost:9000");
});


app.listen(9000, () => {
    console.log("app is listening at localhost:9000");
});