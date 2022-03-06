let campusCats = {
    lalo: {
        color: "orange",
        spot: "d2 food",
        age: 2
    },
    grumpy: {
        color: "black",
        spot: "c2",
        age: 5
    },
    snow: {
        color: "white",
        spot: "a5",
        age: 7
    }
}

let express = require('express');
let app = express();

// what should we actually serve?

app.use('/', express.static("public"));

app.get('/', (req, res) => {
    res.send("Hello, this is homepage");
})
app.get('/about', (req, res) => {
    res.send("Hello, this is Fatema");
})
app.get('/cats', (req, res) => {
    let minAge = req.query.ageGreaterThan;
    // add conditions so that when user asks for all cats with no queries, the API should still work

    if (minAge) {
        olderCampusCats = {};
        // respond with a json of cats greater than a certain age
        for (catName in campusCats) // loops through the keys in campusCats 
        {
            let cat = campusCats[catName];
            if (cat.age >= minAge) {
                olderCampusCats[catName] = cat;
            }
        }
        res.json(olderCampusCats);
    } else {
        res.json(campusCats);
    }
})



app.get('/cats/:cat', (req, res) => {
    console.log(req.params.cat);
    let catname = req.params.cat;
    if (campusCats[catname] != undefined) {
        res.json(campusCats[catname]);
    } else {
        res.json({ error: "data not found" });
    }

})

// what port should we listen to
app.listen(9000, () => {
    console.log("app is listening at localhost:9000");
});