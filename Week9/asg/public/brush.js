let ellipseSize = 200;
let ellipseSizeMin = 50;
let stepSize = 4;

let numX = [-100, -70, 0, 70, 100, 70, 0, -70];
let numY = [0, 70, 100, 70, 0, -70, -100, -70];

function brush1(data) {
    let angle;
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
        // console.log("1:", x, y, data.x, data.y);
        x = x + Math.cos(angle) * stepSize;
        y = y + Math.sin(angle) * stepSize;
        // console.log("2:", x, y, data.x, data.y);
    }
}