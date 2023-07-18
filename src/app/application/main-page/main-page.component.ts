import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import {GLTF, GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit,AfterViewInit {
  @ViewChild('canvas') canvasRef:ElementRef = new ElementRef(document.getElementById('canvas'));
  @ViewChild('modelDiv') modelContainerRef:ElementRef = new ElementRef(document.getElementById('modeldiv'));
  @Input() public rotationSpeedX: number = 0.2;
  @Input() public rotationSpeedY: number = -0.0015;
  @Input() public cameraZ: number = 0.85;
  //Declarations
  private camera! : THREE.PerspectiveCamera;
  private get modelContainer():HTMLDivElement{
    return this.modelContainerRef.nativeElement;
  }
  private get canvas():HTMLCanvasElement{
    return this.canvasRef.nativeElement;
  }
  private loader = new GLTFLoader();
  private renderer!:THREE.WebGLRenderer;
  private scene: THREE.Scene = new THREE.Scene();
  private model!:THREE.Group;
  private light!:THREE.DirectionalLight;
  private light1!:THREE.DirectionalLight
  private light2!:THREE.DirectionalLight;
  
  private createScene():void{
    //creating scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xfcf7eb);

    // //create cube
    // this.cube = new THREE.Mesh( this.geometry, this.material ); 
    //this.scene.add(this.mesh);
    if(this.model!=undefined)
    this.scene.add(this.model);
    
    //adding helper
    // const helper = new THREE.DirectionalLightHelper( this.light, 5 );
    // this.scene.add( helper );
    // //creating camera
    this.camera = new THREE.PerspectiveCamera(
       40,
       this.getAspectratio()
     );
     this.camera.position.y=0;
    this.camera.position.z=this.cameraZ;
    // //adding camera
     this.scene.add(this.camera);
      //this.modelBox.getCenter(this.model.position);
      //this.scene.add(this.model);
      
      //creating directional light
      if(this.model!=undefined){
        this.light = new THREE.DirectionalLight(0xffffff,2);
        this.light.position.set(-3,-1,2);
        this.light.target=this.model;
        this.scene.add(this.light);
        this.light1 = new THREE.DirectionalLight(0xffffff,2);
        this.light1.position.set(3,-1,2);
        this.light1.target=this.model;
        this.scene.add(this.light1);
        this.light2 = new THREE.DirectionalLight(0xffffff,2);
        this.light2.position.set(0,-5,4.5);
        this.light2.target=this.model;
        this.scene.add(this.light2);
      }
  }
  private getAspectratio():number{
    return this.canvas.clientWidth/this.canvas.clientHeight;
  }
  private animeteCube():void{
    if(this.model!=undefined){
    this.model.rotation.x =this.rotationSpeedX;
    this.model.rotation.y +=this.rotationSpeedY;
    }
  }
  private startRenderingLoop():void{
    this.renderer = new THREE.WebGLRenderer({canvas:this.canvas});

    let component: MainPageComponent = this;
    (function render(){
      component.renderer.setPixelRatio(devicePixelRatio*2);
      component.renderer.setSize(component.modelContainer.clientWidth,component.modelContainer.clientHeight);
      requestAnimationFrame(render);
      component.createScene();
      component.animeteCube();
      component.renderer.render(component.scene,component.camera);
    }());
  }
  ngAfterViewInit(): void {
    this.createScene();
    this.load3Dmodels();
    this.startRenderingLoop();
  }
  ngOnInit(): void {

  }
  private load3Dmodels():void{
    if(this.model==undefined){
      this.loader.load('./../../assets/3D-models/honey-bottle-and-can.glb',(gltf:GLTF)=>{ 
        this.model = gltf.scene;
        this.scene.add( this.model);
      });
      //deployment link
      // this.loader.load('./assets/3D-models/honey-bottle-and-can.glb',(gltf:GLTF)=>{ 
      //   this.model = gltf.scene;
      //   this.scene.add( this.model);
      // });
    }
  }
}
