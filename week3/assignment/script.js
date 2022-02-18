//this has the contry and long/lat locations
let locLink, searchLink;
let lng = 46.8,
    lat = 18.8;
let city, country;
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
            searchLink = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=" + city + "%20" + country + "&pageNumber=1&pageSize=5&autoCorrect=true"
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

                    let img = document.createElement("img");
                    img.src = data.value[1].url;
                    img.alt = "image unavailable."
                        // console.log(img);
                    img.style.maxHeight = '100%';
                    img.style.maxWidth = '100%';
                    document.getElementById("image").appendChild(img);
                    let img2 = document.createElement("img");
                    img2.src = data.value[2].url;
                    img2.alt = "image unavailable."
                        // console.log(img2);
                    img2.style.maxHeight = '100%';
                    img2.style.maxWidth = '100%';
                    img2.style.display = 'none';
                    document.getElementById("image").appendChild(img2);
                    let img3 = document.createElement("img");
                    img3.src = data.value[3].url;
                    img3.alt = "image unavailable."
                        // console.log(img3);
                    img3.style.maxHeight = '100%';
                    img3.style.maxWidth = '100%';
                    img3.style.display = 'none';
                    document.getElementById("image").appendChild(img3);
                    let img4 = document.createElement("img");
                    img4.src = data.value[4].url;
                    img4.alt = "image unavailable."
                        // console.log(img4);
                    img4.style.maxHeight = '100%';
                    img4.style.maxWidth = '100%';
                    img4.style.display = 'none';
                    document.getElementById("image").appendChild(img4);


                })
                .catch(err => {
                    // console.error(err);
                });

            // 
        })
        .catch(err => {
            // console.error(err);
        });
})

let worldmap = document.getElementById("worldmap");

let canvasWidth = worldmap.cientWidth;
let canvasHeight = worldmap.clientHeight;
console.log("canvasWidth: ", canvasWidth, " canvasHeight: ", canvasHeight)

function setup() {
    //Create the canvas and save it to a variable;
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    //Set the parent of the canvas to an exisitng html element's id value 
    myCanvas.parent("worldmap");
    background(220, 40, 50);
}

function draw() {

}

function mousePressed() {
    ellipse(mouseX, mouseY, 30, 30);
}



// Step 1: find API (one or two)
// longitude/lattitude is 90| and 360_ (found)
// find city image api (found)
// Step 2: start making Wire frame ()