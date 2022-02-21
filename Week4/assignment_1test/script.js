let city, country;
let imgs = [];
let titles = ["name", "capital", "region", "currency", "iso2", "gdp", "population", "pop_density", "surface_area", "co2_emissions", "pop_growth", "internet_users", "refugees", "tourists", "urban_population", "unemployment", "urban_population_growth", "life_expectancy_female", "life_expectancy_male", "fertility", "threatened_species", "homicide_rate", "infant_mortality", "post_secondary_enrollment_female", "post_secondary_enrollment_male", "primary_school_enrollment_female", "primary_school_enrollment_male", "secondary_school_enrollment_female", "secondary_school_enrollment_male", "exports", "imports", "sex_ratio", "employment_agriculture", "employment_industry", "employment_services", "forested_area", "gdp_growth", "gdp_per_capita"];
let str = "blabla";
let tag;
let locLink, searchLink, datalink;
let lng, lat, sign;
let imagecounter = 0;
let done = false;

window.addEventListener("load", () => {
    window.scrollTo({ top: 0 });
    imagecounter = 0;
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

        lat = clat;
        if (clng < 0) {
            sign = "%2D";
            lng = clng * (-1);
        } else {
            sign = "%2B"
            lng = clng;
        }
        // tag = document.getElementById('tag');
        // tag.addEventListener('click', scrolltolem('content'));

    }
    map.on('click', onMapClick);
})




// functions will call ^^

function scrolltoelem(id) {
    locLink = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?location=" + lat + sign + lng;
    // change mouse shape to load
    document.body.style.cursor = "wait";
    document.getElementById("tag").style.cursor = "wait";
    fetch(locLink, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
                "x-rapidapi-key": "6c41fb0e8dmsha569b026441c479p15b86ajsnd0a8cea9e716"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.data.length != 0) {
                imgs = [];
                // fetch required data
                country = data.data[0].country;
                city = data.data[0].name;
                console.log(country);
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
    if (imagecounter == 0) {
        document.getElementById("images").appendChild(imgs[0]);
    } else {
        document.getElementById('flagimg').replaceWith(imgs[0]);
    }
    //last step
    scrollfunction(id);
    imagecounter++;
}

function scrollfunction(id) {
    let seconds = new Date().getTime();

    document.body.style.cursor = "default";
    document.getElementById("tag").style.cursor = "pointer";
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function printdetails(data) {
    // loop data.titles[i] and add to "info" id div
    // make into new Li tags then append child
}