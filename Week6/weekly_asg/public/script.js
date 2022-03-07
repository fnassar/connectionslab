let colors;
let colorselect;

window.addEventListener('load', () => {
    fetch("/colors")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            colors = data.colors;
            addOptions();
            dropdown();
        })

})

function addOptions() {
    colorselect = document.getElementById('colors');

    for (color in colors) {
        let item = document.createElement('option');
        item.name = color;
        item.value = color;
        item.innerHTML = "<li>" + color + "</li>";
        colorselect.appendChild(item);
    }
}


function dropdown() {
    colorselect.addEventListener('change', (value) => {
        console.log(value.target.value);
    })
}



/*
    
*/