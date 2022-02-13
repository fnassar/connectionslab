//this has the contry and long/lat locations
fetch("https://geodatasource-geodatasource-location-search-web-service-v1.p.rapidapi.com/city?key=QR1ZYIDHZJPRHLQOXOJGDR6LZTSEVEZW&lat=10&lng=30", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "geodatasource-geodatasource-location-search-web-service-v1.p.rapidapi.com",
            "x-rapidapi-key": "6c41fb0e8dmsha569b026441c479p15b86ajsnd0a8cea9e716"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });
//this is an image search engine
let link;
let city = "cairo",
    country = "egypt";
link = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=city%3A%20" + city + "%20" + country + "&pageNumber=1&pageSize=4&autoCorrect=true"
fetch(link, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
            "x-rapidapi-key": "6c41fb0e8dmsha569b026441c479p15b86ajsnd0a8cea9e716"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });

// P5 Code here



// Step 1: find API (one or two)
// longitude/lattitude is 90| and 360_ (found)
// find city image api (found)
// Step 2: start making Wire frame ()