import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Model = () => {
    const mesh = useRef<THREE.Mesh>(null);
    const { scene, animations } = useGLTF("3dModel/scene.gltf");

    console.log(scene)

    if (animations && animations.length) {
        const mixer = new THREE.AnimationMixer(scene);
        animations.forEach((clip) => {
            mixer.clipAction(clip).play();
        });

        useFrame((_, delta) => {
            mixer.update(delta);
        });
    }

    return (
        <mesh ref={mesh} position={[0, 0, 0]} scale={[5, 5, 5]}>
            <primitive object={scene} />
        </mesh>
    );
}

export default Model;