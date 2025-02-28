import gsap from "gsap";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const camera = new THREE.PerspectiveCamera(
  10,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 13;

const scene = new THREE.Scene();

var bee, mixer;

const loader = new GLTFLoader();

loader.load(
  "/model/demon_bee_full_texture.glb",
  (gltf) => {
    bee = gltf.scene;
    bee.position.y = -1;
    bee.rotation.y = 1.5;
    scene.add(bee);

    mixer = new THREE.AnimationMixer(bee);
    mixer.clipAction(gltf.animations[0]).play();

    modelMove();

    console.log("Model loaded successfully:", bee);
  },
  (xhr) => {
    console.log(`Loading: ${(xhr.loaded / xhr.total) * 100}% loaded`);
  },
  (error) => {
    console.error("Error loading model:", error);
  }
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("container3D").appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const topLight = new THREE.DirectionalLight(0xffffff);
topLight.position.set(500, 500, 500);
scene.add(topLight);

const reRender3D = () => {
  requestAnimationFrame(reRender3D);
  renderer.render(scene, camera);
  if (mixer) { mixer.update(0.02); }
}

reRender3D();

const arrPositionModel = [
  {
    id: 'banner',
    position: { x: 0, y: -1, z: 0 },
    rotation: { x: 0, y: 1.5, z: 0 }
  },
  {
    id: "intro",
    position: { x: 1, y: -1, z: -5 },
    rotation: { x: 0.5, y: -0.5, z: 0 },
  },
  {
    id: "description",
    position: { x: -1, y: -1, z: -5 },
    rotation: { x: 0, y: 0.5, z: 0 },
  },
  {
    id: "contact",
    position: { x: 0.8, y: -1, z: 0 },
    rotation: { x: 0.3, y: -0.5, z: 0 },
  },
];

const modelMove = () => {
  const sections = document.querySelectorAll(".section");
  var currentSection;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 3) {
      currentSection = section.id;
    }
  });

  let position_active = arrPositionModel.findIndex(
    (val) => val.id === currentSection
  );

  if (position_active >= 0) {
    let new_coordinates = arrPositionModel[position_active];
    gsap.to(bee.position, {
      x: new_coordinates.position.x,
      y: new_coordinates.position.y,
      z: new_coordinates.position.z,
      duration: 2,
      ease: "power1.inOut",
    });
    gsap.to(bee.rotation, {
      x: new_coordinates.rotation.x,
      y: new_coordinates.rotation.y,
      z: new_coordinates.rotation.z,
      duration: 3,
      ease: "power1.out"
    });
  }
}

window.addEventListener("scroll", () => {
  if (bee) {
    modelMove();
  }
});