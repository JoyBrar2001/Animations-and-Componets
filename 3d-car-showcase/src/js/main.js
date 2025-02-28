import * as THREE from "three";
import { OrbitControls, GLTFLoader } from "three/examples/jsm/Addons.js";
import { Tween, Easing, Group } from "@tweenjs/tween.js";

const tweenGroup = new Group();

const canvasform = document.getElementById("dCanvas");

var width = canvasform.offsetWidth;
var height = canvasform.offsetHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

var object;

var controls;

const loader = new GLTFLoader();
loader.load(
  "model/free_porsche_911_carrera_4s/scene.gltf",
  (gltf) => {
    object = gltf.scene;
    scene.add(object);
    console.log("Model Loaded:", object);
  },
  (xhr) => {
    console.log(`Loading: ${((xhr.loaded / xhr.total) * 100).toFixed(2)}% loaded`);
  },
  (error) => {
    console.error("Error loading model:", error);
  }
);


const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(width, height);

canvasform.appendChild(renderer.domElement);

camera.position.set(5, 0, 1);


const ambientLight = new THREE.AmbientLight(0x404040, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(0, 1, 0);
directionalLight.castShadow = true;
scene.add(directionalLight);

const light = new THREE.PointLight(0xc4c4c4, 50);
light.position.set(0, 300, 500);
scene.add(light);

const light2 = new THREE.PointLight(0xc4c4c4, 50);
light2.position.set(500, 100, 0);
scene.add(light2);

const light3 = new THREE.PointLight(0xc4c4c4, 50);
light3.position.set(0, 100, -500);
scene.add(light3);

const light4 = new THREE.PointLight(0xc4c4c4, 50);
light4.position.set(-500, 300, 500);
scene.add(light4);

controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

controls.minPolarAngle = 0;
controls.maxPolarAngle = Math.PI / 2;

function animate() {
  requestAnimationFrame(animate);
  tweenGroup.update();
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", function () {
  width = canvasform.offsetWidth;
  height = canvasform.offsetHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
});

const slider = document.querySelector(".slider");
const btnshowmore = document.querySelector("#showmore");

function runCamera(x, y, z) {
  const target = { x: camera.position.x, y: camera.position.y, z: camera.position.z };

  new Tween(target, tweenGroup)
    .to({ x, y, z }, 1200)
    .easing(Easing.Quadratic.InOut)
    .onUpdate(() => {
      camera.position.set(target.x, target.y, target.z);
      camera.lookAt(scene.position);
    })
    .start();
}

let statusContent = 'contentOne';
btnshowmore.onclick = () => {
  slider.classList.remove('contentOneAction');
  slider.classList.remove('contentTwoAction');

  switch (statusContent) {
    case 'contentOne':
      runCamera(3, 0, 1);
      statusContent = 'contentTwo';
      slider.classList.add('contentTwoAction');
      break;
    case 'contentTwo':
      runCamera(2, 3, 1);
      statusContent = 'fullScreen';
      break;
    case 'fullScreen':
      runCamera(5, 0, 1);
      slider.classList.add('contentOneAction');
      statusContent = 'contentOne';
      break;

    default:
      break;
  }
}