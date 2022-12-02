import {useContext, useState} from "react";
import {useCursor} from "@react-three/drei";
import {useLocation, useRoute} from "wouter";
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";
import * as THREE from "three"

export const Button3D = ({ color, position }: {color: string, position: [number, number, number]}) => {
    const [active, setActive] = useState<boolean>(false)
    const [, setLocation] = useLocation();
    const [match, ] = useRoute("/")
    const basePos = new THREE.Vector3(0, 100, 30)

    useCursor(active)
    useFrame((state, dt) => {
        if (match) {
            easing.damp3(state.camera.position, basePos, 0.4, dt, 10);
            // easing.dampQ(state.camera.quaternion, q, 0.4, dt, 1);
        }
        // console.log(state.camera.position);
    })

    return(
        <mesh
            position={position}
            onClick={() => setLocation(match ? "/items" : "/")}
            onPointerOver={() => setActive(true)}
            onPointerOut={() => setActive(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshLambertMaterial color={color} reflectivity={0.5} />
        </mesh>
    )
}
