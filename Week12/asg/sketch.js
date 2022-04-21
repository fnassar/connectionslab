let handpose;
let video;
let hands = [];
let loc = { x: 0, y: 0 };
let prevLoc = { x: 0, y: 0 };
let erase = false;
let colorPicker;

function setup() {
    const myCanvas = createCanvas(640, 480);
    myCanvas.parent("canvas_container");
    // createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.size(width, height);

    handpose = ml5.handpose(video, modelReady);
    colorPicker = createColorPicker('#ed225d');
    // colorPicker.className('none');
    background(255);
    // This sets up an event that fills the global variable "predictions"
    // with an array every time new hand poses are detected
    handpose.on("hand", results => {
        hands = results;
    });
    loadPixels();
    background(255);
    updatePixels();
    // Hide the video element, and just show the canvas
    video.hide();
    noLoop();
}

function modelReady() {
    console.log("Model ready!");
    colorPicker.position(100, window.innerHeight - 150);
    // add pop up here
}

function draw() {
    translate(width, 0); // move to far corner
    scale(-1.0, 1.0); // flip x-axis backwards
    image(video, 0, 0, width, height); //video on canvas, position, dimensions
    // We can call both functions to draw all keypoints and the skeletons
    drawKeypoints();
    image(video, 0, 0, width / 4, height / 4);
}

function stopLoop() {
    noLoop();
}

function loopagain() {
    loop();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
    loc = { x: 0, y: 0 };
    for (let i = 0; i < hands.length; i += 1) {
        const hand = hands[i];
        for (let j = 0; j < hand.landmarks.length; j += 1) {
            const keypoint = hand.landmarks[j];
            loc.x += keypoint[0];
            loc.y += keypoint[1];
        }
    }
    updatePixels();
    noFill();
    stroke(255);
    strokeWeight(1);
    rect(0, 0, width, height);
    if (erase) {
        fill(255);
        ellipse(loc.x / 21, loc.y / 21, 50, 50);
    } else {
        strokeWeight(2);
        stroke(colorPicker.color());
        if (prevLoc.x != 0 && prevLoc.y != 0 && loc.x != 0 && loc.y != 0) {
            line(loc.x / 21, loc.y / 21, prevLoc.x / 21, prevLoc.y / 21);
        }
    }
    prevLoc = loc;
    loadPixels();
}