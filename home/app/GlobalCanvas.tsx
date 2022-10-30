'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three'
import { useRef, useState} from "react";

function Mesh() {
   const ref = useRef<THREE.Mesh>(null!);
   const [isHovered, setIsHovered] = useState(false);
   useFrame(() => {
       if (ref.current) {
       ref.current.rotation.x += 0.01;
       ref.current.rotation.y += 0.01;
       }
   })
       return (
                <mesh
                    ref={ref}
                    onPointerOver={() => setIsHovered(true)}
                    onPointerOut={() => setIsHovered(false)}
                >
                    <torusBufferGeometry args={isHovered ? [2, 1, 20, 50] : [1.5, 0.75, 20, 50]} />
                    <meshLambertMaterial color={isHovered ? 0x44c2b5 : 0x0078e6} />
                </mesh>

       );

}

export default function GlobalCanvas() {
    return (
        <>
            <Canvas dpr={2} shadows={true}>
                <color attach="background" args={[0xf5f3fd]} />
                <ambientLight intensity={0.5} />
                <directionalLight intensity={0.5} position={[-10, 10, 10]} />
                <Mesh />
            </Canvas>
        </>
    );
}

