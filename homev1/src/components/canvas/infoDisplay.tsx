import {useFrame} from "@react-three/fiber";
import {useEffect, useRef, useState} from "react";
import * as THREE from 'three'

export const InfoDisplay = () => {
    const ref = useRef<THREE.Mesh>(null!);
    const [isHovered, setIsHovered] = useState(false);
    const [video] = useState(() => Object.assign(document.createElement('video'), {src: "/Summer_Forest.mp4", crossOrigin: 'Anonymous', loop: true, muted: true}))
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
            position={[0, 3, 0]}
        >
            <planeGeometry />
            <meshBasicMaterial toneMapped={false}>
                <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
            </meshBasicMaterial>
        </mesh>

    );
}
