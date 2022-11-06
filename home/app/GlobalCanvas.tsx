'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three'
import {useEffect, useRef, useState} from "react";
// import {Effects} from "./Effect";
// import {RoundedBox} from "@react-three/drei";


function InfoDisplay() {
    const ref = useRef<THREE.Mesh>(null!);
    const [isHovered, setIsHovered] = useState(false);
    const [video] = useState(() => Object.assign(document.createElement('video'), {src: "./Summer_Forest.mp4", loop: true}))
    useEffect(() => void video.play(), [video])
    useFrame((state) => {
        if (ref.current && !isHovered) {
            // ref.current.rotation.y = Math.PI * Math.sin(state.clock.getElapsedTime()/2)*2/5
        }
    })

    return (
        <mesh
            ref={ref}
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
            scale={[8, 4.5, .1]}
            rotation={[0, 0, 0]}
            position={[0, 0.7, 0]}
        >
            <planeGeometry />
            <meshBasicMaterial toneMapped={false}>
                <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
            </meshBasicMaterial>
        </mesh>

    );
}

const Plane = ({ color }: {color: string}) => (
    <mesh
        position={[0, -2.5, 0]}
    >
        <boxGeometry args={[12, .2, 2]} />
        <meshStandardMaterial color={color} envMapIntensity={0.5} roughness={0} metalness={0} />
    </mesh>
)

export default function GlobalCanvas() {
    return (
        <>
            <Canvas dpr={2} shadows={true}>
                <color attach="background" args={[0x111111]} />
                <ambientLight intensity={0.02} />
                {/*<directionalLight intensity={0.5} position={[-10, 10, 10]} />*/}
                <Plane color={'white'} />
                <InfoDisplay />
                {/*<Effects />*/}
            </Canvas>
        </>
    );
}

