window.addEventListener("load", function() {
    console.log("page is loaded");

    fetch("./pallets.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
        })
})