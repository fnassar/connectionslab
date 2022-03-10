window.addEventListener('load', () => {
    // hide on start
    let createpostdiv = document.getElementById("create__container");
    createpostdiv.style.display = "none";


    let newPost = document.getElementById("new__button");

    newPost.addEventListener("click", () => {
        console.log("clicked");
        if (createpostdiv.style.display == "flex") {
            createpostdiv.style.display = "none";
        } else {
            createpostdiv.style.display = "flex";

        }
    })

})