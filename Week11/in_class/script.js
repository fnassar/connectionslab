const { RGBA_ASTC_10x10_Format } = require("./js/three");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();


// // set three.js
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// //Create a WebGLRenderer and turn on shadows in the renderer
// const renderer = new THREE.WebGLRenderer();
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

// //Create a SpotLight and turn on shadows for the light
// const light = new THREE.SpotLight(0xffffff);
// light.castShadow = true; // default false
// scene.add(light);

// //Set up shadow properties for the light
// light.shadow.mapSize.width = 512; // default
// light.shadow.mapSize.height = 512; // default
// light.shadow.camera.near = 0.5; // default
// light.shadow.camera.far = 500; // default
// light.shadow.focus = 1; // default

// //Create a sphere that cast shadows (but does not receive them)
// const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
// const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
// const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
// sphere.castShadow = true; //default is false
// sphere.receiveShadow = false; //default
// scene.add(sphere);

// //Create a plane that receives shadows (but does not cast them)
// const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
// const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
// const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// plane.receiveShadow = true;
// scene.add(plane);

// //Create a helper for the shadow camera (optional)
// const helper = new THREE.CameraHelper(light.shadow.camera);
// scene.add(helper);


// // const renderer = new THREE.WebGLRenderer();
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // document.body.appendChild(renderer.domElement);

// // // play with setup stuff
// // const geometry = new THREE.BoxGeometry();
// // const material = new THREE.MeshBasicMaterial({ color: 0x63CCCA });
// // const cube = new THREE.Mesh(geometry, material);
// // scene.add(cube);

// // camera.position.z = 10;

// // // spotlight shadow

// // const spotLight = new THREE.SpotLight(0xffffff);
// // spotLight.position.set(10, 10, 10);
// // scene.add(spotLight);

// // // const spotLightHelper = new THREE.SpotLightHelper(spotLight);
// // // scene.add(spotLightHelper);

// // // const spotLight = new THREE.SpotLight(0xffffff);
// // spotLight.position.set(100, 1000, 100);

// // spotLight.castShadow = true;

// // spotLight.shadow.mapSize.width = 1024;
// // spotLight.shadow.mapSize.height = 1024;

// // spotLight.shadow.camera.near = 500;
// // spotLight.shadow.camera.far = 4000;
// // spotLight.shadow.camera.fov = 30;
// // scene.add(spotLight);
// // // end spotlight setup


// // const material2 = new THREE.LineBasicMaterial({ color: 0x42858C });
// // const points = [];
// // points.push(new THREE.Vector3(-2, 0, 0));
// // points.push(new THREE.Vector3(0, 2, 0));
// // points.push(new THREE.Vector3(2, 0, 0));
// // points.push(new THREE.Vector3(0, -2, 0));
// // points.push(new THREE.Vector3(-2, 0, 0));

// // const geometry2 = new THREE.BufferGeometry().setFromPoints(points);
// // const line = new THREE.Line(geometry2, material2);
// // // loop/draw
// // function animate() {
// //     requestAnimationFrame(animate);
// //     cube.rotation.x += 0.01;
// //     cube.rotation.y += 0.01;
// //     scene.add(line);
// //     renderer.render(scene, camera);
// // }
// // animate();
// // // er.render(scene, camera);
// // // animate();