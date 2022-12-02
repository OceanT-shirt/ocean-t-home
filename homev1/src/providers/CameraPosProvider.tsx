import React, { createContext, ReactNode, useState } from 'react';
import * as THREE from "three"


type CameraPosContextType = {
    cameraPos: THREE.Vector3;
    setCameraPos: (newCameraPos: THREE.Vector3) => void;
};


export const CameraPosContext = createContext<CameraPosContextType>({
    cameraPos: new THREE.Vector3(),
    setCameraPos: (newCameraPos: THREE.Vector3) => {console.log(newCameraPos)},
});


interface Props {
    children: ReactNode
}


export const CameraPosProvider = ({children} : Props) => {
    const [cameraPos, setCameraPos] = useState<THREE.Vector3>(new THREE.Vector3())

    const newContext: CameraPosContextType = {
        cameraPos: cameraPos,
        setCameraPos: (newCameraPos) => {
            setCameraPos(newCameraPos)
            console.log("Provider: camera pos renewed", cameraPos)
        },
    };

    return (
        <CameraPosContext.Provider value={newContext}>{children}</CameraPosContext.Provider>
    );
};
