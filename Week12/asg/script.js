let canvas;
let title;
let enter;
let exit;
let open = false;

window.addEventListener('load', () => {
    canvas = document.getElementById('canvas');
    title = document.getElementById('title');
    enter = document.getElementById('enter_VR');
    exit = document.getElementById('exit_VR');
    // enter.addEventListener('submit', () => {
    //     canvas.style.display = 'block';
    //     title.style.display = 'none';
    // })
    // exit.addEventListener('click', () => {
    //     canvas.style.display = 'none';
    //     title.style.display = 'block';
    // })

})


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);