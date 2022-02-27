let city, country;
let imgs = [];
let imglink;
let imagediv;
let imageslidercount = 0;
let imagecount = 0;
let titles = ["name", "capital", "region", "currency", "population", "iso2", "gdp", "pop_density", "surface_area", "co2_emissions", "pop_growth", "internet_users", "refugees", "tourists", "urban_population", "unemployment", "urban_population_growth", "life_expectancy_female", "life_expectancy_male", "fertility", "threatened_species", "homicide_rate", "infant_mortality", "post_secondary_enrollment_female", "post_secondary_enrollment_male", "primary_school_enrollment_female", "primary_school_enrollment_male", "secondary_school_enrollment_female", "secondary_school_enrollment_male", "exports", "imports", "sex_ratio", "employment_agriculture", "employment_industry", "employment_services", "forested_area", "gdp_growth", "gdp_per_capita"];
let details = [];
let arrows = [];
let arrowDiv;
let str = "blabla";
let tag;
let locLink, searchLink, datalink;
let lng, lat, sign;
let flagcounter = 0;
let done = false;

// start when window loads
window.addEventListener("load", () => {
    document.body.style.cursor = "default";
    document.getElementById('mapcontainer').scrollIntoView({ behavior: "smooth" });
    flagcounter = 0;
    let map = L.map('map').setView([30, 0], 2);
    // calling map
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/light-v9',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZmF0ZW1hbmFzc2FyIiwiYSI6ImNrenY2M29uYTAxa2gydXFpZXJjdWxzOGEifQ.2-ekuboFu2yYNrNvGy6QzQ'
    }).addTo(map);

    let marker = L.marker();
    let clng, clat;

    // show marker and popup
    function onMapClick(e) {
        clng = e.latlng.lng;
        clat = e.latlng.lat;
        marker
            .setLatLng(e.latlng)
            .bindPopup("<a id='tag' href=\"javascript:scrolltoelem('content')\">click for country details</a>")
            .openPopup()
            .addTo(map);

        lat = (clat);
        lng = (clng);

    }
    map.on('click', onMapClick);
    infobutton();

    // add scroll up function to title and go back to map button
    document.getElementById('scrollup').addEventListener('click', () => {
        document.getElementById('mapcontainer').scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById('title').addEventListener('click', () => {
        document.getElementById('mapcontainer').scrollIntoView({ behavior: "smooth" });
    });
})

// function to controle info button fuctionality and user interaction
function infobutton() {
    document.getElementById('info_icon').addEventListener('mouseover', () => {
        document.getElementById('infopopup').style.display = "flex";
    })
    document.getElementById('info_icon').addEventListener('mouseleave', () => {
            document.getElementById('infopopup').style.display = "none";
        })
        // these are so if user cursor goes over info and leaves the button info stays open
    document.getElementById('infopopup').addEventListener('mouseover', () => {
        document.getElementById('infopopup').style.display = "flex";
    })
    document.getElementById('infopopup').addEventListener('mouseleave', () => {
        document.getElementById('infopopup').style.display = "none";
    })
}

// this function controls the images so user can navigate between flag and area images
function imageslider() {
    arrows = document.getElementsByClassName('arrow');
    arrowDiv = document.getElementById('arrows');
    imagediv = document.getElementById('images');
    // show arrows when user is hovering over image
    imagediv.addEventListener('mouseover', () => {
        arrowDiv.style.transition = "10s ease";
        arrowDiv.style.display = "flex";
    });
    arrowDiv.addEventListener('mouseover', () => {
        arrowDiv.style.transition = "10s ease";
        arrowDiv.style.display = "flex";
    });
    // hides arrows when user leaves image
    imagediv.addEventListener('mouseleave', () => {
        arrowDiv.style.transition = "10s ease";
        arrowDiv.style.display = "none";
    });
    arrowDiv.addEventListener('mouseleave', () => {
        arrowDiv.style.transition = "10s ease";
        arrowDiv.style.display = "none";
    });
    // change image when user click on arrows
    arrows[0].addEventListener('click', () => {
        changeImage(-1);
    });
    arrows[1].addEventListener('click', () => {
        changeImage(1);
    });
}

// takes num to either go next or go back on images taken
function changeImage(num) {
    imgs[imageslidercount].style.display = "none";
    imgs[imageslidercount].style.transition = "2s ease";
    if (imageslidercount <= 0) {
        imageslidercount = imgs.length - 1;
    }
    // module to keep image count in requred range
    imageslidercount = (imageslidercount + num) % (imgs.length - 1);
    console.log(imgs.length);
    imgs[imageslidercount].style.transition = "2s ease";
    imgs[imageslidercount].style.display = "flex";

}

// this funcion is the main function, it controles all the fetches or calls other fetch functions
function scrolltoelem(id) {
    // add longitude and latitude taken from the map to find city and country
    locLink = "https://geocode.maps.co/reverse?lat=" + lat + "&lon=" + lng;
    // Change mouse shape to load
    document.body.style.cursor = "wait";
    document.getElementById("tag").style.cursor = "wait";
    // gets city and country names
    fetch(locLink, {
            "method": "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            imgs = [];
            city = data.address.state;
            country = data.address.country_code;
            // get country data
            printdata(country, id, city);

        })
        .catch(err => {
            //  restore cursor to default
            document.body.style.cursor = "default";
            document.getElementById("tag").style.cursor = "pointer";
            // error a pop up here when user presses an area with no city
            console.log("not a city");
            document.getElementById('infopopup2').style.opacity = "100%";
            document.getElementById('infopopup2').innerHTML = "This is not a city";
            document.getElementById('infopopup2').style.display = "flex";
            window.setTimeout(() => {
                document.getElementById('infopopup2').style.transition = "3s ease-out";
                document.getElementById('infopopup2').style.display = "none";
            }, 2000)
            console.error(err);
        });

}

