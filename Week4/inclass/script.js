fetch("http://api.open-notify.org/astros.json", )
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        // 
    })
    .catch(err => {
        console.error(err);
    });