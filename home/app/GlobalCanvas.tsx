'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three'
import {useEffect, useRef, useState} from "react";
import ReactPlayer from 'react-player';

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

function InfoDisplay() {
    const ref = useRef<THREE.Mesh>(null!);
    const [isHovered, setIsHovered] = useState(false);
    const [video] = useState(() => Object.assign(document.createElement('video'), {src: "./Summer_Forest.mp4", loop: true}))
    useEffect(() => void video.play(), [video])
    useFrame((state) => {
        if (ref.current && !isHovered) {
            ref.current.rotation.y = Math.PI * Math.sin(state.clock.getElapsedTime()/2)*2/5
        }
    })

    return (
        <mesh
            ref={ref}
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
            scale={isHovered ? [8, 6, .2] : [4, 3, .1]}
            rotation={isHovered ? [0, 0, 0] : [0, 7 * Math.PI / 4, 0]}
        >
            <planeGeometry />
            <meshBasicMaterial toneMapped={false}>
                <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
            </meshBasicMaterial>
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
                {/*<Mesh />*/}
                <InfoDisplay />
            </Canvas>
        </>
    );
}

