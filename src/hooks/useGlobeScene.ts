import { useEffect, RefObject } from 'react';
import * as THREE from 'three'; // three.js (i.e. library untuk 3D)

// Literally ini semua, aku dapat dari 'https://threejs.org/docs'
// Rencana-nya menggunakan React three fiber jg, tapi ini cukup simple -- so, i digress
export default function(containerRef: RefObject<HTMLDivElement>, onReady?: () => void): void {
    useEffect(() => {

        if (!containerRef.current)
            return;

        const container = containerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,                                             // satuan degree
            container.clientWidth / container.clientHeight, // always use ratio between panjang dan tinggi
            0.1,                                            // near: batas minimum view (so? semacam culling)
            20                                              // far : batas maksimum view (gak penting utk kita -- karena kita gak gerakin kameranya)
        );
        camera.position.z = 5; // Bayangkan aja z-axis sebagai axis yang menuju ke kamera (basically jarak kamera dari objek)
        
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });

        renderer.setSize(
            container.clientWidth,
            container.clientHeight
        );

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // idk, what it do but it is recommended...
        renderer.setClearColor(0x000000, 0);

        container.appendChild(renderer.domElement);

        // Icosahedron lebih appealing dari Sphere, itu kenapa aku pilih former
        const geometry1 = new THREE.IcosahedronGeometry(3, 4);
        const material1 = new THREE.MeshBasicMaterial({
            color: 0x2196F3,
        });
        const mesh1 = new THREE.Mesh(geometry1, material1);

        // Wireframe mesh
        const geometry2 = new THREE.IcosahedronGeometry(3, 4);
        const material2 = new THREE.MeshBasicMaterial({
            color: 0xEEEEEE,
            wireframe: true,
        });
        const mesh2 = new THREE.Mesh(geometry2, material2);

        const group = new THREE.Group();
        group.add(mesh1);
        group.add(mesh2);
        scene.add(group);
        group.position.set(0, -0.5, 0);

        const clock = new THREE.Clock();
        let hasCalledReady = false;

        const frame = () => {
            group.rotation.y += 0.25 * clock.getDelta(); // idk why, increment-ing y malah gerakin secara horizontal
            renderer.render(scene, camera);

            if (!hasCalledReady) {
                hasCalledReady = true;
                onReady?.();
            }
        };

        renderer.setAnimationLoop(frame); // mirip 'requestAnimationFrame()'?

        const resize = () => {
            const w = container.clientWidth;
            const h = container.clientHeight;

            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };

        window.addEventListener("resize", resize);

        // bersihkan (agak ironis, GB-collected language tp masih perlu free memori -- ya, palingan karena rely dengan WebGL api)
        return () => {
            window.removeEventListener("resize", resize);
            renderer.setAnimationLoop(null);

            geometry1.dispose();
            material1.dispose();
            geometry2.dispose();
            material2.dispose();
            renderer.dispose();

            container?.removeChild(renderer.domElement);
        };
    }, [containerRef, onReady]);
}