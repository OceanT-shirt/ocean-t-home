import {useFrame} from "@react-three/fiber";
import {useContext, useState} from "react";
import {CanvasContext} from "../../providers/CanvasProvider";
import * as THREE from 'three'

export const CameraControl = () => {
    const { route } = useContext(CanvasContext)
    const homePos = [0, 100, 10]
    const [portfolioCPos, setPortfolioCPos] = useState<[number, number, number]>([0, 100, 30])

    // camera control
    useFrame((state) => {
        if (route === "HOME") {
            state.camera.position.lerp(new THREE.Vector3(...homePos), 0.03)
        } else if (route === "PORTFOLIO") {
            state.camera.position.lerp(new THREE.Vector3(...portfolioCPos), 0.03)
        } else {

        }

    })

    return(
        <mesh></mesh>
    )
}