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

//controls
//event lisner when we press key
document.addEventListener("keydown",onKeyDown,false);

//function when key press execute this function

function onKeyDown(event){
    let keycode=event.which;

    //Right arrow 
    if(keycode===39){
        camera.translateX(-0.05);
    }
    else if(keycode===37){
        camera.translateX(0.05); 
    }

    else if(keycode===38){
        camera.translateY(-0.05); 
    }

    else if(keycode===40){
        camera.translateY(0.05); 
    }

}


let render = function(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
    requestAnimationFrame(render);
};

render();











