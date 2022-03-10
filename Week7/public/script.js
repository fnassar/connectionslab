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

    let createpostbutton = document.getElementById("create__button");
    createpostbutton.addEventListener("click", () => {
        let Pname = document.getElementById("name").value;
        let Ppost = document.getElementById("post").value;

        let data = {
            name: Pname,
            post: Ppost
        }

        let msgObjectJSON = JSON.stringify(data);
        console.log(data);
    })

})