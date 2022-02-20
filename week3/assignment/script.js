//this has the contry and long/lat locations
let locLink, searchLink;
let lng = 46.8,
    lat = 18.8;
let city, country;
let imgs = [];
locLink = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?location=" + lat + "%2B" + lng;
// " + lat + "&lng=" + lng;

window.addEventListener('load', () => {
    fetch(locLink, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
                "x-rapidapi-key": "6c41fb0e8dmsha569b026441c479p15b86ajsnd0a8cea9e716"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            country = data.data[0].country.replace(/ /g, "%20");
            city = data.data[0].name.replace(/ /g, "%20");
            searchLink = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=" + city + "%20Landmarks&pageNumber=1&pageSize=5&autoCorrect=true"
                // console.log(searchLink);
            fetch(searchLink, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
                        "x-rapidapi-key": "6c41fb0e8dmsha569b026441c479p15b86ajsnd0a8cea9e716"
                    }
                })
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data);
                    // console.log(data.value[0].url);
                    // console.log(data.value[1].url);
                    // console.log(data.value[2].url);
                    // console.log(data.value[3].url);
                    // console.log(data.value[4].url);

                    imgs.push(document.createElement("img"));
                    imgs[0].src = data.value[1].url;
                    imgs[0].alt = "image unavailable."
                    console.log(imgs[0]);
                    imgs[0].style.maxHeight = '100%';
                    imgs[0].style.maxWidth = '100%';
                    document.getElementById("image").appendChild(imgs[0]);
                    imgs.push(document.createElement("img"));
                    imgs[1].src = data.value[2].url;
                    imgs[1].alt = "image unavailable."
                    console.log(imgs[1]);
                    imgs[1].style.maxHeight = '100%';
                    imgs[1].style.maxWidth = '100%';
                    // imgs[1].style.display = 'none';
                    document.getElementById("image").appendChild(imgs[1]);
                    imgs.push(document.createElement("img"));
                    imgs[2].src = data.value[3].url;
                    imgs[2].alt = "image unavailable."
                    console.log(imgs[2]);
                    imgs[2].style.maxHeight = '100%';
                    imgs[2].style.maxWidth = '100%';
                    // imgs[2].style.display = 'none';
                    document.getElementById("image").appendChild(imgs[2]);
                    imgs.push(document.createElement("img"));
                    imgs[3].src = data.value[4].url;
                    imgs[3].alt = "image unavailable."
                    console.log(imgs[3]);
                    imgs[3].style.maxHeight = '100%';
                    imgs[3].style.maxWidth = '100%';
                    // imgs[3].style.display = 'none';
                    document.getElementById("image").appendChild(imgs[3]);


                })
                .catch(err => {
                    console.error(err);
                });

            // 
        })
        .catch(err => {
            console.error(err);
        });
})

// let worldmap = document.getElementById("worldmap");

// let canvasWidth = worldmap.cientWidth;
// let canvasHeight = worldmap.clientHeight;
// console.log("canvasWidth: ", canvasWidth, " canvasHeight: ", canvasHeight)

// function setup() {
//     //Create the canvas and save it to a variable;
//     const myCanvas = createCanvas(canvasWidth, canvasHeight);
//     //Set the parent of the canvas to an exisitng html element's id value 
//     myCanvas.parent("worldmap");
//     background(220, 40, 50);
// }

// function draw() {

// }

// function mousePressed() {
//     ellipse(mouseX, mouseY, 30, 30);
// }



// Step 1: find API (one or two)
// longitude/lattitude is 90| and 360_ (found)
// find city image api (found)
// Step 2: start making Wire frame ()