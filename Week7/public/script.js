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

    fetch('/message')
        .then(res => res.json())
        .then(data => {
            console.log(data.dataToSend.data);
            // post data here after posting it to db
            // #NORMAL HTML STUFF
            // just append element stuff and reload
            let containter = document.getElementById('posts');
            containter.innerHTML = "";
            for (let i = 0; i < data.dataToSend.data.length; i++) {
                let newPost = document.createElement('div');
                newPost.className = 'post';
                let name = document.createElement('h3');
                name.innerHTML = data.dataToSend.data[i].name;
                let date = document.createElement('h5');
                date.innerHTML = data.dataToSend.data[i].createdAt;
                let details = document.createElement('p');
                details.innerHTML = data.dataToSend.data[i].post;
                newPost.appendChild(name);
                newPost.appendChild(date);
                newPost.appendChild(details);
                containter.appendChild(newPost);
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
                console.log(data.dataToSend.data);
                // post data here after posting it to db
                // #NORMAL HTML STUFF
                // just append element stuff and reload
                let i = data.dataToSend.data.length - 1;
                let containter = document.getElementById('posts');
                let newPost = document.createElement('div');
                newPost.class = 'post';
                let name = document.createElement('h3');
                name.innerHTML = data.dataToSend.data[i].name;
                let date = document.createElement('h5');
                date.innerHTML = data.dataToSend.data[i].createdAt;
                let details = document.createElement('p ');
                details.innerHTML = data.dataToSend.data[i].post;
                newPost.appendChild(name);
                newPost.appendChild(date);
                newPost.appendChild(details);
                containter.appendChild(newPost);
            })
    })


})