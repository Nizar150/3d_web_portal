//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
//what does 75 : window.innerWidth / window.innerHeight : 0.1 : 1000 mean ?

//Keep track of the mouse position, so we can make the eye move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//Keep the 3D object on a global variable so we can access it later
let object;

//OrbitControls allow the camera to move around the scene
let controls;
// Create a button element
const button = document.createElement('button');
button.textContent = 'Load 3D Model';

// Add an event listener to the button
button.addEventListener('click', function() {
  // Call the function that loads and renders the 3D model
  loadAndRender3DModel();
});

// Add the button to the page
document.body.appendChild(button);

// Define the function that loads and renders the 3D model
function loadAndRender3DModel() {
  //Set which object to render
  let objToRender = '18avr';

  //Instantiate a loader for the .gltf file
  const loader = new GLTFLoader();

  //Load the file
  loader.load(
    `models/${objToRender}/18_1avr.gltf`,
    function (gltf) {
      //If the file is loaded, add it to the scene
      object = gltf.scene;
      scene.add(object);
    },
    function (xhr) {
      //While it is loading, log the progress
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
      //If there is an error, log it
      console.error(error);
    }
  );

  //Instantiate a new renderer and set its size
  //Alpha: true allows for the transparent background 
  const renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0xffffff)
  renderer.setSize(window.innerWidth, window.innerHeight);

  //Add the renderer to the DOM
  document.getElementById("container3D").appendChild(renderer.domElement);

  //Set how far the camera will be from the 3D model
  camera.position.z = objToRender === "18avr" ? 1 : 10;

  //Add lights to the scene, so we can actually see the 3D model
  const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
  topLight.position.set(500, 500, 500) //top-left-ish
  topLight.castShadow = true;
  scene.add(topLight);

  const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "18avr" ? 5 : 1);
  scene.add(ambientLight);

  //This adds controls to the camera, so we can rotate / zoom it with the mouse
  if (objToRender === "18avr") {
    controls = new OrbitControls(camera, renderer.domElement);
  }

  //Render the scene
  function animate() {
    requestAnimationFrame(animate);
    //Here we could add some code to update the scene, adding some automatic movement

    // //Make the eye move
    //  if (object && objToRender === "7avr") {
    //    //I've played with the constants here until it looked good 
    //   object.rotation.y = -3 + mouseX / window.innerWidth * 3;
    //    object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
    //  }
    renderer.render(scene, camera);
  }

  //Add a listener to the window, so we can resize the window and the camera
  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  //add mouse position listener, so we can make the eye move
  document.onmousemove = (e) => {
    //store the mouse position in the mouseX and mouseY variables
    mouseX = e.clientX;
    mouseY = e.clientY;
    };
    
    //Call the animate function to start rendering the scene
    animate();
    }





    // Create a button element
const button1= document.createElement('button');
button1.textContent = 'Load 3D Model 1111';

// Add an event listener to the button
button1.addEventListener('click', function() {
  // Call the function that loads and renders the 3D model
  loadAndRender3DModel1();
});

// Add the button to the page
document.body.appendChild(button1);

