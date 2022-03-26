let socket = io();

let width = 400; //window.innerWidth * 0.8;
let height = 400; //window.innerHeight * 0.8;

let colorr;

window.addEventListener('load', () => {
    socket.on('connect', () => {
        console.log("client connected via sockets");

    })
})

// P5 Code
function setup() {
    createCanvas(width, height);
    background(220);
    socket.on('mouseDataFromServer', (data) => {
        // console.log(data);
        drawEllipseWithData(data);
    })
    colorr = { r: (Math.random() * 255), g: (Math.random() * 255), b: (Math.random() * 255) };
}

function draw() {
    // 
}

// emit mouse position when mouse moves
function mouseDragged() {
    let mousePos = { x: round(mouseX), y: round(mouseY), c: colorr };
    // ellipse(mousePos.x, mousePos.y, 10, 10); // send to server then display!!
    socket.emit('mousePosData', mousePos); // GOLD !!IMPORTANT
}

function drawEllipseWithData(data) {
    fill(data.c.r, data.c.g, data.c.b);
    ellipse(data.x, data.y, 10, 10);
}