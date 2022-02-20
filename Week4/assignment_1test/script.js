let city, country;
let imgs = [];
let str = "blabla";
let tag;
let locLink, searchLink;
let lng, lat, sign;
let imagecounter = 0;

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
        console.log(clat, clng);
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
        // console.log("bla", lat, lng);
        // tag = document.getElementById('tag');
        // console.log(tag);
        // tag.addEventListener('click', scrolltolem('content'));

    }
    map.on('click', onMapClick);
})




// functions will call ^^

function scrolltoelem(id) {
    locLink = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?location=" + lat + sign + lng;
    console.log(locLink);
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
            console.log(data);
            if (data.data.length != 0) {
                imgs = [];
                // fetch required data
                country = data.data[0].country.replace(/ /g, "%20");
                city = data.data[0].name.replace(/ /g, "%20");
                console.log(country, city);

                getflag(country);

                //done with fetches?
                document.body.style.cursor = "default";
                document.getElementById("tag").style.cursor = "pointer";
                document.getElementById(id).scrollIntoView({ behavior: "smooth" });
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

function getflag(countryname) {
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
    imagecounter++;
    console.log("done", "https://countryflagsapi.com/png/" + countryname);


}

function getdata(countryname) {

}