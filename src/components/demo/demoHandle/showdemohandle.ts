import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import Stats from 'stats-js';

export default class ShowDemo {
	private renderer: THREE.WebGLRenderer;
	private camera: THREE.PerspectiveCamera;
	private scene: THREE.Scene;
	private controls: OrbitControls;
	private stats: Stats;
	private DEEP: number;
	private CAMERA_DISTANCE: number;

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
		this.DEEP = 10000;
		this.CAMERA_DISTANCE = 1000;
	}

	init() {
		this.renderer = new THREE.WebGLRenderer({
			antialias: true
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
		this.camera = new THREE.PerspectiveCamera(40, this.width / this.height, 1, this.DEEP);
		this.camera.position.z = this.CAMERA_DISTANCE;
		this.camera.position.x = 0;
		this.camera.position.y = 0;
		this.scene.add(this.camera);
	}

	initScene() {
		this.scene = new THREE.Scene();
	}

	animation = () => {
		this.stats.begin();
		this.renderer.render(this.scene, this.camera);
		this.controls.update();
		this.stats.end();
		this.animateID = window.requestAnimationFrame(this.animation);
  }

	public show = () => {
		this.init();
		this.initStats();
		this.initScene();
		this.initCamera();
		this.initObject();
		this.initHelper();
		this.animation();
  }

	public end = () => {
		cancelAnimationFrame(this.animateID);
	}
}
