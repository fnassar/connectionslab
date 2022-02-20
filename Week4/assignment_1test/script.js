window.addEventListener("load", () => {
    let map = L.map('map').setView([30, 0], 2);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/light-v9',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZmF0ZW1hbmFzc2FyIiwiYSI6ImNrenY2M29uYTAxa2gydXFpZXJjdWxzOGEifQ.2-ekuboFu2yYNrNvGy6QzQ'
    }).addTo(map);

    let popup = L.popup();
    var marker = L.marker();
    let lng, lat;
    let str = "blabla";

    function onMapClick(e) {
        lng = e.latlng.lng;
        lat = e.latlng.lat;
        console.log(lat, lng);
        // call function to get city name
        // popup
        //     .setLatLng(e.latlng)
        //     .setContent(" ")
        //     .openOn(map);
        marker
            .setLatLng(e.latlng)
            .bindPopup("<b>Hello world!</b><br>I am a popup.")
            .addTo(map);
        // marker
        //     .bindPopup("<b>Hello world!</b><br>I am a popup.")
        //     .openPopup();

    }
    map.on('click', onMapClick);
})