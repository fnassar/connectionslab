let socket = io();

let width = window.innerWidth * 0.6;
let height = window.innerHeight * 0.8;

let colorr;

let x = 0;
let y = 0;

let brush;


window.addEventListener('load', () => {
    socket.on('connect', () => {
        console.log("client connected via sockets");
    })
    let brushes = document.getElementsByClassName('content_brushes');
    for (let i = 0; i < brushes.length; i++) {}
})

// P5 Code
function setup() {
    //Set the parent of the canvas to an exisitng html element's id value 
    const myCanvas = createCanvas(width, height);
    myCanvas.parent("containter_canvas");

    background(220);
    socket.on('mouseDataFromServer', (data) => {
        // console.log(data);
        drawWithData(data);
        // x = data.x;
        // y = data.y;
    })
    colorr = { r: (Math.random() * 255), g: (Math.random() * 255), b: (Math.random() * 255) };
    socket.on('deleteClient', (data) => {
        console.log("deleted", data);
    })
    socket.on('addclient', (data) => {
        console.log("added", data);
    })
}

function draw() {
    // 
}

function mousePressed() {
    x = mouseX;
    y = mouseY;
}
// emit mouse position when mouse moves
function mouseDragged() {
    let passedData = { x: round(mouseX), y: round(mouseY), c: colorr, x2: x, y2: y, b: brush };

    socket.emit('mousePosData', passedData); // GOLD !!IMPORTANT
}



function drawWithData(data) {
    let angle;
    x = data.x2;
    y = data.y2;
    // if (mouseIsPressed) {
    let d = dist(x, y, data.x, data.y)
    d = constrain(d, 60, 7000);

    if (d > stepSize) {
        // console.log('bla');
        // gets the angle between the mouse and the location of the brush so that next point is drawn in the right intended location
        angle = Math.atan2(data.y - y, data.x - x);
        ellipseSize = ellipseSizeMin * 60 / d;
        fill(data.c.r, data.c.g, data.c.b);
        applyMatrix();
        translate(x, y);
        rotate(angle);
        noStroke();
        ellipse(0, 0, ellipseSize, ellipseSize);
        resetMatrix();
        // console.log("1:", x, y, data.x, data.y);
        x = x + Math.cos(angle) * stepSize;
        y = y + Math.sin(angle) * stepSize;
        // console.log("2:", x, y, data.x, data.y);
    }
    // }
}