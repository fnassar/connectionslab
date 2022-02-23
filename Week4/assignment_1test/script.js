let city, country;
let imgs = [];
let titles = ["name", "capital", "region", "currency", "population", "iso2", "gdp", "pop_density", "surface_area", "co2_emissions", "pop_growth", "internet_users", "refugees", "tourists", "urban_population", "unemployment", "urban_population_growth", "life_expectancy_female", "life_expectancy_male", "fertility", "threatened_species", "homicide_rate", "infant_mortality", "post_secondary_enrollment_female", "post_secondary_enrollment_male", "primary_school_enrollment_female", "primary_school_enrollment_male", "secondary_school_enrollment_female", "secondary_school_enrollment_male", "exports", "imports", "sex_ratio", "employment_agriculture", "employment_industry", "employment_services", "forested_area", "gdp_growth", "gdp_per_capita"];
let details = [];
let str = "blabla";
let tag;
let locLink, searchLink, datalink;
let lng, lat, sign;
let flagcounter = 0;
let done = false;

window.addEventListener("load", () => {
    window.scrollTo({ top: 0 });
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
        // call function to get city name
        // popup
        //     .setLatLng(e.latlng)
        //     .setContent("<a href='#content' id='tag'>click for </br> country  </br> details</a>")
        //     .openOn(map);

        marker
            .setLatLng(e.latlng)
            .bindPopup("<a id='tag' href=\"javascript:scrolltoelem('content')\">click for country details</a>")
            .openPopup()
            .addTo(map);

        lat = (clat);
        if (clng < 0) {
            sign = "%2D";
            lng = (clng);
        } else {
            sign = "%2B"
            lng = (clng);
        }
        // tag = document.getElementById('tag');
        // tag.addEventListener('click', scrolltolem('content'));

    }
    map.on('click', onMapClick);
    document.getElementById('scrollup').addEventListener('click', () => {
        document.getElementById('mapcontainer').scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById('title').addEventListener('click', () => {
        document.getElementById('mapcontainer').scrollIntoView({ behavior: "smooth" });
    });
})




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
            console.log(data.address);
            imgs = [];
            // fetch required data
            city = data.address.state;
            country = data.address.country_code;
            console.log(country, city);
            printdata(country, id, city);
            //done with fetches?

        })
        .catch(err => {
            document.body.style.cursor = "default";
            document.getElementById("tag").style.cursor = "pointer";
            // add a pop up here
            console.log("not a city");
            // console.error(err);
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
            console.log(data[0]);
            printdetails(city, data[0]);
            printflag(data[0].iso2, id);
        })
        .catch(err => {
            console.error(err);
        });
}

function printflag(countryname, id) {
    // "https://countryflagsapi.com"
    imgs.push(document.createElement("img"));
    imgs[0].src = "https://countryflagsapi.com/png/" + countryname;
    imgs[0].alt = "country Flag";
    imgs[0].class = "flagimg";
    imgs[0].id = "flagimg";
    if (flagcounter == 0) {
        document.getElementById("images").appendChild(imgs[0]);
    } else {
        document.getElementById('flagimg').replaceWith(imgs[0]);
    }
    //last step
    scrollfunction(id);
    flagcounter++;
}

function scrollfunction(id) {
    document.body.style.cursor = "default";
    document.getElementById("tag").style.cursor = "pointer";
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function printdetails(city, data) {
    // loop data.titles[i] and add to "info" id div
    // make into new Li tags then append child
    // debugger;
    console.log("here");
    let item = document.createElement('p');
    item.innerHTML = "<b>Area</b>: " + city;
    document.getElementById('info').appendChild(item);
    for (let i = 0; i < titles.length; i++) {
        try {
            // console.log(titles[i], data[titles[i]]);
            // det
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
    // let item_more = document.createElement('p');
    // console.log(document.getElementById('add'));
    // item_more.style.cursor = 'pointer';
    // item_more.style.textDecoration = 'underline';
    // item_more.addEventListener('click', showextradetails(data));

}