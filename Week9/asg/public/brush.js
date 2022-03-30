let stepSize = 6;
let angle;

// brush 1
let ellipseSize = 200;
let ellipseSizeMin = 50;

// brush 2
let lineModule;
let numX = [-50, -35, 0, 35, 50, 35, 0, -35];
let numY = [0, 35, 50, 35, 0, -35, -50, -35];

// brush 3
let letters = "It isn't true that my mattress is made of cotton candy. It was the first time he had ever seen someone cook dinner on an elephant. Homesickness became contagious in the young campers' cabin. Every manager should be able to recite at least ten nursery rhymes backward.";
let counter = 0;
let fontSize = 100;
let fontSizeMin = 25;

function brush1(data) {
    x = data.x2;
    y = data.y2;
    let d = dist(x, y, data.x, data.y)
    d = constrain(d, 60, 7000);
    stepSize = 6;
    if (d > stepSize) {
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
        x = x + Math.cos(angle) * stepSize;
        y = y + Math.sin(angle) * stepSize;
    }
}


function brush2(data) {
    // gets the angle between the mouse and the location of the brush so that next point is drawn in the right intended location
    x = data.x2;
    y = data.y2;
    let d = dist(x, y, data.x, data.y)
    d = constrain(d, 60, 7000);
    stepSize = 2;

    if (d > stepSize) {
        angle = Math.atan2(data.y - y, data.x - x);
        for (let i = 0; i < 8; i++) {
            numX[i] += random(0 - stepSize / 2, stepSize / 2);
            numY[i] += random(0 - stepSize / 2, stepSize / 2);
        }
        applyMatrix();
        translate(x, y);
        rotate(angle + random(-0.1, 0.1));
        stroke(data.c.r, data.c.g, data.c.b);
        strokeWeight(stepSize / 4);

        noFill();
        beginShape();
        curveVertex(numX[0], numY[0]); ///////////////
        curveVertex(numX[0], numY[0]); ///////////////
        curveVertex(numX[1], numY[1]); //mid
        curveVertex(numX[2], numY[2]); ///////////////
        curveVertex(numX[3], numY[3]); // mid
        curveVertex(numX[4], numY[4]); ///////////////
        curveVertex(numX[5], numY[5]); //mid
        curveVertex(numX[6], numY[6]); ///////////////
        curveVertex(numX[7], numY[7]); //mid
        curveVertex(numX[0], numY[0]); ///////////////
        curveVertex(numX[0], numY[0]); ///////////////


        endShape();
        resetMatrix();

        x = x + Math.cos((angle)) * stepSize;
        y = y + Math.sin((angle)) * stepSize;
    }

}


function brush3(data) {
    x = data.x2;
    y = data.y2;
    let d = dist(x, y, data.x, data.y)
    d = constrain(d, 60, 7000);
    stepSize = 4;

    if (d > stepSize) {
        angle = Math.atan2(data.y - y, data.x - x);
        fontSize = fontSizeMin * 60 / d;
        textSize(fontSize);
        textFont('Calibri');
        let newLetter = letters.charAt(counter);
        stepSize = textWidth(newLetter);
        fill(data.c.r, data.c.g, data.c.b);

        applyMatrix();
        translate(x, y);
        rotate(angle);
        text(newLetter, 0, 0);
        resetMatrix();

        counter++;

        if (counter > letters.length - 1) counter = 0;

        x = x + Math.cos(angle) * stepSize;
        y = y + Math.sin(angle) * stepSize;
    }
}


function brush4(data) {
    let blurX = [-stepSize, -stepSize, 0, stepSize, stepSize, stepSize, 0, -stepSize];
    let blurY = [0, stepSize, stepSize, stepSize, 0, -stepSize, -stepSize, -stepSize];
    x = data.x2;
    y = data.y2;
    let d = dist(x, y, data.x, data.y)
    d = constrain(d, 60, 7000);
    let diam = 2;
    stepSize = 8;

    if (d > stepSize) {
        angle = Math.atan2(data.y - y, data.x - x);
        let tempX = x;
        let tempY = y;

        applyMatrix();
        translate(x, y);
        rotate(angle);
        noStroke();
        fill(data.c.r, data.c.g, data.c.b, 20);

        //
        for (let i = 0; i < 1000; i++) {
            let dir = int(random(0, 7));
            rotate(random(5));
            tempX = blurX[dir] * random(0.4, 7);
            tempY = blurY[dir] * random(0.4, 7);
            circle(tempX, tempY, diam);
        }
        resetMatrix();
        x = data.x;
        y = data.y;
    }
}

function brush5(data) {
    let angle;
    x = data.x2;
    y = data.y2;
    let d = dist(x, y, data.x, data.y)
    d = constrain(d, 60, 7000);
    stepSize = 0.5;

    if (d > stepSize) {
        angle = Math.atan2(data.y - y, data.x - x);
        stroke(data.c.r, data.c.g, data.c.b);
        strokeWeight(1);
        noFill();

        applyMatrix();
        translate(data.x, data.y);
        rotate((angle + random(-0.2, 0.2)));
        rectMode(CENTER);
        rect(0, 0, 50, 50);
        resetMatrix();
    }
}