let express = require('express');
let app = express();

// fetch
// dont know how yet so just create var
let colors = {
    "description": "List of Crayola crayon standard colors",
    "colors": {
        "Almond": {
            "main": "brown",
            "hex": "#EFDECD"
        },
        "Antique Brass": {
            "main": "brown",
            "hex": "#CD9575"
        },
        "Apricot": {
            "main": "brown",
            "hex": "#FDD9B5"
        },
        "Aquamarine": {
            "main": "blue",
            "hex": "#78DBE2"
        },
        "Asparagus": {
            "main": "green",
            "hex": "#87A96B"
        },
        "Atomic Tangerine": {
            "main": "orange",
            "hex": "#FFA474"
        },
        "Banana Mania": {
            "main": "yellow",
            "hex": "#FAE7B5"
        },
        "Beaver": {
            "main": "brown",
            "hex": "#9F8170"
        },
        "Bittersweet": {
            "main": "red",
            "hex": "#FD7C6E"
        },
        "Black": {
            "main": "grey",
            "hex": "#000000"
        },
        "Blue": {
            "main": "blue",
            "hex": "#1F75FE"
        },
        "Blue Bell": {
            "main": "blue",
            "hex": "#A2A2D0"
        },
        "Blue Green": {
            "main": "blue",
            "hex": "#0D98BA"
        },
        "Blue Violet": {
            "main": "blue",
            "hex": "#7366BD"
        },
        "Blush": {
            "main": "red",
            "hex": "#DE5D83"
        },
        "Brick Red": {
            "main": "red",
            "hex": "#CB4154"
        },
        "Brown": {
            "main": "brown",
            "hex": "#B4674D"
        },
        "Burnt Orange": {
            "main": "orange",
            "hex": "#FF7F49"
        },
        "Burnt Sienna": {
            "main": "orange",
            "hex": "#EA7E5D"
        },
        "Cadet Blue": {
            "main": "blue",
            "hex": "#B0B7C6"
        },
        "Canary": {
            "main": "yellow",
            "hex": "#FFFF99"
        },
        "Caribbean Green": {
            "main": "green",
            "hex": "#00CC99"
        },
        "Carnation Pink": {
            "main": "red",
            "hex": "#FFAACC"
        },
        "Cerise": {
            "main": "red",
            "hex": "#DD4492"
        },
        "Cerulean": {
            "main": "blue",
            "hex": "#1DACD6"
        },
        "Chestnut": {
            "main": "brown",
            "hex": "#BC5D58"
        },
        "Copper": {
            "main": "brown",
            "hex": "#DD9475"
        },
        "Cornflower": {
            "main": "blue",
            "hex": "#9ACEEB"
        },
        "Cotton Candy": {
            "main": "red",
            "hex": "#FFBCD9"
        },
        "Dandelion": {
            "main": "yellow",
            "hex": "#FDDB6D"
        },
        "Denim": {
            "main": "blue",
            "hex": "#2B6CC4"
        },
        "Desert Sand": {
            "main": "brown",
            "hex": "#EFCDB8"
        },
        "Eggplant": {
            "main": "brown",
            "hex": "#6E5160"
        },
        "Electric Lime": {
            "main": "green",
            "hex": "#CEFF1D"
        },
        "Fern": {
            "main": "green",
            "hex": "#71BC78"
        },
        "Forest Green": {
            "main": "green",
            "hex": "#6DAE81"
        },
        "Fuchsia": {
            "main": "red",
            "hex": "#C364C5"
        },
        "Fuzzy Wuzzy": {
            "main": "red",
            "hex": "#CC6666"
        },
        "Gold": {
            "main": "yellow",
            "hex": "#E7C697"
        },
        "Goldenrod": {
            "main": "yellow",
            "hex": "#FCD975"
        },
        "Granny Smith Apple": {
            "main": "green",
            "hex": "#A8E4A0"
        },
        "Gray": {
            "main": "grey",
            "hex": "#95918C"
        },
        "Green": {
            "main": "green",
            "hex": "#1CAC78"
        },
        "Green Yellow": {
            "main": "yellow",
            "hex": "#F0E891"
        },
        "Hot Magenta": {
            "main": "red",
            "hex": "#FF1DCE"
        },
        "Inchworm": {
            "main": "green",
            "hex": "#B2EC5D"
        },
        "Indigo": {
            "main": "blue",
            "hex": "#5D76CB"
        },
        "Jazzberry Jam": {
            "main": "red",
            "hex": "#CA3767"
        },
        "Jungle Green": {
            "main": "green",
            "hex": "#3BB08F"
        },
        "Laser Lemon": {
            "main": "yellow",
            "hex": "#FEFE22"
        },
        "Lavender": {
            "main": "red",
            "hex": "#FCB4D5"
        },
        "Macaroni and Cheese": {
            "main": "orange",
            "hex": "#FFBD88"
        },
        "Magenta": {
            "main": "red",
            "hex": "#F664AF"
        },
        "Mahogany": {
            "main": "red",
            "hex": "#CD4A4C"
        },
        "Manatee": {
            "main": "grey",
            "hex": "#979AAA"
        },
        "Mango Tango": {
            "main": "orange",
            "hex": "#FF8243"
        },
        "Maroon": {
            "main": "red",
            "hex": "#C8385A"
        },
        "Mauvelous": {
            "main": "red",
            "hex": "#EF98AA"
        },
        "Melon": {
            "main": "red",
            "hex": "#FDBCB4"
        },
        "Midnight Blue": {
            "main": "blue",
            "hex": "#1A4876"
        },
        "Mountain Meadow": {
            "main": "green",
            "hex": "#30BA8F"
        },
        "Navy Blue": {
            "main": "blue",
            "hex": "#1974D2"
        },
        "Neon Carrot": {
            "main": "orange",
            "hex": "#FFA343"
        },
        "Olive Green": {
            "main": "green",
            "hex": "#BAB86C"
        },
        "Orange": {
            "main": "orange",
            "hex": "#FF7538"
        },
        "Orchid": {
            "main": "red",
            "hex": "#E6A8D7"
        },
        "Outer Space": {
            "main": "grey",
            "hex": "#414A4C"
        },
        "Outrageous Orange": {
            "main": "orange",
            "hex": "#FF6E4A"
        },
        "Pacific Blue": {
            "main": "blue",
            "hex": "#1CA9C9"
        },
        "Peach": {
            "main": "orange",
            "hex": "#FFCFAB"
        },
        "Periwinkle": {
            "main": "blue",
            "hex": "#C5D0E6"
        },
        "Piggy Pink": {
            "main": "red",
            "hex": "#FDDDE6"
        },
        "Pine Green": {
            "main": "green",
            "hex": "#158078"
        },
        "Pink Flamingo": {
            "main": "red",
            "hex": "#FC74FD"
        },
        "Pink Sherbert": {
            "main": "red",
            "hex": "#F78FA7"
        },
        "Plum": {
            "main": "purple",
            "hex": "#8E4585"
        },
        "Purple Heart": {
            "main": "purple",
            "hex": "#7442C8"
        },
        "Purple Mountain's Majesty": {
            "main": "purple",
            "hex": "#9D81BA"
        },
        "Purple Pizzazz": {
            "main": "purple",
            "hex": "#FE4EDA"
        },
        "Radical Red": {
            "main": "red",
            "hex": "#FF496C"
        },
        "Raw Sienna": {
            "main": "brown",
            "hex": "#D68A59"
        },
        "Razzle Dazzle Rose": {
            "main": "red",
            "hex": "#FF48D0"
        },
        "Razzmatazz": {
            "main": "red",
            "hex": "#E3256B"
        },
        "Red": {
            "main": "red",
            "hex": "#EE204D"
        },
        "Red Orange": {
            "main": "red",
            "hex": "#FF5349"
        },
        "Red Violet": {
            "main": "red",
            "hex": "#C0448F"
        },
        "Robin's Egg Blue": {
            "main": "blue",
            "hex": "#1FCECB"
        },
        "Royal Purple": {
            "main": "purple",
            "hex": "#7851A9"
        },
        "Salmon": {
            "main": "red",
            "hex": "#FF9BAA"
        },
        "Scarlet": {
            "main": "red",
            "hex": "#FC2847"
        },
        "Screamin' Green": {
            "main": "green",
            "hex": "#76FF7A"
        },
        "Sea Green": {
            "main": "green",
            "hex": "#93DFB8"
        },
        "Sepia": {
            "main": "brown",
            "hex": "#A5694F"
        },
        "Shadow": {
            "main": "grey",
            "hex": "#8A795D"
        },
        "Shamrock": {
            "main": "green",
            "hex": "#45CEA2"
        },
        "Shocking Pink": {
            "main": "red",
            "hex": "#FB7EFD"
        },
        "Silver": {
            "main": "grey",
            "hex": "#CDC5C2"
        },
        "Sky Blue": {
            "main": "blue",
            "hex": "#80DAEB"
        },
        "Spring Green": {
            "main": "yellow",
            "hex": "#ECEABE"
        },
        "Sunglow": {
            "main": "yellow",
            "hex": "#FFCF48"
        },
        "Sunset Orange": {
            "main": "orange",
            "hex": "#FD5E53"
        },
        "Tan": {
            "main": "orange",
            "hex": "#FAA76C"
        },
        "Tickle Me Pink": {
            "main": "red",
            "hex": "#FC89AC"
        },
        "Timberwolf": {
            "main": "grey",
            "hex": "#DBD7D2"
        },
        "Tropical Rain Forest": {
            "main": "green",
            "hex": "#17806D"
        },
        "Tumbleweed": {
            "main": "brown",
            "hex": "#DEAA88"
        },
        "Turquoise Blue": {
            "main": "blue",
            "hex": "#77DDE7"
        },
        "Unmellow Yellow": {
            "main": "yellow",
            "hex": "#FFFF66"
        },
        "Violet": {
            "main": "purple",
            "hex": "#926EAE"
        },
        "Violet Red": {
            "main": "red",
            "hex": "#F75394"
        },
        "Vivid Tangerine": {
            "main": "red",
            "hex": "#FFA089"
        },
        "Vivid Violet": {
            "main": "purple",
            "hex": "#8F509D"
        },
        "White": {
            "main": "grey",
            "hex": "#FFFFFF"
        },
        "Wild Blue Yonder": {
            "main": "blue",
            "hex": "#A2ADD0"
        },
        "Wild Strawberry": {
            "main": "red",
            "hex": "#FF43A4"
        },
        "Wild Watermelon": {
            "main": "red",
            "hex": "#FC6C85"
        },
        "Wisteria": {
            "main": "purple",
            "hex": "#CDA4DE"
        },
        "Yellow": {
            "main": "yellow",
            "hex": "#FCE883"
        },
        "Yellow Green": {
            "main": "green",
            "hex": "#C5E384"
        },
        "Yellow Orange": {
            "main": "orange",
            "hex": "#FFAE42"
        }
    }
}

// assign root
app.use('/', express.static("public"));

// send data to page
app.get('/', (req, res) => {
    res.send("Hello, this is homepage");
})

// create filter for colors
app.get('/colors', (request, response) => {
    let filter = request.query.filter;
    if (filter) {
        colorsFound = {};
        console.log(filter);
        for (colorName in colors.colors) {
            let color = colors.colors[colorName];
            if (color.main == filter) {
                colorsFound[colorName] = color;
            }
        }
        response.json(colorsFound);
        console.log("here:", colorsFound);
    } else {
        response.json(colors.colors);
    }
})


/* for params(
    res.json({ error: "filter undefined" })
)*/

app.listen(9000, () => {
    console.log("app is listening at localhost:9000");
});