// Define the function that loads and renders the 3D model
function loadAndRender3DModel1() {
  //Set which object to render
  let objToRender = '7avr';

  //Instantiate a loader for the .gltf file
  const loader1 = new GLTFLoader();

  //Load the file
  loader1.load(
    `models/${objToRender}/7avr.gltf`,
    function (gltf) {
      //If the file is loaded, add it to the scene
      object = gltf.scene;
      scene.add(object);
    },
    function (xhr) {
      //While it is loading, log the progress
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
      //If there is an error, log it
      console.error(error);
    }
  );

  //Instantiate a new renderer and set its size
  //Alpha: true allows for the transparent background 
  const renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0xffffff)
  renderer.setSize(window.innerWidth, window.innerHeight);

  //Add the renderer to the DOM
  document.getElementById("container3D").appendChild(renderer.domElement);

  //Set how far the camera will be from the 3D model
  camera.position.z = objToRender === "7avr" ? 1 : 10;

  //Add lights to the scene, so we can actually see the 3D model
  const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
  topLight.position.set(500, 500, 500) //top-left-ish
  topLight.castShadow = true;
  scene.add(topLight);

  const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "7avr" ? 5 : 1);
  scene.add(ambientLight);

  //This adds controls to the camera, so we can rotate / zoom it with the mouse
  if (objToRender === "7avr") {
    controls = new OrbitControls(camera, renderer.domElement);
  }

  //Render the scene
  function animate() {
    requestAnimationFrame(animate);
    //Here we could add some code to update the scene, adding some automatic movement

    // //Make the eye move
    //  if (object && objToRender === "7avr") {
    //    //I've played with the constants here until it looked good 
    //   object.rotation.y = -3 + mouseX / window.innerWidth * 3;
    //    object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
    //  }
    renderer.render(scene, camera);
  }

  //Add a listener to the window, so we can resize the window and the camera
  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  //add mouse position listener, so we can make the eye move
  document.onmousemove = (e) => {
    //store the mouse position in the mouseX and mouseY variables
    mouseX = e.clientX;
    mouseY = e.clientY;
    };
    
    //Call the animate function to start rendering the scene
    animate();
    }

// //Set which object to render
// let objToRender = '18avr';

// //Instantiate a loader for the .gltf file
// const loader = new GLTFLoader();

// //Load the file
// loader.load(
//   `models/${objToRender}/18avr.gltf`,
//   function (gltf) {
//     //If the file is loaded, add it to the scene
//     object = gltf.scene;
//     scene.add(object);
//   },
//   function (xhr) {
//     //While it is loading, log the progress
//     console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//   },
//   function (error) {
//     //If there is an error, log it
//     console.error(error);
//   }
// );

// //Instantiate a new renderer and set its size
//  //Alpha: true allows for the transparent background 
//  const renderer = new THREE.WebGLRenderer();
// renderer.setClearColor(0xffffff)
// renderer.setSize(window.innerWidth, window.innerHeight);
// //const renderer = new THREE.WebGLRenderer({ alpha: true }); //Alpha: true allows for the transparent background







// //Add the renderer to the DOM
// document.getElementById("container3D").appendChild(renderer.domElement);

// //Set how far the camera will be from the 3D model
// camera.position.z = objToRender === "18avr" ? 1 : 10;

// //Add lights to the scene, so we can actually see the 3D model
// const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
// topLight.position.set(500, 500, 500) //top-left-ish
// topLight.castShadow = true;
// scene.add(topLight);

// const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "18avr" ? 5 : 1);
// scene.add(ambientLight);

// //This adds controls to the camera, so we can rotate / zoom it with the mouse
// if (objToRender === "18avr") {
//   controls = new OrbitControls(camera, renderer.domElement);
// }

// //Render the scene
// function animate() {
//   requestAnimationFrame(animate);
//   //Here we could add some code to update the scene, adding some automatic movement

//   // //Make the obj move
//   //  if (object && objToRender === "7avr") {
//   //    //I've played with the constants here until it looked good 
//   //   object.rotation.y = -3 + mouseX / window.innerWidth * 3;
//   //    object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
//   //  }
//   renderer.render(scene, camera);
// }

// //Add a listener to the window, so we can resize the window and the camera
// window.addEventListener("resize", function () {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// //add mouse position listener, so we can make the eye move
// document.onmousemove = (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// }

// //Start the 3D rendering
// animate();
// // i want you to help me create a button inside which when i click on it the code above will be execut


// // Create a new GLTF loader
// const loader1 = new GLTFLoader();

// // Load the 3D model
// let model;
// loader1.load(
//   "18avr.gltf",
//   (gltf) => {
//     model = gltf.scene;
//     model.position.set(0, 0, 0);
//     scene.add(model);
//   },
//   undefined,
//   (error) => {
//     console.error(error);
//   }
// );

// //Create a new button element
// const button = document.createElement("button");
// button.innerHTML = "Click me!";
// document.body.appendChild(button);

// // Create a new raycaster
// const raycaster = new THREE.Raycaster();

// // Create a new mouse vector
// const mouse = new THREE.Vector2();

// // Add an event listener for when the button is clicked
// button.addEventListener("click", () => {
 