let stepSize = 4;
let angle;

// brush 1
let ellipseSize = 200;
let ellipseSizeMin = 50;

// brush 2
let lineModule;
let numX = [-100, -70, 0, 70, 100, 70, 0, -70];
let numY = [0, 70, 100, 70, 0, -70, -100, -70];


function brush1(data) {
    x = data.x2;
    y = data.y2;
    let d = dist(x, y, data.x, data.y)
    d = constrain(d, 60, 7000);

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
    stepSize = 1;

    if (d > stepSize) {
        angle = Math.atan2(data.y - y, data.x - x);
        for (let i = 0; i < 8; i++) {
            numX[i] += random(0 - stepSize / 2, stepSize / 2);
            numY[i] += random(0 - stepSize / 2, stepSize / 2);
        }
        applyMatrix();
        translate(x, y);
        rotate(angle + random(-0.1, 0.1));
        stroke(col);
        strokeWeight(stepSize / 4);
        // if (frameCount%2 == 0) stroke(100);
        // line(0, 0, 0, linelength*random(0.95, 1)*d/100);
        //rectMode(CENTER);
        //noFill();
        //rect(0, 0, linelength*random(0.95, 1)*d/100, linelength*random(0.95, 1)*d/100);

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
    let angle = TWO_PI / 8;
    let rad = 100 * random(0.5, 1);
    for (let i = 0; i < 8; i++) {
        numX[i] = cos(angle * i) * rad;
        numY[i] = sin(angle * i) * rad;
    }
}


function brush3(data) {
    x = data.x2;
    y = data.y2;
    let d = dist(x, y, data.x, data.y)
    d = constrain(d, 60, 7000);

    if (d > stepSize) {

    }
}


function brush4(data) {
    let angle;
    x = data.x2;
    y = data.y2;
    let d = dist(x, y, data.x, data.y)
    d = constrain(d, 60, 7000);

    if (d > stepSize) {

    }
}

function brush5(data) {
    let angle;
    x = data.x2;
    y = data.y2;
    let d = dist(x, y, data.x, data.y)
    d = constrain(d, 60, 7000);

    if (d > stepSize) {

    }
}