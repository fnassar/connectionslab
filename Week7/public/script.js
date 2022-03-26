window.addEventListener('load', () => {
    // hide on start
    let createpostdiv = document.getElementById("create__container");
    createpostdiv.style.display = "none";

    let newPost = document.getElementById("new__button");

    newPost.addEventListener("click", () => {
        if (createpostdiv.style.display == "flex") {
            createpostdiv.style.display = "none";
        } else {
            let Pname = document.getElementById("name").value = '';
            let Ppost = document.getElementById("post").value = '';
            createpostdiv.style.display = "flex";
        }
    })

    let createpostbutton = document.getElementById("create__button");
    createpostbutton.addEventListener("click", () => {
        let Pname = document.getElementById("name").value;
        let Ppost = document.getElementById("post").value;
        createpostdiv.style.display = "none";

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
            .then(data => {
                console.log(data);
            })
        fetch('/message')
            .then(res => res.json())
            .then(data => {
                console.log(data.dataToSend);
                // post data here after posting it to db
                // #NORMAL HTML STUFF
                // just append element stuff and reload
            })
    })


})