function printdata(country, id, city) {
    // this one fetches the information about the country
    datalink = "https://api.api-ninjas.com/v1/country?name=";
    fetch(datalink + country, {
            "method": "GET",
            "headers": {
                'X-Api-Key': 'NPa7JmMWM73DEsQATsWcXg==pZ8jsMNGt6wpukSN'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            // display country details
            printdetails(city, data[0]);
            // get country flag and display it
            printflag(data[0].iso2, data[0].name, city, id);
        })
        .catch(err => {
            console.error(err);
        });
}

function printflag(countryid, country, city, id) {
    // this has country flags found using country codes
    imgs.push(document.createElement("img"));
    imgs[0].src = "https://countryflagsapi.com/png/" + countryid;
    imgs[0].alt = "country Flag";
    imgs[0].class = "flagimg";
    imgs[0].id = "flagimg";
    imgs[0].style.transition = "2s ease";
    if (flagcounter == 0) {
        // displays new flag
        document.getElementById("images").appendChild(imgs[0]);
    } else {
        // deletes previous flag if user is searching a second country
        document.getElementById("images").innerHTML = "";
        document.getElementById("images").appendChild(imgs[0]);

    }
    flagcounter++;
    // add extra city and country images to array
    addextraimages(city, country);
    // control image scroll functionality
    imageslider();

}

function addextraimages(city, country) {
    // uses bing search to find images
    let tempcountry = country.replace(/ /g, "%20");
    searchLink = "https://bing-image-search1.p.rapidapi.com/images/search?q=" + city + "%2C%20" + tempcountry + "&count=5";
    fetch(searchLink, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
                "x-rapidapi-key": "6c41fb0e8dmsha569b026441c479p15b86ajsnd0a8cea9e716"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // if images exist add to array
            if (data.value.length > 0) {
                for (let i = 1; i < 6; i++) {
                    imgs.push(document.createElement("img"));
                    imgs[i].src = data.value[i - 1].contentUrl;
                    imgs[i].alt = "Image unavailable";
                    imgs[i].class = "slides";
                    imgs[i].style.display = "none";
                    imgs[i].style.transition = "2s ease";
                    document.getElementById("images").appendChild(imgs[i]);
                    scrollfunction("content");
                }
            } else {
                // if images dont exist give error message
                scrollfunction("content");
                window.setTimeout(() => {
                    document.getElementById('infopopup2').style.opacity = "100%";
                    document.getElementById('infopopup2').innerHTML = "Sorry, no images were found";
                    document.getElementById('infopopup2').style.display = "flex";
                }, 3000);
                window.setTimeout(() => {
                    document.getElementById('infopopup2').style.transition = "3s ease-out";
                    document.getElementById('infopopup2').style.display = "none";
                }, 2000)
            }

        })
        .catch(err => {
            // if any other error occured
            scrollfunction("content");
            document.getElementById('infopopup2').style.opacity = "100%";
            document.getElementById('infopopup2').innerHTML = "Sorry, Images cannot be displayed";
            document.getElementById('infopopup2').style.display = "flex";
            window.setTimeout(() => {
                document.getElementById('infopopup2').style.display = "none";
            }, 2000)
            console.error(err);
        });

}

// contols scroll from map to info
function scrollfunction(id) {
    document.body.style.cursor = "default";
    document.getElementById("tag").style.cursor = "pointer";
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// prints the country info in info div
function printdetails(city, data) {
    document.getElementById('info').innerHTML = "";
    let item = document.createElement('p');
    item.innerHTML = "<b>Area</b>: " + city;
    document.getElementById('info').appendChild(item);
    for (let i = 0; i < titles.length; i++) {
        try {
            details.push(data[titles[i]]);
            let item = document.createElement('p');
            item.style.margin = '1vh';
            // adapt main data to make more understandable
            if (titles[i] == "name") {
                // Print country title instead of just "name"
                item.innerHTML = "<b>Country " + titles[i].charAt(0).toUpperCase() + titles[i].slice(1) + "</b>: " + data[titles[i]];
            } else if (titles[i] == "currency") {
                // format currency
                item.innerHTML = "<b>" + titles[i].charAt(0).toUpperCase() + titles[i].slice(1) + "</b>: " + data[titles[i]].name + " (" + data[titles[i]].code + ")";
            } else if (titles[i] == "population") {
                // make population in unit = 1person
                let num = data[titles[i]].toLocaleString('en-US') + ",000";
                item.innerHTML = "<b>" + titles[i].charAt(0).toUpperCase() + titles[i].slice(1) + "</b>: " + num;
            } else {
                item.innerHTML = "<b>" + titles[i].charAt(0).toUpperCase() + titles[i].slice(1) + "</b>: " + data[titles[i]];
            }
            document.getElementById('info').appendChild(item);
        } catch (error) {
            console.log(error);
        }
    }

}