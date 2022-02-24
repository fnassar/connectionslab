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

window.addEventListener("load", () => {
    document.body.style.cursor = "default";
    document.getElementById('mapcontainer').scrollIntoView({ behavior: "smooth" });
    flagcounter = 0;
    let map = L.map('map').setView([30, 0], 2);

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
    document.getElementById('scrollup').addEventListener('click', () => {
        document.getElementById('mapcontainer').scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById('title').addEventListener('click', () => {
        document.getElementById('mapcontainer').scrollIntoView({ behavior: "smooth" });
    });
})

function infobutton() {
    document.getElementById('info_icon').addEventListener('mouseover', () => {
        console.log("hi");
        document.getElementById('infopopup').style.display = "flex";
    })
    document.getElementById('info_icon').addEventListener('mouseleave', () => {
        console.log("hi");
        document.getElementById('infopopup').style.display = "none";
    })
    document.getElementById('infopopup').addEventListener('mouseover', () => {
        console.log("hi");
        document.getElementById('infopopup').style.display = "flex";
    })
    document.getElementById('infopopup').addEventListener('mouseleave', () => {
        console.log("hi");
        document.getElementById('infopopup').style.display = "none";
    })
}

function imageslider() {
    arrows = document.getElementsByClassName('arrow');
    arrowDiv = document.getElementById('arrows');
    imagediv = document.getElementById('images');
    imagediv.addEventListener('mouseover', () => {
        arrowDiv.style.transition = "10s ease";
        arrowDiv.style.display = "flex";
    });
    arrowDiv.addEventListener('mouseover', () => {
        arrowDiv.style.transition = "10s ease";
        arrowDiv.style.display = "flex";
    });
    imagediv.addEventListener('mouseleave', () => {
        arrowDiv.style.transition = "10s ease";
        arrowDiv.style.display = "none";
    });
    arrowDiv.addEventListener('mouseleave', () => {
        arrowDiv.style.transition = "10s ease";
        arrowDiv.style.display = "none";
    });
    arrows[0].addEventListener('click', () => {
        changeImage(-1);
    });
    arrows[1].addEventListener('click', () => {
        changeImage(1);
    });
}


function changeImage(num) {
    imgs[imageslidercount].style.display = "none";
    imgs[imageslidercount].style.transition = "2s ease";
    imageslidercount = (imageslidercount + num) % (imgs.length);
    if (imageslidercount < 0) {
        imageslidercount = imgs.length - 1;
    }
    imgs[imageslidercount].style.transition = "2s ease";
    imgs[imageslidercount].style.display = "flex";

}

// functions will call ^^

function scrolltoelem(id) {
    // locLink = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?location=" + lat + sign + lng;
    locLink = "https://geocode.maps.co/reverse?lat=" + lat + "&lon=" + lng;
    // change mouse shape to load
    document.body.style.cursor = "wait";
    document.getElementById("tag").style.cursor = "wait";
    fetch(locLink, {
            "method": "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            imgs = [];
            // fetch required data
            city = data.address.state;
            country = data.address.country_code;
            printdata(country, id, city);
            //done with fetches?

        })
        .catch(err => {
            document.body.style.cursor = "default";
            document.getElementById("tag").style.cursor = "pointer";
            // add a pop up here
            console.log("not a city");
            document.getElementById('infopopup2').style.opacity = "100%";
            document.getElementById('infopopup2').style.display = "flex";
            window.setTimeout(() => {
                console.log("hi")
                document.getElementById('infopopup2').style.transition = "3s ease-out";
                document.getElementById('infopopup2').style.display = "none";
            }, 2000)
            console.error(err);
        });

}

function printdata(country, id, city) {
    // let country = countryname.replace(/%20/g, " ");
    datalink = "https://api.api-ninjas.com/v1/country?name=";
    // https://api.api-ninjas.com/v1/country?name=United States

    fetch(datalink + country, {
            "method": "GET",
            "headers": {
                'X-Api-Key': 'NPa7JmMWM73DEsQATsWcXg==pZ8jsMNGt6wpukSN'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data[0]);
            printdetails(city, data[0]);
            printflag(data[0].iso2, data[0].name, city, id);
        })
        .catch(err => {
            console.error(err);
        });
}

function printflag(countryid, country, city, id) {
    // "https://countryflagsapi.com"
    imgs.push(document.createElement("img"));
    imgs[0].src = "https://countryflagsapi.com/png/" + countryid;
    imgs[0].alt = "country Flag";
    imgs[0].class = "flagimg";
    imgs[0].id = "flagimg";
    imgs[0].style.transition = "2s ease";
    if (flagcounter == 0) {

        document.getElementById("images").appendChild(imgs[0]);
    } else {
        document.getElementById("images").innerHTML = "";
        document.getElementById("images").appendChild(imgs[0]);

    }
    //last step
    flagcounter++;
    addextraimages(city, country);
    imageslider();



    scrollfunction(id);
}

function addextraimages(city, country) {
    searchLink = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=" + country + city + "&pageNumber=1&pageSize=5&autoCorrect=true"
    fetch(searchLink, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
                "x-rapidapi-key": "6c41fb0e8dmsha569b026441c479p15b86ajsnd0a8cea9e716"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.value.length > 0) {
                for (let i = 1; i < 6; i++) {
                    imgs.push(document.createElement("img"));
                    imgs[i].src = data.value[i - 1].url;
                    imgs[i].alt = "Image unavailable";
                    imgs[i].class = "slides";
                    imgs[i].style.display = "none";
                    imgs[i].style.transition = "2s ease";
                    document.getElementById("images").appendChild(imgs[i]);
                }
            }
        })
        .catch(err => {
            console.error(err);
        });

}

function scrollfunction(id) {
    document.body.style.cursor = "default";
    document.getElementById("tag").style.cursor = "pointer";
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function printdetails(city, data) {
    // loop data.titles[i] and add to "info" id div
    // make into new Li tags then append child
    document.getElementById('info').innerHTML = "";
    let item = document.createElement('p');
    item.innerHTML = "<b>Area</b>: " + city;
    document.getElementById('info').appendChild(item);
    for (let i = 0; i < titles.length; i++) {
        try {
            details.push(data[titles[i]]);
            let item = document.createElement('p');
            item.style.margin = '1vh';
            if (titles[i] == "name") {
                item.innerHTML = "<b>Country " + titles[i].charAt(0).toUpperCase() + titles[i].slice(1) + "</b>: " + data[titles[i]];
            } else if (titles[i] == "currency") {
                item.innerHTML = "<b>" + titles[i].charAt(0).toUpperCase() + titles[i].slice(1) + "</b>: " + data[titles[i]].name + " (" + data[titles[i]].code + ")";
            } else if (titles[i] == "population") {
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