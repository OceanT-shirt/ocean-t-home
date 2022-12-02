import {useFrame} from "@react-three/fiber";
import {useContext, useState} from "react";
import * as THREE from 'three'
import {easing} from "maath";
import {CameraPosContext} from "../../providers/CameraPosProvider";

export const CameraControl = () => {
    const {cameraPos, setCameraPos} = useContext(CameraPosContext)
    const [portfolioCPos, setPortfolioCPos] = useState<[number, number, number]>([0, 100, 30])

    // camera control
    useFrame((state, dt) => {
        easing.damp3(state.camera.position, cameraPos, 0.4, dt, 10);
        // easing.dampQ(state.camera.quaternion, q, 0.4, dt, 1);
    })


    return(
        <mesh></mesh>
    )
}