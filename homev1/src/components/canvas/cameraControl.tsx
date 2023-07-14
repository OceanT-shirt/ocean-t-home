import {useFrame} from "@react-three/fiber";
import { useContext, useEffect, useState } from 'react';
import * as THREE from 'three'
import {easing} from "maath";
import {CameraPosContext} from "../../providers/CameraPosProvider";
import { useKeyboardControls } from '@react-three/drei';

export const CameraControl = () => {
    // move camera based on the state
    const {cameraPos, setCameraPos} = useContext(CameraPosContext)
    const [, get] = useKeyboardControls()

    // camera control
    useFrame((state, dt) => {
        const {forward, backward, left, right, jump} = get()
        if (forward || backward || left || right || jump) {
            setCameraPos(cameraPos.add(new THREE.Vector3(0, 0, (Number(forward)-Number(backward)))))
        }
        const q = new THREE.Quaternion()
        easing.damp3(state.camera.position, cameraPos, 0.1, dt, 1000);
        console.log(forward, backward, left, right, jump, cameraPos)
        easing.dampQ(state.camera.quaternion, q, 0.1, dt, 1);
    })


    return(
        <mesh></mesh>
    )
}