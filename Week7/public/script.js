let createpostdiv = document.getElementById("create__container");
createpostdiv.style.display = "none";

window.addEventListener('load', () => {
    // hide on start


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
        console.log(msgObjectJSON);
        fetch('/message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: msgObjectJSON
            })
            .then(res => res.json())
            .then(data => { console.log(data) })
    })


})