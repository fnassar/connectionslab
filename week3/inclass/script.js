window.addEventListener("load", () => {
    console.log("page is loaded");

    fetch("./pallets.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.palettes[0][0]);
            let main = document.getElementById('main');
            let title = document.createElement('h2');
            title.innerHTML = data.description;
            main.appendChild(title);

            main.style.background = "linear-gradient(" + data.palettes[0][1] + "," + data.palettes[0][2] + ")";

            for (let i = 0; i < data.palettes.lenght(); i++) {
                let listitem = document.createElement('li');
                let list = document.getElementById('list');
                let colorGradientlist = data.palettes[i];
                for (let j = 0; j < data.palettes.lenght; j++) {

                }

                listitem.style.background = "linear-gradient(" + data.palettes[0][1] + "," + data.palettes[0][2] + ")"
            }



        })

})