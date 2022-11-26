import {useState} from "react";
import {useCursor} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import * as THREE from 'three'

export const Button3D = ({ color, position }: {color: string, position: [number, number, number]}) => {
    const [active, setActive] = useState<boolean>(false)
    const [portfolio, setPortfolio] = useState<boolean>(true)

    useCursor(active)
    useFrame((state) => {
        state.camera.position.lerp(new THREE.Vector3(0, 100, portfolio ? 10 : 30 ), 0.03)
    })

    return(
        <mesh
            position={position}
            onClick={() => setPortfolio(!portfolio)}
            onPointerOver={() => setActive(true)}
            onPointerOut={() => setActive(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshLambertMaterial color={color} reflectivity={0.5} />
        </mesh>
    )
}
