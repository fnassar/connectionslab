// P5 Code here

// function sketch_map(p) {
//     p.setup = function() {
//         p.createCanvas(400, 400);
//         p.background(255, 0, 0);
//     }

//     p.draw = function() {
//         // stuff to draw
//     }
// }
// new p5(sketch_map, 'map')
// window.addEventListener('load', () => {

let sketch = function(p) {
    p.setup = function() {
        p.createCanvas(100, 100);
        p.background(0);
    }
};
// new p5(sketch, window.document.getElementById('worldmap'));
// new p5(sketch, 'worldmap');
// console.log(document.getElementById('bla').innerText);
// let node = document.createElement('div');
// document.getElementById('worldmap').appendChild(node);
new p5(sketch, node);
// })

// Step 1: find API (one or two)
// longitude/lattitude is 90| and 360_ (found)
// find city image api (found image search engine api)
// Step 2: start making Wire frame (done)
// step 3: write p5 code on test website
// points
// zoom on doubleclick (or +- on side maybe)
// open image on click on enlarge sign(bottom right)
// drag to move zoomed area
// use second found image
// click to get location based on long/lat and view details and image selection
//
// step 4: controle p5 location