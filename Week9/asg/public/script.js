let socket = io();

let width = window.innerWidth * 0.6;
let height = window.innerHeight * 0.8;

let colorr;

let x = 0;
let y = 0;

let brush = 1;
let innerBrush;




window.addEventListener('load', () => {
    socket.on('connect', () => {
        console.log("client connected via sockets");
    })
    let brushes = document.getElementsByClassName('content_brushes');
    for (let i = 0; i < brushes.length; i++) {
        brushes[i].addEventListener('click', () => {
            brush = i + 1;
        })
    }
    let changeCol = document.getElementById('changeCol');
    changeCol.addEventListener('click', () => {
        colorr = { r: (Math.random() * 255), g: (Math.random() * 255), b: (Math.random() * 255) };
        console.log('bla');
    })

})

// P5 Code
function setup() {
    //Set the parent of the canvas to an exisitng html element's id value 
    const myCanvas = createCanvas(width, height);
    myCanvas.parent("containter_canvas");

    background(220);
    socket.on('mouseDataFromServer', (data) => {
        innerBrush = brush;
        switch (data.b) {
            case 2:
                brush2(data);
                break;
            case 3:
                brush3(data);
                break;
            case 4:
                brush4(data);
                break;
            case 5:
                brush5(data);
                break;
            default:
                brush1(data);
        }
    })
    colorr = { r: (Math.random() * 255), g: (Math.random() * 255), b: (Math.random() * 255) };
    socket.on('deleteClient', (data) => {
        changeUserCount(data);
        // console.log("deleted", data);
    })
    socket.on('addclient', (data) => {
        changeUserCount(data);
        // console.log("added", data);
    })
}

function changeUserCount(data) {
    let userss = document.getElementById('content_users');
    userss.innerHTML = (data + ' Users');
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
    let passedData = { x: round(mouseX), y: round(mouseY), c: colorr, x2: x, y2: y, b: innerBrush };

    socket.emit('mousePosData', passedData); // GOLD !!IMPORTANT
}



// next steps:
/*
    - create different brushes
    - make caseof in socket.on('mouseDataFromServer') and call different functions for different brushes
    - make list of users and display whole list on load
    - delete/add users as they come in and go
    - add a change color(random) button in last div(people one flex-self end)

*/