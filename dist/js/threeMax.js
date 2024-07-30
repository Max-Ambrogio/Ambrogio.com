// function makeScene(elem) {
//     const scene = new THREE.Scene();

//     const fov = 45;
//     const aspect = 2;  // the canvas default
//     const near = 0.1;
//     const far = 5;
//     const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//     camera.position.z = 2;
//     camera.position.set(0, 1, 2);
//     camera.lookAt(0, 0, 0);
   
//     {
//       const color = 0xFFFFFF;
//       const intensity = 1;
//       const light = new THREE.DirectionalLight(color, intensity);
//       light.position.set(-1, 2, 4);
//       scene.add(light);
//     }
   
//     return {scene, camera, elem};
// }




// let webdevModel;
// function sceneOne(){
//     const loaderOne = new THREE.GLTFLoader();
//     loaderOne.load('./dist/model/webdev.gltf', function(gltf){
//         webdevModel = gltf;
//         scene.add(gltf.scene);
//         gltf.animations;
//     }, undefined, function (error){
//         console.error(error)
//     })
// }

// sceneOne();


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// const renderer = new THREE.WebGLRenderer({
//     alpha: true,
// });
// const frameOne = document.querySelector('.webdev')
// // renderer.setSize(600, 500);
// frameOne.appendChild( renderer.domElement );
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// // scene.add( cube );

// camera.position.z = 2;
// // camera.position.x = 1;
// // camera.rotation.x = -0.9;
// // cube.position.sub(center);

// function resizeRendererToDisplaySize(renderer) {
// const canvas = renderer.domElement;
// const width = canvas.clientWidth;
// const height = canvas.clientHeight;
// const needResize = canvas.width !== width || canvas.height !== height;
// if (needResize) {
//     renderer.setSize(width, height, false);
// }
//     return needResize;
// }

// function render(time) {
//     time *= 0.001;

//     if (resizeRendererToDisplaySize(renderer)) {
//     const canvas = renderer.domElement;
//         camera.aspect = canvas.clientWidth / canvas.clientHeight;
//         camera.updateProjectionMatrix();
//     }

//     renderer.render(scene, camera);

//     requestAnimationFrame(render);
// }

// requestAnimationFrame(render);


// const animate = () => {
//     if(webdevModel){
//         webdevModel.scene.rotation.y += 0.001;
//     }
//     var myTween;
//     function onMouseMove(event) {
//         if(myTween)
//         myTween.kill();

//         mouseX = ( event.clientX / window.innerWidth ) * 2 - 1;
//         mouseY = - ( event.clientY / window.innerHeight ) * 2 + 1;
//         myTween = gsap.to(webdevModel.rotation, {duration: 0.1, x: mouseY*-1, y: mouseX});
//     //particles.rotation.x = mouseY*-1;
//     //particles.rotation.y = mouseX;
//     }
    
//     requestAnimationFrame( animate );

//     renderer.render( scene, camera );
// };
// animate();

'use strict';

/* global THREE */

function main() {
  const canvas = document.querySelector('#container');
  const renderer = new THREE.WebGLRenderer({canvas, alpha: true});

  function makeScene(elem) {
    const scene = new THREE.Scene();

    const fov = 45;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 1, 2);
    camera.lookAt(0, 0, 0);

    {
      const color = 0xFFFFFF;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene.add(light);
    }

    return {scene, camera, elem};
  }

  function setupScene1() {
    const loaderOne = new THREE.GLTFLoader();
        loaderOne.load('./dist/model/webdev.gltf', function(gltf){
            webdevModel = gltf;
            scene.add(gltf.scene);
            gltf.animations;
        }, undefined, function (error){
            console.error(error)
        })
  }

//   function setupScene2() {
//     const sceneInfo = makeScene(document.querySelector('#pyramid'));
//     const radius = .8;
//     const widthSegments = 4;
//     const heightSegments = 2;
//     const geometry = new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments);
//     const material = new THREE.MeshPhongMaterial({
//       color: 'blue',
//       flatShading: true,
//     });
//     const mesh = new THREE.Mesh(geometry, material);
//     sceneInfo.scene.add(mesh);
//     sceneInfo.mesh = mesh;
//     return sceneInfo;
//   }

  const sceneInfo1 = setupScene1();
//   const sceneInfo2 = setupScene2();

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function rendenerSceneInfo(sceneInfo) {
    const {scene, camera, elem} = sceneInfo;

    // get the viewport relative position opf this element
    const {left, right, top, bottom, width, height} =
        elem.getBoundingClientRect();

    const isOffscreen =
        bottom < 0 ||
        top > renderer.domElement.clientHeight ||
        right < 0 ||
        left > renderer.domElement.clientWidth;

    if (isOffscreen) {
      return;
    }

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    const positiveYUpBottom = renderer.domElement.clientHeight - bottom;
    renderer.setScissor(left, positiveYUpBottom, width, height);
    renderer.setViewport(left, positiveYUpBottom, width, height);

    renderer.render(scene, camera);
  }

  function render(time) {
    time *= 0.001;

    resizeRendererToDisplaySize(renderer);

    renderer.setScissorTest(false);
    renderer.clear(true, true);
    renderer.setScissorTest(true);

    sceneInfo1.mesh.rotation.y = time * .1;
    // sceneInfo2.mesh.rotation.y = time * .1;

    rendenerSceneInfo(sceneInfo1);
    // rendenerSceneInfo(sceneInfo2);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();


