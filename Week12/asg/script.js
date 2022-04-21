let canvasContainer;
let startDiv;
let startButton;
let endButton;
let eraser;
let picker;
let canvas;
let canvasTop;
let canvasLeft;
window.addEventListener('load', () => {
    canvasContainer = document.getElementById('canvas_container');
    startDiv = document.getElementById('startCanvas');
    startButton = document.getElementById('startButton');
    endButton = document.getElementById('endButton');
    eraser = document.getElementById('erase');
    picker = document.getElementsByTagName('input');
    canvas = document.getElementById('defaultCanvas0');

    stopLoop();
    picker[0].style.display = "none";
    picker[0].className = "picker";
    startButton.addEventListener('click', () => {
        loopagain();
        startDiv.style.display = "none";
        canvasContainer.style.display = "flex";
        canvasTop = canvas.offsetTop;
        canvasLeft = canvas.offsetLeft;
        picker[0].style.bottom = canvasTop;
        picker[0].style.left = canvasLeft;
        picker[0].style.display = "flex";

    })
    endButton.addEventListener('click', () => {
        stopLoop();
        startDiv.style.display = "block";
        canvasContainer.style.display = "none";
        picker[0].style.display = "none";
    })
    eraser.addEventListener('click', () => {
        erase = !erase;
    })

})