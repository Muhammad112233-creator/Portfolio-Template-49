<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
const holder=ref(null);let renderer, frame, observer, controls
onMounted(async()=>{
 const THREE=await import('three');const {OrbitControls}=await import('three/examples/jsm/controls/OrbitControls.js')
 if(!holder.value)return
 const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(38,1,.1,100);camera.position.set(5,4,7)
 renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));holder.value.appendChild(renderer.domElement)
 controls=new OrbitControls(camera,renderer.domElement);controls.enableZoom=false;controls.enablePan=false;controls.enableDamping=true;controls.autoRotate=true;controls.autoRotateSpeed=1.4
 scene.add(new THREE.AmbientLight(0xffffff,2));const light=new THREE.DirectionalLight(0xffffff,3);light.position.set(4,6,5);scene.add(light)
 const mat=new THREE.MeshStandardMaterial({color:0xad0c11,roughness:.6});const gold=new THREE.MeshStandardMaterial({color:0x756857,metalness:.45,roughness:.45});const center=new THREE.Mesh(new THREE.IcosahedronGeometry(1,1),mat);scene.add(center)
 for(let i=0;i<3;i++){const ring=new THREE.Mesh(new THREE.TorusGeometry(2+i*.27,.016,8,100),gold);ring.rotation.set(i*.6, i*.7, i*.4);scene.add(ring);const ball=new THREE.Mesh(new THREE.SphereGeometry(.13,16,16),gold);ball.position.set(2+i*.27,0,0);ring.add(ball)}
 function resize(){if(!holder.value)return;const w=holder.value.clientWidth,h=holder.value.clientHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix()} observer=new ResizeObserver(resize);observer.observe(holder.value);resize()
 function animate(){frame=requestAnimationFrame(animate);controls.update();renderer.render(scene,camera)}animate()
});onBeforeUnmount(()=>{cancelAnimationFrame(frame);observer?.disconnect();controls?.dispose();renderer?.dispose()})
</script>
<template><div ref="holder" class="three-scene" aria-label="Interactive rotating three-dimensional orbit sculpture"></div></template>
