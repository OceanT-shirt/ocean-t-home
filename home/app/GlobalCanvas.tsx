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
                    <boxBufferGeometry args={isHovered ? [1.2, 1.2, 1.2] : [1, 1, 1]} />
                    <meshLambertMaterial color={isHovered ? 0x44c2b5 : 0x9178e6} />
                </mesh>

       );

}

export default function GlobalCanvas() {
    return (
        <>
            <Canvas dpr={2}>
                <color attach="background" args={[0xf5f3fd]} />
                <ambientLight intensity={0.5} />
                <directionalLight intensity={0.5} position={[-10, 10, 10]} />
                <Mesh />
            </Canvas>
        </>
    );
}

