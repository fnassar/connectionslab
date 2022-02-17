let url = "http://api.open-notify.org/astros.json";
let astrodata;
let dataReady = false;
let astronuts = [];

window.addEventListener('load', () => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            astrodata = data;
            dataReady = true;
            for (let i = 0; i < astrodata.people.length; i++) {
                astronuts.push(new Astronut(astrodata.people[i].name, astrodata.people[i].craft, i));
            }
            // 
        })
        .catch(err => {
            console.error(err);
        });

});




function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0, 0, 50);

}

function draw() {
    background(0, 0, 50);

    if (dataReady) {
        for (let i = 0; i < astrodata.people.length; i++) {
            astronuts[i].draw();
            astronuts[i].showName(mouseX, mouseY);
        }
    }
}




class Astronut {
    constructor(name, craft, n) {
        this.name = name;
        this.craft = craft;
        this.x = n * innerWidth / 10 + innerWidth / 20;
        this.y = innerHeight / 2;
        // this.
        // this.randx = Math.random() * 350 + 10;
        // this.randy = Math.random() * 350 + 10;
        // this.randR = Math.random() * 100 + 10;
    }
    draw() {
        ellipseMode(CENTER);
        fill(100);
        noStroke();
        ellipse(this.x, this.y, 20, 20);
    }
    showName(mx, my) {
        if (dist(mx, my, this.x, this.y) <= 10) {
            // textMode(CENTER);
            fill(255);
            text(this.name, this.x, this.y);
        }
    }

}