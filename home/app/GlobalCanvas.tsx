'use client';

import {Canvas, extend, useFrame, useLoader, useThree} from '@react-three/fiber';
import * as THREE from 'three'
import {useEffect, useMemo, useRef, useState} from "react";
// TODO issue with importing react-three/postprocessing
// import {EffectComposer} from "@react-three/postprocessing";
// import {RoundedBox} from "@react-three/drei";
// import { Water } from 'three-stdlib'


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

const Plane = ({ color, position }: {color: string, position: [number, number, number]}) => (
    <mesh
        position={position}
    >
        <boxGeometry args={[12, .2, 2]} />
        <meshLambertMaterial color={color} reflectivity={0.5} />
    </mesh>
)

// extend({ Water })
//
// function Ocean() {
//     const ref = useRef()
//     const gl = useThree((state) => state.gl)
//     const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg')
//     waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
//     const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
//     const config = useMemo(
//         () => ({
//             textureWidth: 512,
//             textureHeight: 512,
//             waterNormals,
//             sunDirection: new THREE.Vector3(),
//             sunColor: 0xffffff,
//             waterColor: 0x001e0f,
//             distortionScale: 3.7,
//             fog: false,
//             format: gl.encoding
//         }),
//         [waterNormals]
//     )
//     useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
//     return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
// }


// export function Effects() {
//     // const props = useControls({
//     //     temporalResolve: true,
//     //     STRETCH_MISSED_RAYS: true,
//     //     USE_MRT: true,
//     //     USE_NORMALMAP: true,
//     //     USE_ROUGHNESSMAP: true,
//     //     ENABLE_JITTERING: true,
//     //     ENABLE_BLUR: true,
//     //     temporalResolveMix: { value: 0.9, min: 0, max: 1 },
//     //     temporalResolveCorrectionMix: { value: 0.25, min: 0, max: 1 },
//     //     maxSamples: { value: 0, min: 0, max: 1 },
//     //     resolutionScale: { value: 1, min: 0, max: 1 },
//     //     blurMix: { value: 0.5, min: 0, max: 1 },
//     //     blurKernelSize: { value: 8, min: 0, max: 8 },
//     //     blurSharpness: { value: 0.5, min: 0, max: 1 },
//     //     rayStep: { value: 0.3, min: 0, max: 1 },
//     //     intensity: { value: 1, min: 0, max: 5 },
//     //     maxRoughness: { value: 0.1, min: 0, max: 1 },
//     //     jitter: { value: 0.7, min: 0, max: 5 },
//     //     jitterSpread: { value: 0.45, min: 0, max: 1 },
//     //     jitterRough: { value: 0.1, min: 0, max: 1 },
//     //     roughnessFadeOut: { value: 1, min: 0, max: 1 },
//     //     rayFadeOut: { value: 0, min: 0, max: 1 },
//     //     MAX_STEPS: { value: 20, min: 0, max: 20 },
//     //     NUM_BINARY_SEARCH_STEPS: { value: 5, min: 0, max: 10 },
//     //     maxDepthDifference: { value: 3, min: 0, max: 10 },
//     //     maxDepth: { value: 1, min: 0, max: 1 },
//     //     thickness: { value: 10, min: 0, max: 10 },
//     //     ior: { value: 1.45, min: 0, max: 2 }
//     // })
//     const props = {
//             temporalResolve: true,
//             STRETCH_MISSED_RAYS: true,
//             USE_MRT: true,
//             USE_NORMALMAP: true,
//             USE_ROUGHNESSMAP: true,
//             ENABLE_JITTERING: true,
//             ENABLE_BLUR: true,
//     }
//     return (
//             <EffectComposer disableNormalPass>
//                 {/*<SSR {...props} />*/}
//             </EffectComposer>
//     )
// }

export default function GlobalCanvas() {
    return (
        <>
            <Canvas dpr={2} shadows={true}>
                <color attach="background" args={[0xefefef]} />
                <ambientLight intensity={0.02} />
                <directionalLight intensity={0.5} position={[-10, 10, 10]} />
                <Plane color={'skyblue'} position={[0, -2.5, 0]} />
                <Plane color={'skyblue'} position={[0, 2.5, 0]} />
                <InfoDisplay />
                {/*<Effects />*/}
            </Canvas>
        </>
    );
}

