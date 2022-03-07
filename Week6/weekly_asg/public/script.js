let colorselect;
let circles = [];
let collink = "";
let colors;
let circlesappend;
window.addEventListener('load', () => {
    circlesappend = document.getElementById('circles');
    colorselect = document.getElementById('colors');
    filter();
    getobject();


})

function getobject() {
    // console
    fetch("/colors" + collink)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);

            colors = data;
            addOptions();
            dropdownColors();
        })
}

function addOptions() {
    colorselect.innerHTML = "";
    for (color in colors) {
        let item = document.createElement('option');
        item.name = color;
        item.value = color;
        item.id = "value";
        item.innerHTML = color;
        colorselect.appendChild(item);
    }
}

function eventHandler(value) {

    let val = value.target.value;
    if (circles.length > 4) {

        circles = [];
        circlesappend.innerHTML = "";
    }
    let c = circles.length;
    circles.push(document.createElement('div'));
    circles[c].style.backgroundColor = colors[val].hex;
    circles[c].style.borderRadius = '50%';
    circles[c].style.width = "10vw";
    circles[c].style.height = "10vw";
    circlesappend.appendChild(circles[c]);

}

function dropdownColors() {
    colorselect.addEventListener('change', eventHandler);
}

function filter() {
    let filterButton = document.getElementById('button');
    let dropdownmenu = document.getElementById('dropdown');

    filterButton.addEventListener('mouseover', () => {
        dropdownmenu.style.display = "flex";
    })
    filterButton.addEventListener('mouseleave', () => {
        dropdownmenu.style.display = "none";
    })
}

function changeCol(col) {
    colorselect.removeEventListener('change', eventHandler)
    collink = col;
    getobject();

}