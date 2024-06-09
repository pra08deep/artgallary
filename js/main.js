//console.log("three object here",THREE);


const scene=new THREE.Scene(); //create scence

const camera= new THREE.PerspectiveCamera(
    75, //field of view
    window.innerWidth/window.innerHeight,//aspect raio
    0.1,
    1000,
);
scene.add(camera);
camera.position.z= 5;//move cam into 5 unit


//Render

const renderer =new THREE.WebGLRenderer({antialias:true}); //smooth edges
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setClearColor(0xffffff,1);//background color

document.body.appendChild(renderer.domElement); //add render to html

//lights
//ambirntLight
let ambientLight=new THREE.AmbientLight(0x101010,1.0);

ambientLight.postion=camera.postion;//light follows camera
scene.add(ambientLight);

//directional light

let sunLight=new THREE.DirectionalLight(0xdddddd,1.0);//color instensity
sunLight.position.y=15;
scene.add(sunLight);

let geometry=new THREE.BoxGeometry(1,1,1); //small box geometry is shape of the object
let material=new THREE.MeshBasicMaterial({color:'blue'});//color of the object
let cube= new THREE.Mesh(geometry,material);
scene.add(cube);

let render = function(){
    cube.rotation.x=cube.rotation.x + 0.01;
    cube.rotation.y=cube.rotation.y + 0.01;
    renderer.render(scene,camera);
    requestAnimationFrame(render);
};

render();











