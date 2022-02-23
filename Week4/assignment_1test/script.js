let city, country;
let imgs = [];
let titles = ["name", "capital", "region", "currency", "population"];
let titles2 = ["iso2", "gdp", "pop_density", "surface_area", "co2_emissions", "pop_growth", "internet_users", "refugees", "tourists", "urban_population", "unemployment", "urban_population_growth", "life_expectancy_female", "life_expectancy_male", "fertility", "threatened_species", "homicide_rate", "infant_mortality", "post_secondary_enrollment_female", "post_secondary_enrollment_male", "primary_school_enrollment_female", "primary_school_enrollment_male", "secondary_school_enrollment_female", "secondary_school_enrollment_male", "exports", "imports", "sex_ratio", "employment_agriculture", "employment_industry", "employment_services", "forested_area", "gdp_growth", "gdp_per_capita"];
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
            .bindPopup("<a id='tag' href=\"javascript:scrolltoelem('content')\">click for </br> country  </br> details</a>")
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
})




// functions will call ^^

function scrolltoelem(id) {
    // locLink = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?location=" + lat + sign + lng;
    locLink = " https://geocode.maps.co/reverse?lat=" + lat + "&lon=" + sign + lng + "";
    // change mouse shape to load
    document.body.style.cursor = "wait";
    document.getElementById("tag").style.cursor = "wait";
    fetch(locLink, {
            "method": "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.address);
            if (data.address.length != 0) {
                imgs = [];
                // fetch required data
                city = data.address.state;
                country = data.address.country_code;
                console.log(country, city, id);
                printdata(country, id);
                //done with fetches?
            } else {
                document.body.style.cursor = "default";
                document.getElementById("tag").style.cursor = "pointer";
                console.log("not a city");
                // add poppup here, say not a city
            }
        })
        .catch(err => {
            document.body.style.cursor = "default";
            document.getElementById("tag").style.cursor = "pointer";
            console.error(err);
        });

}

function printdata(country, id) {
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
            printdetails(data[0]);
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

function printdetails(data) {
    // loop data.titles[i] and add to "info" id div
    // make into new Li tags then append child
    // debugger;
    details = [titles.length];
    let infodiv = document.getElementById('info');
    infodiv.innerHTML = "";
    for (let i = 0; i < titles.length; i++) {
        try {
            // console.log(titles[i], data[titles[i]]);
            // det
            details.push(data[titles[i]]);

            let item = document.createElement('p');
            item.style.margin = '1vh';
            if (titles[i] == "currency") {
                item.innerHTML = "<b>" + titles[i].charAt(0).toUpperCase() + titles[i].slice(1) + "</b>: " + data[titles[i]].name + " (" + data[titles[i]].code + ")";
            } else if (titles[i] == "population") {
                let num = data[titles[i]].toLocaleString('en-US');
                item.innerHTML = "<b>" + titles[i].charAt(0).toUpperCase() + titles[i].slice(1) + "</b>: " + num;
            } else {
                item.innerHTML = "<b>" + titles[i].charAt(0).toUpperCase() + titles[i].slice(1) + "</b>: " + data[titles[i]];
            }
            infodiv.appendChild(item);
        } catch (error) {
            console.log(error);
        }
    }
    let item_more = document.createElement('p');
    item_more.id = "add";
    item_more.style.cursor = 'pointer';
    item_more.style.textDecoration = 'underline';
    item_more.innerHTML = 'click for extra details about this country';
    document.getElementById('info').appendChild(item_more);
    item_more.addEventListener('click', extradetails);

}


function extradetails() {

}


document.getElementById('scrollup').addEventListener('click', scrolltoelem('mapcontainer'));