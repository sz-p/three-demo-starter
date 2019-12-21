import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import Stats from 'stats-js';

export default class ShowEarth {
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private controls: OrbitControls;
  private stats: Stats;

  name: string;
  container: HTMLDivElement;
  width: number;
  height: number;
  animateID: number;

  constructor(container: HTMLDivElement) {
    this.name = 'Earth';
    this.container = container;
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
  }

  init() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    this.renderer.setSize(this.width, this.height);
    this.container.appendChild(this.renderer.domElement);
    this.renderer.setClearColor(0x000000, 1);
  }

  initObject() {

  }

  initStats() {
    this.stats = new Stats();
    this.container.appendChild(this.stats.dom);
  }

  initHelper() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(40, this.width / this.height, 1, 1000);
    this.camera.position.set(0, 0, 0)
    this.scene.add(this.camera);
  }

  initScene() {
    this.scene = new THREE.Scene();
  }

  animation = () => {
    this.stats.begin();

    this.stats.end();
    this.animateID = window.requestAnimationFrame(this.animation);
  }

  public show = () => {
    this.init();
    this.initStats();
    this.initScene();
    this.initCamera();
    this.initObject();
    this.animation();
    this.initHelper();
  }

  public end = () => {
    cancelAnimationFrame(this.animateID);
  }
}
